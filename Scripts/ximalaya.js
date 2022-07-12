
var obj = JSON.parse($response.body);
obj.currentUser.isVip = true;
$done({ body: JSON.stringify(obj) });
