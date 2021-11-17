/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const sendSummaryEmail = /* GraphQL */ `
  mutation SendSummaryEmail {
    sendSummaryEmail
  }
`;
export const createShoppingItem = /* GraphQL */ `
  mutation CreateShoppingItem(
    $input: CreateShoppingItemInput!
    $condition: ModelShoppingItemConditionInput
  ) {
    createShoppingItem(input: $input, condition: $condition) {
      id
      ingredient
      quantity
      unit
      createdAt
      updatedAt
    }
  }
`;
export const updateShoppingItem = /* GraphQL */ `
  mutation UpdateShoppingItem(
    $input: UpdateShoppingItemInput!
    $condition: ModelShoppingItemConditionInput
  ) {
    updateShoppingItem(input: $input, condition: $condition) {
      id
      ingredient
      quantity
      unit
      createdAt
      updatedAt
    }
  }
`;
export const deleteShoppingItem = /* GraphQL */ `
  mutation DeleteShoppingItem(
    $input: DeleteShoppingItemInput!
    $condition: ModelShoppingItemConditionInput
  ) {
    deleteShoppingItem(input: $input, condition: $condition) {
      id
      ingredient
      quantity
      unit
      createdAt
      updatedAt
    }
  }
`;
