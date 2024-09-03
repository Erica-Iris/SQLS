const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);


console.log("234")
// if (obj?.data?.interaction_list) {
//     // for (i in obj.data.interaction_list) {
//     //     if (i?.note != "预言") {
//     //         delete obj.data.interaction_list[i];
//     //     }
//     // }
//     delete obj.data.interaction_list[0];
//     delete obj.data.interaction_list[2];
// }
delete obj.data.interaction_list;
$done({ body: JSON.stringify(obj) });