// const get_costs_for_crop
// const get_revenue_for_crop
// const get_profit_for_crop
// const get_total_profit
// const get_yield_for_plant



const get_yield_for_plant = (plant) => plant.yield


const get_yield_for_crop = object => {
    //     const cornYield = object.yield;
    //     const numberCrops = object.num_crops
    //     return numberCrops * cornYield;
}





const get_total_yield = () => {

}






const corn = {
    name: "corn",
    yield: 30,
    factors: {
        sun: {
            low: -50,
            medium: 0,
            high: 50,
        },
    },
};

const environment_factors = {
    sun: "low",
};


module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
};