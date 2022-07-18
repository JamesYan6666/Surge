var body = $response.body;
var obj = JSON.parse(body);

$done({body: JSON.stringify(obj)});
