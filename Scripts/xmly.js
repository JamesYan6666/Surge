
var body = JSON.parse($response.body);isSimpleVip
body.data.isVip = true;
body.data.isSimpleVip = true;
body.data.vipExpireTime = 365;
body.data.vipLevel = 6;
$done({ body: JSON.stringify(obj) });
