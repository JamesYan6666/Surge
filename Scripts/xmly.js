
var body = JSON.parse($response.body);
body.data.currentUser.isVip = true;
$done({ body: JSON.stringify(obj) });
