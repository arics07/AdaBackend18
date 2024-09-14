const crypto = require('crypto');


//-------------------------------------------------
//-------- crypto.createHash ----------------------
//-------------------------------------------------
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

//-------------------------------------------------
//-------- crypto.createHmac ----------------------
//-------------------------------------------------

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

//-------------------------------------------------
//-------- crypto.createCypheriv----------------------
//-------------------------------------------------

// Generar un vector de inicialización (IV) aleatorio
//El vector de inicialización (IV) es un valor que se utiliza en algoritmos de cifrado como el AES en modo CBC (Cipher Block Chaining). 
//El IV garantiza que dos mensajes cifrados con la misma clave pero con diferentes IV generen diferentes resultados cifrados.
const iv = crypto.randomBytes(16);

//La clave key es el valor utilizado por el algoritmo para cifrar y descifrar los datos. 
//estamos generando una clave aleatoria de 32 bytes (256 bits), ya que estamos utilizando el algoritmo AES-256, que requiere una clave de ese tamaño
const key = crypto.randomBytes(32);
const algoritmo = 'aes-256-cbc';

// Crear un objeto Cipher utilizando AES-256-CBC
const cipher = crypto.createCipheriv(algoritmo, key, iv);

let data3 = "Soy el texto a cifrar";
// Cifrar el texto
let encrypted = cipher.update(data3, 'utf-8', 'hex');
encrypted += cipher.final('hex');

// Devolver el IV junto con el texto cifrado
//console.log("Texto cifrado: " + iv.toString('hex') + ':' + encrypted);
// Devuelvo el texto cifrado
console.log("Texto cifrado: " + encrypted);

// DESENCRIPTADO

 // Crear un objeto Decipher utilizando AES-256-CBC
 const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

 // Descifrar el texto
 let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
 decrypted += decipher.final('utf-8');

console.log("Texto descifrado: " + decrypted);