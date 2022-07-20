// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug', 20, 15)
// console.log(mug)
let vase = makePottery('vase', 30, 25)
// console.log(vase)
let cup = makePottery('tall cup', 10, 8)
// console.log(cup)
let jar = makePottery('mason jar', 12, 5)
// console.log(jar)
let toy = makePottery('person', 5, 4)
// console.log(toy)
// Fire each piece of pottery in the kiln
let mugAfterKiln = firePottery(mug, 3000)
// console.log(mugAfterKiln)

let vaseAfterKiln = firePottery(vase, 2000)
// console.log(vaseAfterKiln)

let cupAfterKiln = firePottery(cup, 2500)
// console.log(cupAfterKiln)

let jarAfterKiln = firePottery(jar, 1800)
// console.log(jarAfterKiln)

let toyAfterKiln = firePottery(toy, 2900)
// console.log(toyAfterKiln)

// Determine which ones should be sold, and their price
let toSellMug = toSellOrNotToSell(mugAfterKiln)
console.log(toSellMug)

let toSellVase = toSellOrNotToSell(vaseAfterKiln)
console.log(toSellVase)

let toSellCup = toSellOrNotToSell(cupAfterKiln)
console.log(toSellCup)

let toSellJar = toSellOrNotToSell(jarAfterKiln)
console.log(toSellJar)

let toSellToy = toSellOrNotToSell(toyAfterKiln)
console.log(toSellToy)
// Invoke the component function that renders the HTML list



