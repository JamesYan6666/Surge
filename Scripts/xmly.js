
var obj = JSON.parse($response.body);
obj.data.isVip = true;
obj.data.isSimpleVip = true;
obj.data.vipExpireTime = 365;
obj.data.vipLevel = 6;
$done(JSON.stringify(obj.data));
