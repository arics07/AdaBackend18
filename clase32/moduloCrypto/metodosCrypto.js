const crypto = require('crypto');

const data = "Este es un mensaje secreto";
//Se crea un objeto hash utilizando el método createHash
const hash = crypto.createHash('sha256');
//Se actualiza el objeto hash con los datos que queremos hashear, en este caso, el valor de la constante data
hash.update(data);
//digest('hex') genera el hash final en formato hexadecimal.
const hashOutput = hash.digest('hex');
// muestra el hash hexadecimal resultante del mensaje original 
console.log("Hash SHA-256: ", hashOutput);

console.log("-----------------------------------------------------");

const data2 = "Mensaje secreto, shhhh";
const secretKey = "mi_clave_secreta";

//Se crea un objeto hmac utilizando el método createHmac
const hmac = crypto.createHmac("sha256", secretKey);
//Se actualiza el objeto hmac con los datos que queremos hashear, en este caso, el valor de la constante data2
hmac.update(data2);
//digest('hex') genera el hash final en formato hexadecimal.
const hmacOutput = hmac.digest('hex');
console.log("HMAC SHA-256: ", hmacOutput);

console.log("-----------------------------------------------------");

//1.52