
/*
  解锁pc端Vip
*/
var body = $response.body;
var obj = JSON.parse(body);
obj.data.isVip = true;
obj.data.isSimpleVip = true;
obj.data.vipExpireTime = 9999;
obj.data.vipLevel = 7;
$done({body: JSON.stringify(obj)});
