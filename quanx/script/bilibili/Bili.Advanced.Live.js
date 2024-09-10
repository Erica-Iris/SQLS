const $ = new Env("B站直播间净化 v0.0.116");
/**
 * userInfo
 * {
 * "face": "http://xxxxx.jpg",
 * "uname": "xxxxxxxxx"
 * }
 */
/**
 * roomInfo
 * {
 * "roomID": roomID,
 * "live_status": body.data.live_status,
 * "room_title": body.data.title
 * }
 */
/**
 * cardInfo
 * {
 * orderID:123,
 * roomID:xxxxxx,
 * roomTitle:xxxxxx,
 * liveStatus:1,
 * uid:xxxxxx,
 * uname:xxxxxx,
 * face:http://xxxxx.jpg,
 * }
 */

(async function () { // 立即运行的匿名异步函数
    let respBody = JSON.parse($response.body)

    const setting_ = $.getdata("@Bili.Advanced.Live.Settings")
    const cardCaches = $.getjson("@Bili.Advanced.Live.Caches")
    const IDs = $.getdata("@Bili.Advanced.Live.card")
    const results = [];

    // 如果未获取到设置,设置为默认
    if (!setting_) {
        $.log("未获取到设置,设置为默认")
        $.setdata(JSON.stringify(defaultSettings), "@Bili.Advanced.Live.Settings")
        setting_ = defaultSettings
    } else {
        if (Boolean(setting_.close_more_live) == true) {
            $.log("关闭更多直播间按钮")
            respBody.data.more_live_tag = {}
        }
    }

    // 如果未获取到卡片缓存,设置为空数组
    if (!cardCaches) {
        $.log("\n🔴未获取到卡片缓存")
        $.setdata(JSON.stringify([]), "@Bili.Advanced.Live.Caches")
        cardCaches = []
    }

    const promises = Object.keys(IDs).map(async (ID, index) => {
        try {
            // 判断缓存数组中的每一项对象的ID是否能匹配当前的ID
            // 如果不能匹配就去获取信息，如果匹配成功则直接获取cardinfo
            // 缓存的格式是[{cardInfo},{cardInfo},{cardInfo}]
            const cacheIndex = cardCaches.findIndex(cache => {
                return cache.roomID == IDs[ID] || cache.short_id == IDs[ID]
            });
            if (cacheIndex != -1) {
                $.log(`\n🟢从缓存中获取到直播间: ${cardCaches[cacheIndex].roomID},标题是: ${cardCaches[cacheIndex].roomTitle}`)
                results.push(cardCaches[cacheIndex])
                return cardCaches[cacheIndex]
            } else {
                $.log(`\n🔴未获取到缓存,开始获取直播间: ${IDs[ID]}`)
                const roomInfo = await abc(roomInfoT, `https://api.live.bilibili.com/room/v1/Room/get_info?room_id=${IDs[ID]}`);
                const userInfo = await abc(userInfoT, `https://api.live.bilibili.com/live_user/v1/Master/info?uid=${roomInfo.uid}`);
                const cardInfo = buildCardInfo(roomInfo, userInfo, index)
                $.log(`\n🟢成功获取到直播间: ${cardInfo.roomID},标题是: ${cardInfo.roomTitle}`)
                results.push(cardInfo)
                cardCaches.push(cardInfo)
                $.log(`\n🟢成功添加到缓存: ${cardInfo.roomID}`)
                return cardInfo
            }
        } catch (error) {
            console.error(`\n🔴获取直播间 ${IDs[ID]} 失败: \n${error.message}`);
        }
    });

    await Promise.all(promises)
        .then(() => {
            console.log(`\n🟢所有直播间卡片获取完毕, 共 ${results.length} 个`);
        })
        .catch(error => {
            console.error('\n🔴获取出错: \n', error);
        });

    results.forEach(cardInfo => {
        base_multi_view.relation_view.push(build_multi_view_data(cardInfo))
    })

    if (cardCaches) {
        $.setjson(cardCaches, "@Bili.Advanced.Live.Caches")
    } else {
        $.log("未获取到缓存")
        $.setdata(JSON.stringify([]), "@Bili.Advanced.Live.Caches")
    }

    respBody.data.multi_view_info = base_multi_view
    $.log("\n🟢关闭右下角贴片广告")
    // respBody.data.show_reserve_status = false
    $.log("\n🟢关闭预约banner")
    respBody.data.reserve_info.show_reserve_status = false
    $.log("\n🟢关闭活动banner")
    respBody.data.activity_banner_info.pendant_banner = []
    $.log("\n🟢删除弹幕框的提示词")
    respBody.data.room_config_info.dm_text = ""
    respBody.data.room_config_info.post_panel.click_button.landscape_text[0] = ""
    respBody.data.room_config_info.post_panel.click_button.portrait_text[0] = ""
    // respBody.data.xtemplate_config.dm_emoticon_info.is_open_emoticon = 0//关闭表情输入
    respBody.data.xtemplate_config.dm_emoticon_info.is_shield_emoticon = 1
    respBody.data.xtemplate_config.dm_brush_info.landScape.is_hide_anti_brush = 1
    $.done({ body: JSON.stringify(respBody) })
})()
const defaultSettings = {
    app_background: "",
    close_more_live: false,
    close_help_me_play_outer: false,
    close_follow_card: false
}
const base_multi_view = {
    "bg_image": "https://i0.hdslb.com/bfs/live/edaa9477a1d8325dd0c36c419b6fd5f9646b2419.png",
    "copy_writing": "切换其他主播", // 展开按钮上的字
    "gather_room_list": [],         // 放合集的
    "relation_view": [],
    "room_id": 12812111,            // 所有直播的集合页面的ID，和直播ID一样可以直接访问，但是似乎没用
    "room_list": [],                // 作用未知
    "sub_bg_color": "#57b632a5",    // 作用未知
    "sub_slt_color": "#ff0000dd",   // 作用未知
    "sub_text_color": "#007bffd9",  // 作用未知
    "title": "吃鸡直播",            // 作用不明
    "view_pattern": 1,              // 作用不明
    "view_type": 0                  // 默认展开还是收起
}
function buildCardInfo(roomInfo, userInfo, orderID) {
    return {
        "orderID": orderID,
        "roomID": roomInfo.roomID,
        "short_id": roomInfo.short_id,
        "roomTitle": roomInfo.roomTitle,
        "roomCover": roomInfo.cover,
        "liveStatus": roomInfo.liveStatus,
        "uid": roomInfo.uid,
        "uname": userInfo.uname,
        "face": userInfo.face,
        "timestamp": Date.now()
    }
}
function abc(infoType, url) {
    const userInfo = {
        url: url,
        headers: {
            'User-Agent': 'bili-inter/77500100 CFNetwork/1.0 Darwin/23.5.0 os/ios model/iPhone 13 mini mobi_app/iphone_i build/77500100 osVer/17.5.1 network/2 channel/AppStore'
        },
        method: "GET"
    }
    return new Promise((resolve) => { //主函数返回Promise实例对象, 以便后续调用时可以实现顺序执行异步函数
        $.post(userInfo, (error, resp, data) => {
            try { //使用try方法捕获可能出现的代码异常
                if (error) {
                    throw new Error(error);
                } else {
                    const body = JSON.parse(data);
                    if (body.code == 0 && body.data) {
                        $.log("成功获取到信息")
                        return resolve(infoType(body));
                    } else {
                        throw new Error(body.msg || data);
                    }
                }
            } catch (e) {
                console.log(`\n获取失败\n出现错误: ${e.message}`);
            } finally {
            }
        })
    })
}
const roomInfoT = (body) => ({
    "roomID": body.data.room_id,
    "short_id": body.data.short_id,//直播间短号
    "liveStatus": body.data.live_status,
    "uid": body.data.uid,
    "roomTitle": body.data.title,
    "cover": body.data.user_cover
});
const userInfoT = (body) => ({
    "face": body.data.info.face,
    "uname": body.data.info.uname
})
function build_multi_view_data(cardInfo) {
    return {
        "anchor_face": cardInfo.face,
        "cover": cardInfo.roomCover,
        "duration": 0,
        "gather_id": 0,
        "jump_url": `https://live.bilibili.com/${cardInfo.roomID}`,
        "live_status": cardInfo.liveStatus,
        "match_info": null,                 //展示赛事信息
        "match_live_room": false,
        "num": 999999,                      //热度
        "order_id": cardInfo.orderID,       //横着的列表中第几个
        "pub_date": "",
        "switch": false,//作用未知
        "text_small": "99.9万",
        "title": cardInfo.roomTitle,        //最上面的直播间名字
        "up_name": "",
        "use_view_vt": false,               //竖屏直播
        "view_id": cardInfo.roomID,         //用来高亮当前直播间
        "view_name": cardInfo.uname,        //头像边的直播间名字，横屏的小字
        "view_type": 0,                     //0是直播间，1是精彩合集
        "watch_icon": "https://i0.hdslb.com/bfs/live/0b265af1af0a77abc47aa3b8f1a5c0769d8bd23b.png"
    }
}

function Env(name, opts) {
    class Http {
        constructor(env) {
            this.env = env
        }

        send(opts, method = 'GET') {
            opts = typeof opts === 'string' ? { url: opts } : opts
            let sender = this.get
            if (method === 'POST') {
                sender = this.post
            }

            const delayPromise = (promise, delay = 1000) => {
                return Promise.race([
                    promise,
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            reject(new Error('请求超时'))
                        }, delay)
                    })
                ])
            }

            const call = new Promise((resolve, reject) => {
                sender.call(this, opts, (err, resp, body) => {
                    if (err) reject(err)
                    else resolve(resp)
                })
            })

            return opts.timeout ? delayPromise(call, opts.timeout) : call
        }

        get(opts) {
            return this.send.call(this.env, opts)
        }

        post(opts) {
            return this.send.call(this.env, opts, 'POST')
        }
    }

    return new (class {
        constructor(name, opts) {
            this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }
            this.logLevelPrefixs = {
                debug: '[DEBUG] ',
                info: '[INFO] ',
                warn: '[WARN] ',
                error: '[ERROR] '
            }
            this.logLevel = 'info'
            this.name = name
            this.http = new Http(this)
            this.data = null
            this.dataFile = 'box.dat'
            this.logs = []
            this.isMute = false
            this.isNeedRewrite = false
            this.logSeparator = '\n'
            this.encoding = 'utf-8'
            this.startTime = new Date().getTime()
            Object.assign(this, opts)
            this.log('', `🔔${this.name}, 开始!`)
        }

        getEnv() {
            if ('undefined' !== typeof $environment && $environment['surge-version'])
                return 'Surge'
            if ('undefined' !== typeof $environment && $environment['stash-version'])
                return 'Stash'
            if ('undefined' !== typeof module && !!module.exports) return 'Node.js'
            if ('undefined' !== typeof $task) return 'Quantumult X'
            if ('undefined' !== typeof $loon) return 'Loon'
            if ('undefined' !== typeof $rocket) return 'Shadowrocket'
        }

        isNode() {
            return 'Node.js' === this.getEnv()
        }

        isQuanX() {
            return 'Quantumult X' === this.getEnv()
        }

        isSurge() {
            return 'Surge' === this.getEnv()
        }

        isLoon() {
            return 'Loon' === this.getEnv()
        }

        isShadowrocket() {
            return 'Shadowrocket' === this.getEnv()
        }

        isStash() {
            return 'Stash' === this.getEnv()
        }

        toObj(str, defaultValue = null) {
            try {
                return JSON.parse(str)
            } catch {
                return defaultValue
            }
        }

        toStr(obj, defaultValue = null, ...args) {
            try {
                return JSON.stringify(obj, ...args)
            } catch {
                return defaultValue
            }
        }

        getjson(key, defaultValue) {
            let json = defaultValue
            const val = this.getdata(key)
            if (val) {
                try {
                    json = JSON.parse(this.getdata(key))
                } catch { }
            }
            return json
        }

        setjson(val, key) {
            try {
                return this.setdata(JSON.stringify(val), key)
            } catch {
                return false
            }
        }

        getScript(url) {
            return new Promise((resolve) => {
                this.get({ url }, (err, resp, body) => resolve(body))
            })
        }

        runScript(script, runOpts) {
            return new Promise((resolve) => {
                let httpapi = this.getdata('@chavy_boxjs_userCfgs.httpapi')
                httpapi = httpapi ? httpapi.replace(/\n/g, '').trim() : httpapi
                let httpapi_timeout = this.getdata(
                    '@chavy_boxjs_userCfgs.httpapi_timeout'
                )
                httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20
                httpapi_timeout =
                    runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout
                const [key, addr] = httpapi.split('@')
                const opts = {
                    url: `http://${addr}/v1/scripting/evaluate`,
                    body: {
                        script_text: script,
                        mock_type: 'cron',
                        timeout: httpapi_timeout
                    },
                    headers: {
                        'X-Key': key,
                        'Accept': '*/*'
                    },
                    policy: 'DIRECT',
                    timeout: httpapi_timeout
                }
                this.post(opts, (err, resp, body) => resolve(body))
            }).catch((e) => this.logErr(e))
        }

        loaddata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(
                    process.cwd(),
                    this.dataFile
                )
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile =
                    !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                if (isCurDirDataFile || isRootDirDataFile) {
                    const datPath = isCurDirDataFile
                        ? curDirDataFilePath
                        : rootDirDataFilePath
                    try {
                        return JSON.parse(this.fs.readFileSync(datPath))
                    } catch (e) {
                        return {}
                    }
                } else return {}
            } else return {}
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(
                    process.cwd(),
                    this.dataFile
                )
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile =
                    !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                const jsondata = JSON.stringify(this.data)
                if (isCurDirDataFile) {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                } else if (isRootDirDataFile) {
                    this.fs.writeFileSync(rootDirDataFilePath, jsondata)
                } else {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                }
            }
        }

        lodash_get(source, path, defaultValue = undefined) {
            const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
            let result = source
            for (const p of paths) {
                result = Object(result)[p]
                if (result === undefined) {
                    return defaultValue
                }
            }
            return result
        }

        lodash_set(obj, path, value) {
            if (Object(obj) !== obj) return obj
            if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || []
            path
                .slice(0, -1)
                .reduce(
                    (a, c, i) =>
                        Object(a[c]) === a[c]
                            ? a[c]
                            : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {}),
                    obj
                )[path[path.length - 1]] = value
            return obj
        }

        getdata(key) {
            let val = this.getval(key)
            // 如果以 @
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
                const objval = objkey ? this.getval(objkey) : ''
                if (objval) {
                    try {
                        const objedval = JSON.parse(objval)
                        val = objedval ? this.lodash_get(objedval, paths, '') : val
                    } catch (e) {
                        val = ''
                    }
                }
            }
            return val
        }

        setdata(val, key) {
            let issuc = false
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
                const objdat = this.getval(objkey)
                const objval = objkey
                    ? objdat === 'null'
                        ? null
                        : objdat || '{}'
                    : '{}'
                try {
                    const objedval = JSON.parse(objval)
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                } catch (e) {
                    const objedval = {}
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                }
            } else {
                issuc = this.setval(val, key)
            }
            return issuc
        }

        getval(key) {
            switch (this.getEnv()) {
                case 'Surge':
                case 'Loon':
                case 'Stash':
                case 'Shadowrocket':
                    return $persistentStore.read(key)
                case 'Quantumult X':
                    return $prefs.valueForKey(key)
                case 'Node.js':
                    this.data = this.loaddata()
                    return this.data[key]
                default:
                    return (this.data && this.data[key]) || null
            }
        }

        setval(val, key) {
            switch (this.getEnv()) {
                case 'Surge':
                case 'Loon':
                case 'Stash':
                case 'Shadowrocket':
                    return $persistentStore.write(val, key)
                case 'Quantumult X':
                    return $prefs.setValueForKey(val, key)
                case 'Node.js':
                    this.data = this.loaddata()
                    this.data[key] = val
                    this.writedata()
                    return true
                default:
                    return (this.data && this.data[key]) || null
            }
        }

        initGotEnv(opts) {
            this.got = this.got ? this.got : require('got')
            this.cktough = this.cktough ? this.cktough : require('tough-cookie')
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()
            if (opts) {
                opts.headers = opts.headers ? opts.headers : {}
                if (opts) {
                    opts.headers = opts.headers ? opts.headers : {}
                    if (
                        undefined === opts.headers.cookie &&
                        undefined === opts.headers.Cookie &&
                        undefined === opts.cookieJar
                    ) {
                        opts.cookieJar = this.ckjar
                    }
                }
            }
        }

        get(request, callback = () => { }) {
            if (request.headers) {
                delete request.headers['Content-Type']
                delete request.headers['Content-Length']

                // HTTP/2 全是小写
                delete request.headers['content-type']
                delete request.headers['content-length']
            }
            if (request.params) {
                request.url += '?' + this.queryStr(request.params)
            }
            // followRedirect 禁止重定向
            if (
                typeof request.followRedirect !== 'undefined' &&
                !request['followRedirect']
            ) {
                if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false // Surge & Loon
                if (this.isQuanX())
                    request.opts
                        ? (request['opts']['redirection'] = false)
                        : (request.opts = { redirection: false }) // Quantumult X
            }
            switch (this.getEnv()) {
                case 'Surge':
                case 'Loon':
                case 'Stash':
                case 'Shadowrocket':
                default:
                    if (this.isSurge() && this.isNeedRewrite) {
                        request.headers = request.headers || {}
                        Object.assign(request.headers, { 'X-Surge-Skip-Scripting': false })
                    }
                    $httpClient.get(request, (err, resp, body) => {
                        if (!err && resp) {
                            resp.body = body
                            resp.statusCode = resp.status ? resp.status : resp.statusCode
                            resp.status = resp.statusCode
                        }
                        callback(err, resp, body)
                    })
                    break
                case 'Quantumult X':
                    if (this.isNeedRewrite) {
                        request.opts = request.opts || {}
                        Object.assign(request.opts, { hints: false })
                    }
                    $task.fetch(request).then(
                        (resp) => {
                            const {
                                statusCode: status,
                                statusCode,
                                headers,
                                body,
                                bodyBytes
                            } = resp
                            callback(
                                null,
                                { status, statusCode, headers, body, bodyBytes },
                                body,
                                bodyBytes
                            )
                        },
                        (err) => callback((err && err.error) || 'UndefinedError')
                    )
                    break
                case 'Node.js':
                    let iconv = require('iconv-lite')
                    this.initGotEnv(request)
                    this.got(request)
                        .on('redirect', (resp, nextOpts) => {
                            try {
                                if (resp.headers['set-cookie']) {
                                    const ck = resp.headers['set-cookie']
                                        .map(this.cktough.Cookie.parse)
                                        .toString()
                                    if (ck) {
                                        this.ckjar.setCookieSync(ck, null)
                                    }
                                    nextOpts.cookieJar = this.ckjar
                                }
                            } catch (e) {
                                this.logErr(e)
                            }
                            // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
                        })
                        .then(
                            (resp) => {
                                const {
                                    statusCode: status,
                                    statusCode,
                                    headers,
                                    rawBody
                                } = resp
                                const body = iconv.decode(rawBody, this.encoding)
                                callback(
                                    null,
                                    { status, statusCode, headers, rawBody, body },
                                    body
                                )
                            },
                            (err) => {
                                const { message: error, response: resp } = err
                                callback(
                                    error,
                                    resp,
                                    resp && iconv.decode(resp.rawBody, this.encoding)
                                )
                            }
                        )
                    break
            }
        }

        post(request, callback = () => { }) {
            const method = request.method
                ? request.method.toLocaleLowerCase()
                : 'post'

            // 如果指定了请求体, 但没指定 `Content-Type`、`content-type`, 则自动生成。
            if (
                request.body &&
                request.headers &&
                !request.headers['Content-Type'] &&
                !request.headers['content-type']
            ) {
                // HTTP/1、HTTP/2 都支持小写 headers
                request.headers['content-type'] = 'application/x-www-form-urlencoded'
            }
            // 为避免指定错误 `content-length` 这里删除该属性，由工具端 (HttpClient) 负责重新计算并赋值
            if (request.headers) {
                delete request.headers['Content-Length']
                delete request.headers['content-length']
            }
            // followRedirect 禁止重定向
            if (
                typeof request.followRedirect !== 'undefined' &&
                !request['followRedirect']
            ) {
                if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false // Surge & Loon
                if (this.isQuanX())
                    request.opts
                        ? (request['opts']['redirection'] = false)
                        : (request.opts = { redirection: false }) // Quantumult X
            }
            switch (this.getEnv()) {
                case 'Surge':
                case 'Loon':
                case 'Stash':
                case 'Shadowrocket':
                default:
                    if (this.isSurge() && this.isNeedRewrite) {
                        request.headers = request.headers || {}
                        Object.assign(request.headers, { 'X-Surge-Skip-Scripting': false })
                    }
                    $httpClient[method](request, (err, resp, body) => {
                        if (!err && resp) {
                            resp.body = body
                            resp.statusCode = resp.status ? resp.status : resp.statusCode
                            resp.status = resp.statusCode
                        }
                        callback(err, resp, body)
                    })
                    break
                case 'Quantumult X':
                    request.method = method
                    if (this.isNeedRewrite) {
                        request.opts = request.opts || {}
                        Object.assign(request.opts, { hints: false })
                    }
                    $task.fetch(request).then(
                        (resp) => {
                            const {
                                statusCode: status,
                                statusCode,
                                headers,
                                body,
                                bodyBytes
                            } = resp
                            callback(
                                null,
                                { status, statusCode, headers, body, bodyBytes },
                                body,
                                bodyBytes
                            )
                        },
                        (err) => callback((err && err.error) || 'UndefinedError')
                    )
                    break
                case 'Node.js':
                    let iconv = require('iconv-lite')
                    this.initGotEnv(request)
                    const { url, ..._request } = request
                    this.got[method](url, _request).then(
                        (resp) => {
                            const { statusCode: status, statusCode, headers, rawBody } = resp
                            const body = iconv.decode(rawBody, this.encoding)
                            callback(
                                null,
                                { status, statusCode, headers, rawBody, body },
                                body
                            )
                        },
                        (err) => {
                            const { message: error, response: resp } = err
                            callback(
                                error,
                                resp,
                                resp && iconv.decode(resp.rawBody, this.encoding)
                            )
                        }
                    )
                    break
            }
        }
        /**
         *
         * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
         *    :$.time('yyyyMMddHHmmssS')
         *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
         *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
         * @param {string} fmt 格式化参数
         * @param {number} 可选: 根据指定时间戳返回格式化日期
         *
         */
        time(fmt, ts = null) {
            const date = ts ? new Date(ts) : new Date()
            let o = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'H+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds(),
                'q+': Math.floor((date.getMonth() + 3) / 3),
                'S': date.getMilliseconds()
            }
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(
                    RegExp.$1,
                    (date.getFullYear() + '').substr(4 - RegExp.$1.length)
                )
            for (let k in o)
                if (new RegExp('(' + k + ')').test(fmt))
                    fmt = fmt.replace(
                        RegExp.$1,
                        RegExp.$1.length == 1
                            ? o[k]
                            : ('00' + o[k]).substr(('' + o[k]).length)
                    )
            return fmt
        }

        /**
         *
         * @param {Object} options
         * @returns {String} 将 Object 对象 转换成 queryStr: key=val&name=senku
         */
        queryStr(options) {
            let queryString = ''

            for (const key in options) {
                let value = options[key]
                if (value != null && value !== '') {
                    if (typeof value === 'object') {
                        value = JSON.stringify(value)
                    }
                    queryString += `${key}=${value}&`
                }
            }
            queryString = queryString.substring(0, queryString.length - 1)

            return queryString
        }

        /**
         * 系统通知
         *
         * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
         *
         * 示例:
         * $.msg(title, subt, desc, 'twitter://')
         * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         *
         * @param {*} title 标题
         * @param {*} subt 副标题
         * @param {*} desc 通知详情
         * @param {*} opts 通知参数
         *
         */
        msg(title = name, subt = '', desc = '', opts = {}) {
            const toEnvOpts = (rawopts) => {
                const { $open, $copy, $media, $mediaMime } = rawopts
                switch (typeof rawopts) {
                    case undefined:
                        return rawopts
                    case 'string':
                        switch (this.getEnv()) {
                            case 'Surge':
                            case 'Stash':
                            default:
                                return { url: rawopts }
                            case 'Loon':
                            case 'Shadowrocket':
                                return rawopts
                            case 'Quantumult X':
                                return { 'open-url': rawopts }
                            case 'Node.js':
                                return undefined
                        }
                    case 'object':
                        switch (this.getEnv()) {
                            case 'Surge':
                            case 'Stash':
                            case 'Shadowrocket':
                            default: {
                                const options = {}

                                // 打开URL
                                let openUrl =
                                    rawopts.openUrl || rawopts.url || rawopts['open-url'] || $open
                                if (openUrl)
                                    Object.assign(options, { action: 'open-url', url: openUrl })

                                // 粘贴板
                                let copy =
                                    rawopts['update-pasteboard'] ||
                                    rawopts.updatePasteboard ||
                                    $copy
                                if (copy) {
                                    Object.assign(options, { action: 'clipboard', text: copy })
                                }

                                if ($media) {
                                    let mediaUrl = undefined
                                    let media = undefined
                                    let mime = undefined
                                    // http 开头的网络地址
                                    if ($media.startsWith('http')) {
                                        mediaUrl = $media
                                    }
                                    // 带标识的 Base64 字符串
                                    // data:image/png;base64,iVBORw0KGgo...
                                    else if ($media.startsWith('data:')) {
                                        const [data] = $media.split(';')
                                        const [, base64str] = $media.split(',')
                                        media = base64str
                                        mime = data.replace('data:', '')
                                    }
                                    // 没有标识的 Base64 字符串
                                    // iVBORw0KGgo...
                                    else {
                                        // https://stackoverflow.com/questions/57976898/how-to-get-mime-type-from-base-64-string
                                        const getMimeFromBase64 = (encoded) => {
                                            const signatures = {
                                                'JVBERi0': 'application/pdf',
                                                'R0lGODdh': 'image/gif',
                                                'R0lGODlh': 'image/gif',
                                                'iVBORw0KGgo': 'image/png',
                                                '/9j/': 'image/jpg'
                                            }
                                            for (var s in signatures) {
                                                if (encoded.indexOf(s) === 0) {
                                                    return signatures[s]
                                                }
                                            }
                                            return null
                                        }
                                        media = $media
                                        mime = getMimeFromBase64($media)
                                    }

                                    Object.assign(options, {
                                        'media-url': mediaUrl,
                                        'media-base64': media,
                                        'media-base64-mime': $mediaMime ?? mime
                                    })
                                }

                                Object.assign(options, {
                                    'auto-dismiss': rawopts['auto-dismiss'],
                                    'sound': rawopts['sound']
                                })
                                return options
                            }
                            case 'Loon': {
                                const options = {}

                                let openUrl =
                                    rawopts.openUrl || rawopts.url || rawopts['open-url'] || $open
                                if (openUrl) Object.assign(options, { openUrl })

                                let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
                                if ($media?.startsWith('http')) mediaUrl = $media
                                if (mediaUrl) Object.assign(options, { mediaUrl })

                                console.log(JSON.stringify(options))
                                return options
                            }
                            case 'Quantumult X': {
                                const options = {}

                                let openUrl =
                                    rawopts['open-url'] || rawopts.url || rawopts.openUrl || $open
                                if (openUrl) Object.assign(options, { 'open-url': openUrl })

                                let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
                                if ($media?.startsWith('http')) mediaUrl = $media
                                if (mediaUrl) Object.assign(options, { 'media-url': mediaUrl })

                                let copy =
                                    rawopts['update-pasteboard'] ||
                                    rawopts.updatePasteboard ||
                                    $copy
                                if (copy) Object.assign(options, { 'update-pasteboard': copy })

                                console.log(JSON.stringify(options))
                                return options
                            }
                            case 'Node.js':
                                return undefined
                        }
                    default:
                        return undefined
                }
            }
            if (!this.isMute) {
                switch (this.getEnv()) {
                    case 'Surge':
                    case 'Loon':
                    case 'Stash':
                    case 'Shadowrocket':
                    default:
                        $notification.post(title, subt, desc, toEnvOpts(opts))
                        break
                    case 'Quantumult X':
                        $notify(title, subt, desc, toEnvOpts(opts))
                        break
                    case 'Node.js':
                        break
                }
            }
            if (!this.isMuteLog) {
                let logs = ['', '==============📣系统通知📣==============']
                logs.push(title)
                subt ? logs.push(subt) : ''
                desc ? logs.push(desc) : ''
                console.log(logs.join('\n'))
                this.logs = this.logs.concat(logs)
            }
        }

        debug(...logs) {
            if (this.logLevels[this.logLevel] <= this.logLevels.debug) {
                if (logs.length > 0) {
                    this.logs = [...this.logs, ...logs]
                }
                console.log(
                    `${this.logLevelPrefixs.debug}${logs.map((l) => l ?? String(l)).join(this.logSeparator)}`
                )
            }
        }

        info(...logs) {
            if (this.logLevels[this.logLevel] <= this.logLevels.info) {
                if (logs.length > 0) {
                    this.logs = [...this.logs, ...logs]
                }
                console.log(
                    `${this.logLevelPrefixs.info}${logs.map((l) => l ?? String(l)).join(this.logSeparator)}`
                )
            }
        }

        warn(...logs) {
            if (this.logLevels[this.logLevel] <= this.logLevels.warn) {
                if (logs.length > 0) {
                    this.logs = [...this.logs, ...logs]
                }
                console.log(
                    `${this.logLevelPrefixs.warn}${logs.map((l) => l ?? String(l)).join(this.logSeparator)}`
                )
            }
        }

        error(...logs) {
            if (this.logLevels[this.logLevel] <= this.logLevels.error) {
                if (logs.length > 0) {
                    this.logs = [...this.logs, ...logs]
                }
                console.log(
                    `${this.logLevelPrefixs.error}${logs.map((l) => l ?? String(l)).join(this.logSeparator)}`
                )
            }
        }

        log(...logs) {
            if (logs.length > 0) {
                this.logs = [...this.logs, ...logs]
            }
            console.log(logs.map((l) => l ?? String(l)).join(this.logSeparator))
        }

        logErr(err, msg) {
            switch (this.getEnv()) {
                case 'Surge':
                case 'Loon':
                case 'Stash':
                case 'Shadowrocket':
                case 'Quantumult X':
                default:
                    this.log('', `❗️${this.name}, 错误!`, msg, err)
                    break
                case 'Node.js':
                    this.log(
                        '',
                        `❗️${this.name}, 错误!`,
                        msg,
                        typeof err.message !== 'undefined' ? err.message : err,
                        err.stack
                    )
                    break
            }
        }

        wait(time) {
            return new Promise((resolve) => setTimeout(resolve, time))
        }

        done(val = {}) {
            const endTime = new Date().getTime()
            const costTime = (endTime - this.startTime) / 1000
            this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
            this.log()
            switch (this.getEnv()) {
                case 'Surge':
                case 'Loon':
                case 'Stash':
                case 'Shadowrocket':
                case 'Quantumult X':
                default:
                    $done(val)
                    break
                case 'Node.js':
                    process.exit(1)
            }
        }
    })(name, opts)
}