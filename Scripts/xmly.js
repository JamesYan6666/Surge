
var body = JSON.parse($response.body);
body.data.isVip = true;
body.data.isSimpleVip = true;
body.data.vipExpireTime = 365;
body.data.vipLevel = 6;
$done({ body: JSON.stringify(body.data)});
