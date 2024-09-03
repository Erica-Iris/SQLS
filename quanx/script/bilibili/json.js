const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/xlive/app-ucenter/v1/elden/get_by_user")) {
    if (obj?.data?.interaction_list) {
        for (i in length(obj.data.interaction_list)) {
            if (i?.note != "预言") {
                delete obj.data.interaction_list[i];
            }
        }
    }
}