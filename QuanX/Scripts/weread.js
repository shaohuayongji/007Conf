var body = $response.body;
var url = $request.url;
let path = "/pay/memberCardSummary";
if (url.indexOf(path) != -1){
  var obj = JSON.parse(body);
  obj["expired"] = 0;
  obj["expiredTime"] = 1747624048;
  obj["remainTime"] = 189302400;
  body = JSON.stringify(obj);
}
$done({body}); 

/*
Made by Meeta (微信阅读)
https?:\/\/i\.weread\.qq.com\/pay\/memberCardSummary\?pf
hostname = i.weread.qq.com
*/

