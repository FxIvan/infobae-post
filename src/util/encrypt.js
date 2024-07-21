import Cookies from "js-cookie";
const secretKey = "b2df428b9929d3ace7c598bbf4e496b2";
var objEncDec = require("object-encrypt-decrypt");

// Función para encriptar datos
function encryptData(data) {
  try {
    const ciphertext = objEncDec.encrypt(data);
    Cookies.set("accessToken", ciphertext);
    return ciphertext;
  } catch (e) {
    console.log(e);
  }
}

function decryptData(encryptedData) {
  const decObject = objEncDec.decrypt(encryptedData);
  return decObject;
}

export { encryptData, decryptData };
