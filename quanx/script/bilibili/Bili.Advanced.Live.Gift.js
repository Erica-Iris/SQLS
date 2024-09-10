let respBody = JSON.parse($response.body)

respBody.data.red_dot = []

// respBody.data.privilege.exist_benefit = true
respBody.data.privilege.privilege_type = 1
respBody.data.tab_list = []
respBody.data.special_tag = []
// respBody.data.bag_tab_disable = 1
$done({ body: JSON.stringify(respBody) })
