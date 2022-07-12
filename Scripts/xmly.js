
var body = JSON.parse($response.body);
body.data.vipExpireTime = 365;
body.data.vipLevel = 3;
body.data.isVip = true;
body.data.vipLevel = 4;
body.data.vipLevel = 4;
body.data.logoType = -1;
// var obj = {
//     "realUid": 250171422,
//     "logoType": 0,
//     "uid": 250171422,
//     "isLoginBan": false,
//     "mobile": "159****2780",
//     "isVip": true,
//     "logoPic": "\/\/imagev2.xmcdn.com\/group61\/M0A\/7C\/F3\/wKgMZl0wBcnxgorbAABWZX_GLtM979.jpg",
//     "anchorGrade": -1,
//     "totalVipDays": 81,
//     "isVerified": false,
//     "vipLevel": 3,
//     "userGrade": 0,
//     "vipExpireTime": 12,
//     "isRobot": false,
//     "nickname": "听友250171422",
//     "verifyType": 0
// };
$done({ body: JSON.stringify(obj) });
