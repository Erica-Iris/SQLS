const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
console.log("\n================begin===============\n")
if (obj?.data?.card_list) {
    console.log("获取到：" + obj.data.card_list.length + " 条数据\n")
    for (item in obj.data.card_list) {
        if (item.card_type === "my_idol_v1") {
            for (i in item.card_data.my_idol_v1.list) {
                console.log(i.title)
                console.log("\n")
            }
        }
        if (item.card_type === "small_card_v1") {
            console.log(item.card_data.small_card_v1.title)
            console.log("\n")
        }
    }
}

console.log("=================END================")
$done({ body: JSON.stringify(obj) });