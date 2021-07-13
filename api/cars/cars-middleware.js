const Car = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try{
    const car = await Car.getById(req.params.id)
    if(!car){
      res.status(404).json({
        message: 'car with id <car id> is not found'
      })
    }
    else{
      next()
    }
}
catch(err){
    next(err)
}
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
checkCarPayload,
checkVinNumberValid,
checkVinNumberUnique
}