
var body = $response.body;
var obj = JSON.parse(body);
obj.data.isVip = true;
obj.data.isSimpleVip = true;
obj.data.vipExpireTime = 365;
obj.data.vipLevel = 6;
body = JSON.stringify(obj.data);
$done(body);
