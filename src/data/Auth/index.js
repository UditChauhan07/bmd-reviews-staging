let key = "ChgF820k";
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()-_+=!@#$%^&";

export function AuthCheck() {
  let auth = localStorage.getItem(key);
  if (auth) {
    return true;
  } else {
    return false;
  }
}
export function Encrypt(token) {
  let encription = undefined;
  let init1 = generateString(token.length);
  let init2 = generateString(token.length);
  encription =
    init1 + "*" + generateString(1) + token + generateString(1) + "*" + init2;
  localStorage.setItem(key, encription);
  return encription;
}
export function Decrypt() {
  let raw = localStorage.getItem(key);
  if(raw){
    let rawStr = raw.split("*")
    let init = rawStr[1];
    let convert1 = init.slice(1);
    let convert2 = convert1.slice(0, convert1.length - 1)
    return convert2;
  }
}
export function Destroy(router) {
  localStorage.removeItem(key);
  router.push('/account/login')
  // window.location.href = "/account/login";
}

function generateString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

let shareKey = "U762KRC"
export function ShareDrive (data, remove = false){
  if(remove){
    localStorage.removeItem(shareKey);
    return true;
  }
  if(data){
    localStorage.setItem(shareKey, JSON.stringify(data))
    return true;
  }else{
    let strData = localStorage.getItem(shareKey);
    return JSON.parse(strData);
  }
}