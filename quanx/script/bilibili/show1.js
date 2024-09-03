const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
console.log("================begin===============")
if (obj?.data?.card_list) {
    console.log(obj.data.card_list.length)
    for (item in obj.data.card_list) {
        if (item.card_type === "area_entrance_v1") {
            return
        }
        if (item.card_type === "my_idol_v1") {
            for (i in item.card_data.my_idol_v1.list) {
                console.log(i.title)
            }
        }
        if (item.card_type === "small_card_v1") {
            console.log(item.card_data.small_card_v1.title)
        }
    }
}

console.log("=================END================")
$done({ body: JSON.stringify(obj) });