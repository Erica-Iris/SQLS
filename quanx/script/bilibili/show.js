const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj?.data?.list) {
    for (item in obj.data.list) {
        item.title = item.current_qn + " " + item.title;
    }
}

$done({ body: JSON.stringify(obj) });