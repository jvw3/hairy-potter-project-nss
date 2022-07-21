import { usePottery } from './PotteryCatalog.js'

export const potteryList = () => {
    let potteryArray = usePottery()
    let htmlString = ''
    for (const pottery of potteryArray)  {
        htmlString += `<section class="pottery" id="pottery--1">\n   <h2 class="pottery__shape">${pottery.shape}</h2>\n  <div class="pottery__properties">\n     Item weighs ${pottery.weight} and is ${pottery.height} cm in height\n   </div>\n    <div class="pottery__price">\n      Price is $${pottery.price}\n   </div>\n</section>\n`}

    return htmlString
    }