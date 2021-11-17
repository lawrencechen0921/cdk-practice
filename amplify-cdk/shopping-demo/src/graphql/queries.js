/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShoppingItem = /* GraphQL */ `
  query GetShoppingItem($id: ID!) {
    getShoppingItem(id: $id) {
      id
      ingredient
      quantity
      unit
      createdAt
      updatedAt
    }
  }
`;
export const listShoppingItems = /* GraphQL */ `
  query ListShoppingItems(
    $filter: ModelShoppingItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShoppingItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ingredient
        quantity
        unit
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
