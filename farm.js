// const get_costs_for_crop
// const get_revenue_for_crop
// const get_profit_for_crop
// const get_total_profit
// const get_yield_for_plant


// onderstaande testen werkend krijgen
// 1
const get_yield_for_plant = (plant) => plant.yield

// 2
const get_yield_for_crop = (input) => {
    const yield_for_crop = get_yield_for_plant(input.crop) * input.num_crops;
    return yield_for_crop;
}

// const get_yield_for_crop = input => get_yield_for_plant(input.crop) * input.num_crops;

// 3
const get_total_yield = ({ crops }) => {
    yieldFromAllCrops = crops.map(crop => get_yield_for_crop(crop));
    return yieldFromAllCrops.reduce((a, b) => a + b)
};


// 1e opdracht 

const get_costs_for_plant = input => input.costs;

const get_costs_for_crop = (input) => {
    const costs_for_plant = get_costs_for_plant(input.crop);
    const costs_for_crop = costs_for_plant * input.num_crops;
    return costs_for_crop;
}


// 2e opdracht
const get_revenue_for_plant = (plant) => {
    return plant.sale_price * plant.yield;
}
const get_revenue_for_crop = (input) => {
    const revenue_for_plant = get_revenue_for_plant(input.crop);
    const revenue_for_crop = revenue_for_plant * input.num_crops;
    return revenue_for_crop;
}

// 3e Opdracht

const get_profit_for_plant = (plant) => {
    return get_revenue_for_plant(plant) - get_costs_for_plant(plant);
}
const get_profit_for_crop = (input) => {
    const profit_for_plant = get_profit_for_plant(input.crop);
    const profit_for_crop = profit_for_plant * input.num_crops;
    return profit_for_crop;
}
const get_total_profit = (input) => {
    let total_profit = 0;
    input.crops.forEach(crop => {
        total_profit += get_profit_for_crop(crop);
    });
    return total_profit;
}






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
    get_costs_for_crop,
    get_costs_for_plant,
    get_revenue_for_crop,
    get_revenue_for_plant,
    get_profit_for_plant,
    get_profit_for_crop,
    get_total_profit,
};