
const { sendResponse } = require('../responses/index');

function checkDogFormat(body) {
    const keys = Object.keys(body);
    
     if (body?.breed && body?.age && body?.color && body?.weight_kg && body?.id && keys.length == 5) {
        return true
     } else {
        return false
     }
}

function postDog(dogs, body) {
    if (checkDogFormat(body)) {
        dogs.push(body);

        return sendResponse(200, { sucess : true })
    } else {
        return sendResponse(400, { message : 'Wrong data in body' })
    }
}

module.exports = { postDog }