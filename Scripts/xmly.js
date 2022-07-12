
var body = $response.body;
var obj1 = JSON.parse(body);
obj1.data.isVip = true;
obj1.data.isSimpleVip = true;
obj1.data.vipExpireTime = 365;
obj1.data.vipLevel = 6;

body = JSON.stringify(obj1);
$done(body);
