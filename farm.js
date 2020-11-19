// const get_costs_for_crop
// const get_revenue_for_crop
// const get_profit_for_crop
// const get_total_profit
// const get_yield_for_plant



const get_yield_for_plant = (plant) => plant.yield



const get_yield_for_crop = (input) => {
    const yield_for_crop = get_yield_for_plant(input.crop) * input.num_crops;
    return yield_for_crop;
}

// const get_yield_for_crop = input => get_yield_for_plant(input.crop) * input.num_crops;



const get_total_yield = ({ crops }) => {
    yieldFromAllCrops = crops.map(crop => get_yield_for_crop(crop));
    return yieldFromAllCrops.reduce((a, b) => a + b)
};




// const corn = {
//     name: "corn",
//     yield: 30,
//     factors: {
//         sun: {
//             low: -50,
//             medium: 0,
//             high: 50,
//         },
//     },
// };

// const environment_factors = {
//     sun: "low",
// };


module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
};