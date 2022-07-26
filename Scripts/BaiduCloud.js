/*
http-response https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user
*/



let obj = JSON.parse($response.body);
obj = {
  "product_infos": [
    {
      "cur_svip_type": "month",
      "product_name": "svip2_nd",
      "product_description": "",
      "function_num": 0,
      "start_time": 1658393469,
      "buy_description": "",
      "buy_time": 0,
      "product_id": "",
      "auto_upgrade_to_svip": 1,
      "end_time": 2661097599,
      "cluster": "vip",
      "detail_cluster": "svip",
      "status": 0
    },
    {
      "product_name": "contentvip_nd",
      "product_description": "",
      "function_num": 0,
      "start_time": 1658393470,
      "buy_description": "",
      "buy_time": 0,
      "product_id": "",
      "auto_upgrade_to_svip": 1,
      "end_time": 2661097599,
      "cluster": "contentvip",
      "detail_cluster": "contentvip",
      "status": 0
    }
  ],
  "center_skip_config": {
    "action_type": 0,
    "action_url": "https:\/\/pan.baidu.com\/buy\/center?tag=8"
  },
  "last_privilege_card_v2": {
  },
  "current_privilege_card": [
  ],
  "current_product_v2": {
    "product_id": "1218713509058153971",
    "detail_cluster": "svip",
    "cluster": "vip",
    "product_type": "vip2_1m_auto"
  },
  "request_id": 66427974596385441,
  "current_privilege_card_v2": {
  },
  "up_product_infos": [
  ],
  "last_privilege_card": [
  ],
  "level_info": {
    "history_value": 3000,
    "current_level": 7,
    "last_manual_collection_time": 0,
    "current_value": 0,
    "history_level": 1
  },
  "user_tag": "{\"has_buy_record\":0,\"has_buy_vip_svip_record\":0,\"last_buy_record_creat_time\":0,\"is_vip\":1,\"is_svip\":1,\"last_vip_type\":1,\"last_vip_svip_end_time\":2658419199,\"is_svip_sign\":0,\"notice_user_type\":1,\"notice_user_status\":0,\"is_first_act\":0}",
  "currenttime": 1658393732,
  "previous_product": [
  ],
  "current_product": {
    "product_id": "12187135090581539741",
    "detail_cluster": "svip",
    "cluster": "vip",
    "product_type": "vip2_1m_auto"
  },
  "reminder": {
    "reminderWithContent": [
    ],
    "advertiseContent": [
    ],
    "svip": {
      "leftseconds": 2703867,
      "nextState": "normal"
    }
  },
  "previous_product_v2": {
  }

};
$done({body: JSON.stringify(obj)});
