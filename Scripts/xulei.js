/*
surge 4
[Script]
迅雷 = type=http-response,pattern=https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo,script-path=https://raw.githubusercontent.com/YanJian1990/Surge/main/xulei.js?token=GHSAT0AAAAAABTVE3SI6ZM7VRILWIJX2OUSYVSQMLQ,requires-body=1,max-size=0
[MITM]
hostname = %APPEND% xluser-ssl.xunlei.com
*/
var body = $response.body;
var obj = JSON.parse(body);

obj.vipList = [{
    "expireDate": "20290609",
    "isAutoDeduct": "0",
    "isVip": "1",
    "isYear": "1",
    "payId": "0",
    "payName": "---",
    "register": "0",
    "vasid": "2",
    "vasType": "5",
    "vipDayGrow": "20",
    "vipGrow": "840",
    "vipLevel": "7"
  }]

body = JSON.stringify(obj);
$done({body});
