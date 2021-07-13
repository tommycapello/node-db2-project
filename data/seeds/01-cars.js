// STRETCH
const cars = [
    {
        vin: "WDCGG8HB0AF462890",
        make: 'toyota',
        model: "prius",
        mileage: 215000,
        title: "clean",
        transmission: "manual"
    },
    {
        vin: "1G8MG35X48Y106575",
        make: 'acura',
        model: "integra",
        mileage: 115000,
        title: "clean"
    },
    {
        vin: "1G8DC18H4CF114023",
        make: 'chevy',
        model: "blazer",
        mileage: 150000,
        title: "clean",
        transmission: "salvage"
    },
]

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}