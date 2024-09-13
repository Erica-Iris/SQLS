//get response body
let respBody = JSON.parse($response.body)
// return empty body

respBody.data.list = []

$done({ body: JSON.stringify(respBody) })