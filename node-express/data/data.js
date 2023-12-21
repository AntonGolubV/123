const path = require("path");
const fs = require("fs");
const dataApple = require("./apple.json");
// let dataApple = fs.readFileSync(path.join(__dirname, "./apple.json"));
/* console.log(dataApple); */
function dataSmartphone(brand) {
    /*  if (brand === "apple") {
        let arr = [];

        console.log(dataApple.products);
        for(let item of dataApple.products);
        let smartFilteredObj = filterSmart(dataApple.products, filterEmpty(item));
        console.log(smartFilteredObj);
    } */
    return dataApple;
}

function filterSmart(array, filterObj) {
    return array.filter((smart) => {
        for (let key in filterObj) {
            if (smart[key] !== filterObj[key]) {
                return false;
            }
        }
        return true;
    });
}

function filterEmpty(obj) {
    let newObj = {};
    for (let key in obj) {
        if (key == "extended_name" && key == "images" && key == "description" && key == "prices") {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

module.exports = { dataSmartphone };
