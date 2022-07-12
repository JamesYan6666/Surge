
var body = JSON.parse($response.body);
body.currentUser.isVip = true;
$done({ body: JSON.stringify(obj) });
