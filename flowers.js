const flowers = [
    {
        id: 1,
        color: "White",
        species: "Rose",
        price: .90
    },
    {
        id: 2,
        color: "Red",
        species: "Tulip",
        price: 1.10
    }
    
]

const newFlower = {
    color: "Purple",
    species: "Iris",
    price: 1.00
}

const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const lastFlower = flowers[lastIndex]
    const maxId = lastFlower.id
    const newFlowerId = maxId + 1

    flowerObject.id = newFlowerId
    flowers.push(flowerObject)
}



const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code

    for (const flower of flowers) {
        if (flower.price >= 1.00) {
            expensiveFlowers.push(flower)
        }
    }
    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

