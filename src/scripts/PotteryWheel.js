let potteryPrimaryKey = 1;

//Parameters are: shape (string), weight (number), height(number)
export const makePottery = (shape, weight, height) => {
    let finalPottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: (potteryPrimaryKey += 1)
    }

    return finalPottery


}