
export const firePottery = (potteryobject, temp) => {
    potteryobject.fired = true
    if (temp > 2200) {
        potteryobject.cracked = true 
    } else {
        potteryobject.cracked = false
    }
    
    return potteryobject

}