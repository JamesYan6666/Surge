/*
http-response https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user
*/
var body = $response.body;
var obj = JSON.parse(body);
obj.user_info.is_svip = 1;
obj.user_info.is_vip = 1;
obj.user_info.is_first_charge_svip = 1;
obj.user_info.username = "测试";
obj.request_id = 43242761886666874
$done({body: JSON.stringify(obj)});


// let obj = JSON.parse($response.body);
// obj = {
//   "product_infos": [{
//     "product_id": "5956446232844245857",
//     "start_time": 1658306899,
//     "end_time": 2147483648,
//     "buy_time": "1658306899",
//     "cluster": "vip",
//     "detail_cluster": "offlinedl",
//     "product_name": "vip1_nd",
//     "status":0,
//     "buy_description":"",
//     "product_description":""
//   }, {
//     "product_name": "svip2_nd",
//     "product_description": "超级会员",
//     "function_num": 0,
//     "start_time": 1553702399,
//     "buy_description": "",
//     "buy_time": 0,
//     "product_id": "1",
//     "auto_upgrade_to_svip": 0,
//     "end_time": 1672502399,
//     "cluster": "vip",
//     "detail_cluster": "svip",
//     "status": 0
//   }],
//   "currenttime": 1658307361,
//   "reminder": {
//     "reminderWithContent": [],
//     "advertiseContent": []
//   },
//    "current_product":{
//         "cluster":"vip",
//         "detail_cluster":"vip",
//         "product_type":"vip1_1d",
//         "product_id":"5956446232844245857"
//     },
//     "level_info":{
//         "current_value":0,
//         "current_level":1,
//         "history_value":0,
//         "history_level":0,
//         "last_manual_collection_time":0
//     },
//     "previous_product":[

//     ],
//     "current_privilege_card":[

//     ],
//     "last_privilege_card":[

//     ],
//     "current_product_v2":{
//         "cluster":"vip",
//         "detail_cluster":"vip",
//         "product_type":"vip1_1d",
//         "product_id":"5956446232844245857"
//     },
//     "previous_product_v2":{

//     },
//     "current_privilege_card_v2":{

//     },
//     "last_privilege_card_v2":{

//     },
//     "user_tag":"{\"has_buy_record\":0,\"has_buy_vip_svip_record\":0,\"last_buy_record_creat_time\":0,\"is_vip\":1,\"is_svip\":1,\"last_vip_type\":0,\"last_vip_svip_end_time\":0,\"is_svip_sign\":0,\"notice_user_type\":1,\"notice_user_status\":0,\"is_first_act\":0}",
//     "center_skip_config":{
//         "action_type":0,
//         "action_url":"https:\/\/pan.baidu.com\/buy\/center?tag=8"
//     },
//   "request_id": 43242763417431435
// };
// $done({body: JSON.stringify(obj)});