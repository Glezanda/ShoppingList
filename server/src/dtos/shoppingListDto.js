const { ValidationHelper } = require("uu_appg01_server").Validation;

// Define input validation schema for CreateShoppingList endpoint
const createShoppingListDtoIn = ValidationHelper.validateDtoSchema({
  name: ValidationHelper.string().isRequired(),
  owner: ValidationHelper.string().isRequired(),
  members: ValidationHelper.array(ValidationHelper.string()),
});

// Define output validation schema for CreateShoppingList endpoint
const createShoppingListDtoOut = ValidationHelper.validateDtoSchema({
  shoppingListId: ValidationHelper.string(),
  message: ValidationHelper.string(),
  error: ValidationHelper.any(),
});

// Define input validation schema for GetShoppingList endpoint
const getShoppingListDtoIn = ValidationHelper.validateDtoSchema({
  shoppingListId: ValidationHelper.string().isRequired(),
  userId: ValidationHelper.string().isRequired(),
});

// Define output validation schema for GetShoppingList endpoint
const getShoppingListDtoOut = ValidationHelper.validateDtoSchema({
  shoppingList: ValidationHelper.object(),
  message: ValidationHelper.string(),
  error: ValidationHelper.any(),
});

// Define input validation schema for AddItemToShoppingList endpoint
const addItemToShoppingListDtoIn = ValidationHelper.validateDtoSchema({
  shoppingListId: ValidationHelper.string().isRequired(),
  itemName: ValidationHelper.string().isRequired(),
});

// Define output validation schema for AddItemToShoppingList endpoint
const addItemToShoppingListDtoOut = ValidationHelper.validateDtoSchema({
  item: ValidationHelper.object(),
  message: ValidationHelper.string(),
  error: ValidationHelper.any(),
});

// Define input validation schema for RemoveItemFromShoppingList endpoint
const removeItemFromShoppingListDtoIn = ValidationHelper.validateDtoSchema({
  shoppingListId: ValidationHelper.string().isRequired(),
  itemId: ValidationHelper.string().isRequired(),
});

// Define output validation schema for RemoveItemFromShoppingList endpoint
const removeItemFromShoppingListDtoOut = ValidationHelper.validateDtoSchema({
  message: ValidationHelper.string(),
  error: ValidationHelper.any(),
});

// Define input validation schema for MarkItemAsCompleted endpoint
const markItemAsCompletedDtoIn = ValidationHelper.validateDtoSchema({
  shoppingListId: ValidationHelper.string().isRequired(),
  itemId: ValidationHelper.string().isRequired(),
});

// Define output validation schema for MarkItemAsCompleted endpoint
const markItemAsCompletedDtoOut = ValidationHelper.validateDtoSchema({
  message: ValidationHelper.string(),
  error: ValidationHelper.any(),
});

// Define input validation schema for DeleteShoppingList endpoint
const deleteShoppingListDtoIn = ValidationHelper.validateDtoSchema({
  shoppingListId: ValidationHelper.string().isRequired(),
});

// Define output validation schema for DeleteShoppingList endpoint
const deleteShoppingListDtoOut = ValidationHelper.validateDtoSchema({
  message: ValidationHelper.string(),
  error: ValidationHelper.any(),
});

module.exports = {
  createShoppingListDtoIn,
  createShoppingListDtoOut,
  getShoppingListDtoIn,
  getShoppingListDtoOut,
  addItemToShoppingListDtoIn,
  addItemToShoppingListDtoOut,
  removeItemFromShoppingListDtoIn,
  removeItemFromShoppingListDtoOut,
  markItemAsCompletedDtoIn,
  markItemAsCompletedDtoOut,
  deleteShoppingListDtoIn,
  deleteShoppingListDtoOut,
};
