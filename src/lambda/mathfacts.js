export async function handler() {
    min = Math.ceil(1);
    max = Math.floor(99); 
  return {
    statusCode: 200,
    body: JSON.stringify(Math.floor(Math.random() * (max - min + 1)) + min)
  };
}