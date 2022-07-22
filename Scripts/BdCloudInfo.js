

let obj = JSON.parse($response.body);
obj = {
    "error_msg": "success",
  "user_info": {
    "isAutoRenew": 0,
    "mobileModel": "",
    "is_svip": 1,
    "phone": "177*****520",
    "loginstate": 1,
    "vipsid": 0,
    "is_first_charge_svip": 0,
    "show_varyprice": 0,
    "assets_get": 0,
    "is_plus_buy": 1,
    "plus_buy_hit": 0,
    "username": "胖胖小可爱活宝",
    "privilegeCardAutoRenew": {
      "privilegecard_life": 0,
      "privilegecard_audio_visual": 0,
      "privilegecard_work": 0
    },
    "is_first_charge": 0,
    "expid": "",
    "is_vip": 1,
    "photo": "https:\/\/ss0.bdstatic.com\/7Ls0a8Sm1A5BphGlnYG\/sys\/portrait\/item\/netdisk.1.db5d01d5.VkgtWJgYBaR0x8yXIfsc2w.jpg",
    "uk": 1102487430253
  },
  "request_id": 83385975806067614,
  "error_code": 0

};
$done({body: JSON.stringify(obj)});
