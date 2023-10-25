const { sendResponse } = require('./responses/index');
const { postDog } = require('./functions/postDog');
const { getDogById } = require('./functions/getDogById');

var dogs = [
    {
        id: 5762364,
        breed: "Golden Retriever",
        age: 3,
        color: "Golden",
        weight_kg: 30
      },
      {
        id: 9320475,
        breed: "Siberian Husky",
        age: 4,
        color: "Black and White",
        weight_kg: 25
      },
      {
        id: 450968,
        breed: "Labrador Retriever",
        age: 2,
        color: "Black",
        weight_kg: 28
      }
];



exports.handler = async (event, context) => {

    const { method, path } = event.requestContext.http;

    if (method === 'GET' && path === '/dog') {
        return sendResponse(200, {dogs})
    } else if (method === 'GET' && path.startsWith('/dog/')) {
        const dogId = path.split('/dog/')[1];

        return getDogById(dogs, dogId);

    } else if (method === 'POST' && path === '/dog') {
        const body = JSON.parse(event.body);

        return postDog(dogs, body);
    }

    return sendResponse(400, {message : 'error' })
}