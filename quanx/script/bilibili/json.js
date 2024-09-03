// 2023-12-11 19:20

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj?.data?.interaction_list) {
    console.log(`[${$script}]`, obj.data.interaction_list);
    obj.data.interaction_list = obj.data.interaction_list.filter(item => item.title === "预言");
}

$done({ body: JSON.stringify(obj) });