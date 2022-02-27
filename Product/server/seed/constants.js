/**
 * Collection of enums used in product category, video, and images
 * Limiting products to Playstation 4 games
 */

const titles = ["Cyberpunk 2077 Standard Edition", "The Last of Us Part II Special Edition", "Death Stranding Standard Edition", "Star Wars: Jedi Fallen Order", "Call of Duty: Modern Warfare Standard Edition", "NBA 2K20 Standard Edition", "Madden NFL 20 Standard Edition", "MLB The Show 20 Standard Edition", "NHL 20 Standard Edition","Grand Theft Auto V: Premium Edition"]

const esrbRating = ["E (Everyone)", "M (Mature 17+)", "T (Teen 13+)", "E10+ (Everyone 10+)" ]

const category = "PlayStation 4";

const platforms = ["https://bb-clone.s3-us-west-1.amazonaws.com/general/platform_ps4.png", "https://bb-clone.s3-us-west-1.amazonaws.com/general/platform_xbox.png"];

const prices= [59.99, 49.99, 29.99, 19.99, 39.99];

const subcategory = "PlayStation 4 Games";

const format = ["Physical", "Digital"];

const ps4header = ["Best Buy", "Video Games", "PlayStation 4", "PS4 Games"];

const keyspecheader = ["ESRB Rating", "ESRB Descriptors", "Compatible Platform(s)", "Software Format"];

const generalheader = ["Product Name", "Brand", "Publisher", "Developer", "Model Number"];

const gamedetailheader = ["Genre", "Game Franchise", "Multiplayer"];

const descriptors = ["Alcohol Reference", "Blood", "Cartoon Violence", "Crude Humor", "Animated Blood", "Blodd and Gore", "Comic Mischief", "Drug Reference", "Fantasy Violence", "Language", "Mature Humor", "Intense Violence", "Lyrics", "Nudity", "Real Gambling", "Sexual Content", "Sexual Violence", "Strong Language", "Sexual Themes", "Simulated Gambling", "Suggestive Themes", "Use of Drugs", "Violence", "Use of Alcohol", "Intense Violence"];

const vidImages = [
    "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/20e8f7ed4abe4ce59da5126768578888.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/1799536929_ap.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/1044944662_ap.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/d921a1a964bc841698d01cde4f15f720.jpg;maxHeight=112;maxWidth=200", 
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/1297102016_ap.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/1514902275_ap.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6311/1544712004_ap.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/5d269344f43ddbcaea6fa10aee1c59dc.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/b1be00eb953c43fc1e769b50220bcbe6.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/ae042bdc9a7fb58f96a9a9af0738d7a2.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/4cd6a72107b14b3991204fc55f895085.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/13c7e0cdfbc711f0f5183aa0471def38.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/13c7e0cdfbc711f0f5183aa0471def38.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/fa0215124bda9c973862a8dfe9804253.jpg;maxHeight=112;maxWidth=200",  "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/3696d63c50b815ccd48e458480b07a2a.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/ce2d6e673a8237259a3d764b5ba766d5.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/dbcae4cef939e00d77dbcba50ee2422c.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/394ef1561157d5c4a4a33706c2392bb5.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/b3dafa8db2017e714cf6fa536b6d4ed0.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/fbfbf88f8fdc6602a6ba8a9312f9df7e.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/d349e3ca485d50981e81c89689b8f1e9.jpg;maxHeight=112;maxWidth=200"
];

const ps4Vids = ["https://www.totaleclips.com/Bounce/b?eclipid=e167127&amp;bitrateid=472&amp;vendorid=302", "https://www.totaleclips.com/Bounce/b?eclipid=e166878&amp;bitrateid=472&amp;vendorid=302", "https://www.totaleclips.com/Bounce/b?eclipid=e166087&amp;bitrateid=472&amp;vendorid=302", "https://www.totaleclips.com/Bounce/b?eclipid=e165537&amp;bitrateid=472&amp;vendorid=302", "https://www.totaleclips.com/Bounce/b?eclipid=e164230&amp;bitrateid=472&amp;vendorid=302", "https://www.totaleclips.com/Bounce/b?eclipid=e163909&amp;bitrateid=472&amp;vendorid=302", "https://sc.liveclicker.net/service/qr?1281343804&amp;mobile=true", "https://www.totaleclips.com/Bounce/b?eclipid=e165618&amp;bitrateid=472&amp;vendorid=302" ];

const ps4VidTimeStamps = ["1:03", "1:30", "1:01", "2:11","0:30", "1:51", "0:30", "1:20" ];

const images = ["https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/1.png", "https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/10.png", "https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/11.png", "https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/12.png", "https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/13.png", "https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/14.png", "https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/15.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/16.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/17.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/18.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/19.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/2.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/20.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/3.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/4.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/5.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/6.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/7.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/8.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages_2/9.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/10.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/11.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/12.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/13png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/14.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/15.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/16.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/17.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/18.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/19.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/2.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/20.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/21.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/22.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/23.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/24.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/25.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/26.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/27.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/28.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/29.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/3.png", "https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/30.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/31.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/32png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/33.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/34.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/35.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/36.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/37.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/4.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/5.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/6.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/7.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/8.png","https://bb-clone.s3-us-west-1.amazonaws.com/randomImages/9.png"];

const mainImages = ["https://bb-clone.s3-us-west-1.amazonaws.com/mainImages/1.png", "https://bb-clone.s3-us-west-1.amazonaws.com/mainImages/2.png", "https://bb-clone.s3-us-west-1.amazonaws.com/mainImages/3.png", "https://bb-clone.s3-us-west-1.amazonaws.com/mainImages/4.png", "https://bb-clone.s3-us-west-1.amazonaws.com/mainImages/5.png", "https://bb-clone.s3-us-west-1.amazonaws.com/mainImages/6.png","https://bb-clone.s3-us-west-1.amazonaws.com/mainImages/7.png", "https://bb-clone.s3-us-west-1.amazonaws.com/mainImages/8.png", "https://bb-clone.s3-us-west-1.amazonaws.com/mainImages/9.png", "https://bb-clone.s3-us-west-1.amazonaws.com/mainImages/10.png" ];

const reviewcount = [22,26,20, 20, 32, 26, 23, 29, 26, 26, 16 ];

const reviewbreakdown = [ [3,2,5,5,7],
 [2,2,5,9,8],[4,6,1,3,6],[1,2,2,9,6],[9,7,3,9,4],[7,6,3,7,3],[7,8,2,3,3],[9,5,8,3,4],[8,4,4,4,6],[9,3,2,6,6],[3,5,3,3,2] ];

const questions = ["https://bb-clone.s3-us-west-1.amazonaws.com/Zelda+breath+of+wild/quest.png", "https://bb-clone.s3-us-west-1.amazonaws.com/questions/twelve.png", "https://bb-clone.s3-us-west-1.amazonaws.com/Namco+Museum/quest.png", "https://bb-clone.s3-us-west-1.amazonaws.com/Super+Mario+Deluxe/quest-super-mario-bundle.png", "https://bb-clone.s3-us-west-1.amazonaws.com/Overcooked-2/questions_overcooked2.png", "https://bb-clone.s3-us-west-1.amazonaws.com/Super+Smash+Bros/questions_super_smash-bros.png", "https://bb-clone.s3-us-west-1.amazonaws.com/Pokemon+Sword+Edition/questions_pokemon_sword_edition.png", "https://bb-clone.s3-us-west-1.amazonaws.com/general/questions_placeholder.png"  ];

const questionCount = [7, 12, 1, 14, 1, 54, 9, 27 ];

// can change if product platform changes
const bundle = ["https://bb-clone.s3-us-west-1.amazonaws.com/bundle/1.png", "https://bb-clone.s3-us-west-1.amazonaws.com/bundle/2.png", "https://bb-clone.s3-us-west-1.amazonaws.com/bundle/3.png", "https://bb-clone.s3-us-west-1.amazonaws.com/bundle/4.png" , "https://bb-clone.s3-us-west-1.amazonaws.com/bundle/5.png", "https://bb-clone.s3-us-west-1.amazonaws.com/bundle/6.png", "https://bb-clone.s3-us-west-1.amazonaws.com/bundle/7.png"];

const bundletotal = [[29.99, 59.99, 29.99], [14.99, 64.99, 59.99], [59.99, 64.99, 84.99], [59.99,64.99,39.99], [24.99, 64.99, 249.99], [14.99,64.99, 39.99], [19.99, 14.99, 19.99] ];



module.exports = {
    titles,
    esrbRating,
    category,
    platforms,
    prices,
    subcategory,
    format,
    ps4header,
    keyspecheader,
    generalheader,
    gamedetailheader,
    descriptors,
    vidImages,
    ps4Vids,
    ps4VidTimeStamps,
    images,
    mainImages,
    reviewcount,
    reviewbreakdown,
    questions,
    questionCount,
    bundle,
    bundletotal
}
