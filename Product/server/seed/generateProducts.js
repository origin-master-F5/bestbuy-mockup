const utils = require('./utils')


/**
 * Seeds the products 
 */
const seedProducts = async () => {
    try {
        await utils.createGames()
        console.log('Collection is saved.');

    } catch (error) {
        console.log('Error with saving documents', error)
    }
}

seedProducts()