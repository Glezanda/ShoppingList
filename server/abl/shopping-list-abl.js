const ShoppingList = require("../models/shopping-list"); // Import mongoose modelu nákupního seznamu

const createShoppingList = async (request, response) => {

    // 01 Vytvoření a uložení nového nákupního seznamu do databáze
    
        try {
            // Deklarace pomocné proměnné do které uložím Shopping list, který se uloží do databáze
            const newShoppingList = await ShoppingList.create(request.body); 
            
            response.status(201).json({     
                result: "Success!",
                method: request.method,
                data: {
                    shoppingList: newShoppingList
                }
            });
    
        } catch (error) {
            response.status(400).json({
                result: "Unsuccess!",
                message: error
            })
        }
    }

/*******************************************************************************************/

const getShoppingList = async (request, response) => {

    // 01 Získaní konkrétního nákupního seznamu z databáze
    
    try {

        // Deklarace pomocné proměnné do které získám Shopping list
        const shoppingList = await ShoppingList.findById(request.params.id);

        if (shoppingList){
            response.status(200).json({     
                result: "Success!",
                method: request.method,
                data: {
                    data: shoppingList
                }
            });
        }

        else {
            response.status(404).json({     
                result: "Unsuccess!",
                method: request.method,
                message: "Asked Shopping list was not found!"
            });
        }
    
        } catch (error) {
            response.status(400).json({
                result: "Unsuccess!",
                message: error
            })
        }
    }

/*******************************************************************************************/

const listShoppingList = async (request, response) => {
    
    // 01 Získaní všech nákupních seznamů z databáze.
    
    try {

        const shoppingLists = await ShoppingList.find();
        
        response.status(200).json({     
            result: "Success!",
            method: request.method,
            results: shoppingLists.length,
            data: shoppingLists
        });

    } catch (error) {
        response.status(400).json({
            result: "Unsuccess!",
            message: error.message
        })
    }
}

/*******************************************************************************************/

const updateShoppingList = async (request, response) => {
    
    // 01 Aktualizace konkrétního nákupního seznamu v databázi
    
        try {
            // Deklarace pomocné proměnné do které získám Shopping list
            const shoppingList = await ShoppingList.findById(request.params.id);
    
            if (shoppingList) {
                // Deklarace pomocné proměnné, do které získám aktualizovaný Shopping list z databáze
                const updatedShoppingList = await ShoppingList.findByIdAndUpdate(
                    request.params.id, 
                    request.body, 
                    {
                        new: true,
                        runValidators: true
                    }); 
            
                if (updatedShoppingList){
                    response.status(202).json({     
                        result: "Success!",
                        method: request.method,
                        message: "Shopping list was updated!",
                        data: {
                            updatedShoppingList: updatedShoppingList
                        }
                    });
                }
    
                else {
                    response.status(404).json({     
                        result: "Unsuccess!",
                        method: request.method,
                        message: "Shopping list was not updated!"
                    });
                }
            }
    
            else {
                response.status(404).json({     
                    result: "Unsuccess!",
                    method: request.method,
                    message: "Shopping list was not found!"
                });
            }
    
        } catch (error) {
            response.status(400).json({
                result: "Unsuccess!",
                message: error
            })
        }
    }

/*******************************************************************************************/

const deleteShoppingList = async (request, response) => {

    try {
        // Deklarace pomocné proměnné do které získám Shopping list
        const shoppingList = await ShoppingList.findById(request.params.id);

        if (shoppingList) {
            // Deklarace pomocné proměnné, do které získám Shopping list, který se smaže z databáze
            const deletedShoppingList = await ShoppingList.findByIdAndDelete(
                request.params.id, 
                request.body
            ); 
        
            if (deletedShoppingList){
                response.status(201).json({     
                    result: "Success!",
                    method: request.method,
                    message: "Shopping list has been deleted!",
                });
            }
        }

        else {
            response.status(404).json({     
                result: "Unsuccess!",
                method: request.method,
                message: "Asked shopping list was not found!"
            });
        }

    } catch (error) {
        response.status(400).json({
            result: "Unsuccess!",
            message: error
        })
    }
}
    
/*******************************************************************************************/

module.exports = {
    createShoppingList,
    getShoppingList,
    listShoppingList,
    updateShoppingList,
    deleteShoppingList
}