let key = "ebx0OVkS4hEibz8nZnYFBJztrEUn0itNn1zEinLNBhiOz1A5Ah";
let tKey = "Ly1xlFkN30Jogz95b4nzLaT1uYJGIZ0TyyhAHvX8KJiY6qHhte";
let shareKey = "U762KRC"
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()-_+=!@#$%^&";

  export function AuthCheck() {
    let auth = localStorage.getItem(key);
    if (auth) {
      let validSession = userSessionCheck();
      if(validSession){
        return true
      }else{
        return false;
      }
    } else {
      return false;
    }
  }
  export function Encrypt(data) {
    if(data?.accessToken && data?.expiresAt){
      let token = data.accessToken
      let encription = undefined;
      let init1 = generateString(token.length);
      let init2 = generateString(token.length);
      encription =
      init1 + "*" + generateString(1) + token + generateString(1) + "*" + init2;
      localStorage.setItem(key, encription);
      localStorage.setItem(tKey,data.expiresAt)
      return encription;
    }else{
      Destroy();
    }
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
  localStorage.removeItem(tKey);
  if(!localStorage.getItem(key)&&!localStorage.removeItem(tKey)){
    // router.push('/account/login')
    window.location.href = "https://www.brunomd.eu/pages/logged-out";
  }
}

function generateString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

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
const userSessionCheck=()=>{
  let sessionEnd = new Date(localStorage.getItem(tKey));
  let currentDate = new Date();
  if (sessionEnd <= currentDate) {
      Destroy()
      return false
  } else {
      return true
  }
}
function storageCheck(autoLogout= false){
var startTime = localStorage.lastExternalReferrerTime;
var currentTime = new Date().getTime();
var timeDifference = currentTime - startTime;
  var formattedDifference = [];
  var timeUnits = [
      ['day', 24 * 60 * 60 * 1000],
      ['hour', 60 * 60 * 1000],
      ['minute', 60 * 1000],
      ['second', 1000],
      ['millisecond', 1]
  ];

  timeUnits.forEach(function(unit) {
      var count = Math.floor(timeDifference / unit[1]);
      if (count > 0) {
          formattedDifference.push(count + ' ' + unit[0] + (count > 1 ? 's' : ''));
      }
      timeDifference %= unit[1];
  });
  if(autoLogout){
    if(formattedDifference.length>=4){
      localStorage.removeItem(key)
      localStorage.removeItem(shareKey)
      // alert("session expired")
      return false;
    }else{
      return true;
    }
  }else{
    // console.log({formattedDifference});
  }
}