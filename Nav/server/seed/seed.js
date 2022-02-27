const fs = require('fs');
const db = require('../db');

/**
 * Random PS4 game images
 */
const images = [
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6259/6259297_sd.jpg;maxHeight=400;maxWidth=400",
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6444/6444455_sd.jpg;maxHeight=400;maxWidth=400",
    "https://www.bestbuy.com/site/red-dead-redemption-2-standard-edition-playstation-4-playstation-5/5352400.p?skuId=5352400",
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255151_sd.jpg;maxHeight=400;maxWidth=400",
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6352/6352441_sd.jpg;maxHeight=200;maxWidth=200",
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415622_sd.jpg;maxHeight=400;maxWidth=400",
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5358/5358600_sd.jpg;maxHeight=400;maxWidth=400",
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6363/6363873_sd.jpg;maxHeight=400;maxWidth=400",
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6412/6412166_sd.jpg;maxHeight=400;maxWidth=400",
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6486/6486410_sd.jpg;maxHeight=400;maxWidth=400" 
]

/**
 * Seed data from text file to the database
 */

fs.readFile("games.txt", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        const gamesArrayRaw = data.toString().split('\n');
        let gamesArray = [];

        for(let x = 0; x < gamesArrayRaw.length; x+=3) {
            let console = "Xbox One";
            const num = (x/3)%3;
            const rating = (Math.random() * (4 - 3 + 1) ) + 3;
            const randomImg = Math.floor(Math.random() * 10);

            if(num === 0) {
                console = "Xbox One";
            } else if(num === 1) {
                console = "PlayStation 4";
            } else if(num === 2) {
                console = "Nintendo Switch";
            }
            
            gamesArray.push({
                console,
                rating: rating.toFixed(1),
                name: gamesArrayRaw[x],
                image: images[randomImg],
            });
        }
        db.deleteMany({})
        .then(db.insertMany(gamesArray).then(data => console.log("Data successfully seeded")).catch(err => console.log(err)))
        .then(() => console.log('ready to close mongo!'))
        
    }
});

