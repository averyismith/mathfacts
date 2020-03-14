export async function handler() {
    var min = Math.ceil(1);
    var max = Math.floor(99); 

    var rmin = Math.ceil(1);
    var rmax = Math.floor(99);  

  return {
    statusCode: 200,
    body: JSON.stringify(
        Operands = {
            left = Math.floor(Math.random() * (max - min + 1)) + min,
            right = Math.floor(Math.random() * (rmax - rmin + 1)) + rmin
        }
    )
  };
}