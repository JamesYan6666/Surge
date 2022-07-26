
var body = $response.body;
var obj = JSON.parse(body);
obj.login_info.vip_type = "21";
obj.login_info.vip_identity = "21";
obj.login_info.vip_level = 7;
$done({body: JSON.stringify(obj)});
