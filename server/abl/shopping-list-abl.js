const ShoppingList = require("../models/shopping-list"); // Import mongoose modelu nákupního seznamu

const createShoppingList = async (request, response) => {

    // 01 Vytvoření a uložení nového nákupního seznamu do databáze
    
        try {
            // Deklarace pomocné proměnné do které uložím nákupní seznam, který se uloží do databáze
            const newShoppingList = await ShoppingList.create(request.body); 
            
            response.status(201).json({     
                result: "Úspěch!",
                method: request.method,
                data: {
                    shoppingList: newShoppingList
                }
            });
    
        } catch (error) {
            response.status(400).json({
                result: "Neúspěch!",
                message: error
            })
        }
    }

/*******************************************************************************************/

const getShoppingList = async (request, response) => {

    // 01 Získaní konkrétního nákupního seznamu z databáze
    
    try {

        // Deklarace pomocné proměnné do které získám nákupní seznam
        const shoppingList = await ShoppingList.findById(request.params.id);

        if (shoppingList){
            response.status(200).json({     
                result: "Úspěch!",
                method: request.method,
                data: {
                    data: shoppingList
                }
            });
        }

        else {
            response.status(404).json({     
                result: "Neúspěch!",
                method: request.method,
                message: "Požadovaný nákupní seznam nebyl nalezen!"
            });
        }
    
        } catch (error) {
            response.status(400).json({
                result: "Neúspěch!",
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
            result: "Úspěch!",
            method: request.method,
            results: shoppingLists.length,
            data: shoppingLists
        });

    } catch (error) {
        response.status(400).json({
            result: "Neúspěch!",
            message: error.message
        })
    }
}

/*******************************************************************************************/

const updateShoppingList = async (request, response) => {
    
    // 01 Aktualizace konkrétního nákupního seznamu v databázi
    
        try {
            // Deklarace pomocné proměnné do které získám nákupní seznam
            const shoppingList = await ShoppingList.findById(request.params.id);
    
            if (shoppingList) {
                // Deklarace pomocné proměnné, do které získám aktualizovaný nákupní seznam z databáze
                const updatedShoppingList = await ShoppingList.findByIdAndUpdate(
                    request.params.id, 
                    request.body, 
                    {
                        new: true,
                        runValidators: true
                    }); 
            
                if (updatedShoppingList){
                    response.status(202).json({     
                        result: "Úspěch!",
                        method: request.method,
                        message: "Nákupní seznam byl aktualizován!",
                        data: {
                            updatedShoppingList: updatedShoppingList
                        }
                    });
                }
    
                else {
                    response.status(404).json({     
                        result: "Neúspěch!",
                        method: request.method,
                        message: "Nákupní seznam nebyl aktualizován!"
                    });
                }
            }
    
            else {
                response.status(404).json({     
                    result: "Neúspěch!",
                    method: request.method,
                    message: "Nákupní seznam nebyl nalezen!"
                });
            }
    
        } catch (error) {
            response.status(400).json({
                result: "Neúspěch!",
                message: error
            })
        }
    }

/*******************************************************************************************/

const deleteShoppingList = async (request, response) => {

    try {
        // Deklarace pomocné proměnné do které získám nákupní seznam
        const shoppingList = await ShoppingList.findById(request.params.id);

        if (shoppingList) {
            // Deklarace pomocné proměnné, do které získám nákupní seznam, který se smaže z databáze
            const deletedShoppingList = await ShoppingList.findByIdAndDelete(
                request.params.id, 
                request.body
            ); 
        
            if (deletedShoppingList){
                response.status(201).json({     
                    result: "Úspěch!",
                    method: request.method,
                    message: "Nákupní seznam byl smazán!",
                });
            }
        }

        else {
            response.status(404).json({     
                result: "Neúspěch!",
                method: request.method,
                message: "Požadovaný nákupní seznam nebyl nalezen!"
            });
        }

    } catch (error) {
        response.status(400).json({
            result: "Neúspěch!",
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