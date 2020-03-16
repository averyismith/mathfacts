export async function handler() {
    var x = randomInteger(1, 10);
    var y = randomInteger(1, 10);
   
  return {
    statusCode: 200,
    body: JSON.stringify({x: x, y: y, p: x*y})
  };
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}