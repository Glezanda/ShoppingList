const mongoose = require('mongoose'); // Import metod a syntaxe knihovny Mongoose

/******************************************************************************************************/

const shoppingListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Nákupní musí mít název"],
    },
    owner: {
        type: String,
        required: [true, "Nákuní seznam musí mít vlastníka"],
    },
    members: {
        type: [String],
        required: false
    },
    archived: {
        type: Boolean,
        required: false,
        default: false
    },
    items: {
        type: [{   
            item: String,
            amount: String,
            state: {
                type: Boolean,
                required: false,
                default: false
            }
        }],
        required: false
    },
})

const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);

/******************************************************************************************************/

module.exports = ShoppingList;
