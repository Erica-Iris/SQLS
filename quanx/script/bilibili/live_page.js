
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

console.log("获取到: " + obj.data.card_list.length + "条数据");
const qnDayColorMap = {
    80: "#FF6F61",
    150: "#FFA07A",
    250: "#FFD700",
    10000: "#98FB98"
};
const qnColorMap = {
    80: "#8B0000",
    150: "#CD5C5C",
    250: "#DAA520",
    10000: "#2E8B57"
};
const qnTextMap = {
    80: "流畅",
    150: "高清",
    250: "超清",
    10000: "原画"
};
const categoriesToFilter = ["交友", "聊天电台", "崩坏：星穹铁道", "王者荣耀", "守望先锋", "男声电台", "萌宅领域", "唱见电台", "蔚蓝档案"];

// 过滤函数
function filterCardsByCategory(data, categories) {
    if (!data || !data.data || !data.data.card_list) {
        return [];
    }
    return data.data.card_list.filter(card => {
        const areaName = card.card_data?.small_card_v1?.area_name;
        return !categories.includes(areaName);
    });
}
// 进行过滤
obj.data.card_list = filterCardsByCategory(data, categoriesToFilter);

obj.data.card_list.forEach(card => {
    if (card.card_data && card.card_data.small_card_v1) {
        const smallCard = card.card_data.small_card_v1;

        // 获取current_qn的值
        const currentQn = smallCard.current_qn;
        // 根据current_qn的值修改text_night_color
        if (qnColorMap.hasOwnProperty(currentQn)) {
            // 根据画质修改颜色
            smallCard.subtitle_style.text_night_color = qnColorMap[currentQn];
            smallCard.subtitle_style.text_color = qnDayColorMap[currentQn];
            // 显示画质
            smallCard.feed_tag.tag_text = qnTextMap[currentQn];
        }
        // 删除没用的埋点
        smallCard.show_callback = "";
        smallCard.click_callback = "";
        // 删除预先获取的默认画质的播放链接
        smallCard.play_url = "";
        // 删除封面左上和右上的各种百舰等图标
        smallCard.pendent_list = [];
        // 隐藏反馈按钮
        smallCard.is_hide_feedback = 1;

    }
});
console.log("剩余: " + obj.data.card_list.length + "条数据");

$done({ body: JSON.stringify(obj) });