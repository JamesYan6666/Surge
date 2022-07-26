
var body = $response.body;
var obj = JSON.parse(body);
obj.login_info.vip_type = "49";
obj.login_info.vip_identity = "49";
obj.login_info.username = "永久Vip";
obj.login_info.vip_level = 7;
$done({body: JSON.stringify(obj)});
