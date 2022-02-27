const Product = require('../db/model');
const faker = require('faker');
const helpers = require('./constants.js');
const fs = require('fs').promises;

/**
 * Generates products with specific and randomized details
 * Inserts the product to the database at the end of each creation
 */
const createGames =  async () => {
    let sku = 12;

   for (let i = 0; i < helpers.titles.length; i++) {
        let productprice = randomSelector(helpers.prices);
        let vidIndex = randomIndexSelector(helpers.ps4VidTimeStamps);
        let hasVideo = faker.datatype.boolean();
        let rating = randomSelector(helpers.esrbRating);
        let bundleIndex = randomIndexSelector(helpers.bundle);
        let game = {
            name: helpers.titles[i],
            category: helpers.category,
            sub_category: helpers.subcategory,
            model: faker.lorem.word().toUpperCase() + faker.datatype.number(),
            publisher: faker.company.companyName(),
            sku: incrementer(sku),
            product_sku: faker.finance.account(),
            release_date: dateGenerator(),
            esrb_rating: rating,
            price: productprice,
            images: randomImagePacker(i),
            compatible_platforms: helpers.platforms,
            software_format: helpers.format,
            geek_squad_price: geekPriceGenerator(productprice),
            description: faker.lorem.paragraphs(),
            features: faker.lorem.paragraph() + faker.lorem.sentences(),
            included: helpers.titles[i],
            header_titles: helpers.ps4header,
            still_img_videos: hasVideo ? generateVidGallery() : [],
            miniplayer_videos: hasVideo ? helpers.ps4Vids[vidIndex]: "",
            video_length:[helpers.ps4VidTimeStamps[vidIndex]],
            reviews_count: helpers.reviewcount[i],
            reviews_breakdown: helpers.reviewbreakdown[i],
            keyspecs_title: helpers.keyspecheader,
            keyspecs: [rating, randomSelector(helpers.descriptors), faker.company.catchPhrase(), helpers.format[0]],
            general_title: helpers.generalheader,
            general: [helpers.titles[i], faker.company.companyName(), faker.company.companyName(), faker.company.companyName(), faker.lorem.word().toUpperCase() + faker.datatype.number() + faker.random.alphaNumeric().toUpperCase()],
            game_Details_title: helpers.gamedetailheader,
            game_details: [faker.company.bsAdjective(), faker.company.companyName(), faker.company.bsNoun()],
            requirements_title: ["System Requirements", "Subscription"],
            requirements: [faker.company.bsAdjective(), faker.lorem.word()],
            other_title: ["UPC"],
            other: faker.finance.account(),
            questions: helpers.questionCount[vidIndex],
            bundle: helpers.bundle[bundleIndex],
            bundle_total: helpers.bundletotal[bundleIndex],
            manufacturer_img: "",
            questions_img: helpers.questions[vidIndex]
        }
        sku++;

        try {
            await Product.create( game )
        } catch (err) {
            return console.log('Error writing to file', err);
        }
    }
}
/**
 * Generates a random date
 * @returns a date in 2/5/2021 format
 */
const dateGenerator = () => {
    return faker.date.past().getMonth() + '/' + faker.date.past().getDate() + '/' + faker.date.past().getFullYear()
}

/**
 * Generates a price
 * @param {*} value 
 * @returns the price based on the input value
 */
const geekPriceGenerator = (value) => {
    return value > 40 ? 7.99 : value > 30 ? 5.99 : 3.99
}

const randomSelector = (list) => {
    let index = Math.floor(Math.random() * list.length);
    return list[index];
}
    
const randomIndexSelector = (list) => {
    let index = Math.floor(Math.random() * list.length);
    return index;
}
    
const incrementer = (value) => {
    return value.toString();
}

function generateVidGallery() {
    let count = Math.floor(Math.random() * 4) + 1;
    let arr =[];
    for (let i = 0; i < count; i++) {
      let index = Math.floor(Math.random() * helpers.vidImages.length);
      arr.push(helpers.vidImages[index]);
    }
    return arr.filter((link, index) => arr.indexOf(link) === index);
}

function randomImagePacker(order) {
    let arr = [];
    const max = 8;
    const min = 2; // 3 including main

    // at least 3 images, max being 8;
    arr.push(helpers.mainImages[order]);
    let count = Math.floor(Math.random() * (max - min + 1) + min);
    // push mainimage first and random ones next
    for (let i = 0; i < count; i++) {
        let index = Math.floor(Math.random() * helpers.images.length);
        arr.push(helpers.images[index]);
    }
    return arr;
};

module.exports = {
    createGames,
    dateGenerator,
    geekPriceGenerator,
    randomSelector,
    randomIndexSelector,
    incrementer,
    generateVidGallery,
    randomImagePacker
}