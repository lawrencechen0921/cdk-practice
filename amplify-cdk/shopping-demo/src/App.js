import { useCallback, useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import { parse } from 'recipe-ingredient-parser-v3';


function App() {
  const [ingredient, setIngredient] = useState()
  const [shoppingItems, setShoppingItems] = useState([])
  const fetchShoppingList = useCallback(async () => {
    const response = await API.graphql({ query: queries.listShoppingItems })
    setShoppingItems(response.data.listShoppingItems.items)
  })

  useEffect(() => {
    fetchShoppingList()
  }, [])

  return (
    <div className="App">
      <input value={ingredient} onChange={e => setIngredient(e.target.value)}/>
      <button onClick={async () => {
        const parsed = parse(ingredient, 'eng')
        console.log(parsed)
        if (parsed.unit && parsed.ingredient && parsed.quantity) {
          setIngredient("")
          await API.graphql({
            query: mutations.createShoppingItem,
            variables: {
              input: {
                ingredient: parsed.ingredient,
                quantity: parsed.quantity,
                unit: parsed.unit
              }
            }
          })
          fetchShoppingList()
        }
      }}>Add ingredient</button>
      <h1>Ingredients</h1>
      <button onClick={fetchShoppingList}>Refresh</button>
      <button onClick={async () => {
        await API.graphql({
          query: mutations.sendSummaryEmail
        })
      }}>Send summary email</button>
      <ul>
        {shoppingItems.map(({ ingredient, quantity, unit }) => <li>
          <div>{quantity} {unit} - {ingredient}</div>
        </li>)}
      </ul>
    </div>
  );
}

export default App;
