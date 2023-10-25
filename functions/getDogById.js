const { sendResponse } = require('../responses/index');


function getDogById(dogs, dogId) {
    const dogIdInt = parseInt(dogId);

    const dog = dogs.find(dog => dog.id === dogIdInt)

    if (dog) {
        return sendResponse(200, dog)
    } else {
        return sendResponse(404, { message: 'Dog not found'})
    }
}

module.exports = { getDogById }