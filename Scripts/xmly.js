
var body = $response.body;
var obj1 = JSON.parse(body);
obj1.data.isVip = true;
obj1.data.isSimpleVip = true;
obj1.data.vipExpireTime = 9999;
obj1.data.vipLevel = 7;
$done({body: JSON.stringify(obj1)});
