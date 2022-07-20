let soldPottery = [];

export const toSellOrNotToSell = (potteryobject) => {
    
    if (potteryobject.weight >= 6) {
        potteryobject.price = 40;
    } else {
        potteryobject.price = 20
    }

    if (potteryobject.cracked === false) {
        soldPottery.push(potteryobject)
    }
    return potteryobject

}

export const usePottery = () => {
    let potteryCopy = soldPottery.slice(0)

    return potteryCopy
}