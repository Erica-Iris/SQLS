// 2023-12-11 19:20

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

delete obj.data.interaction_list[0];

$done({ body: JSON.stringify(obj) });