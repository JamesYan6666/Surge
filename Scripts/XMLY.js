var body = $response.body;
var obj = JSON.parse(body);
// obj.data.isVip = true;
// obj.data.isSimpleVip = true;
// obj.data.vipStatus = 5;
// obj.data.vipExpireTime = 4088041629000;
// obj.data.vipLevel = 7;
obj.data.nickname = "熊大12";
$done({body: JSON.stringify(obj)});
