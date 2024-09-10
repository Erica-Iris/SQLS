//get response body
let respBody = JSON.parse($response.body)
/**
 * {
  "code": 0,
  "data": {
    "cycle_rounds": 3,
    "guide_duration": 3,
    "has_more": 1,
    "initialized_list": [],
    "is_need_refresh": 1,
    "list": [
      {
        "accept_quality": [
          10000
        ],
        "app_background": "https://i0.hdslb.com/bfs/live/b91b552eb12e1c65833fc802f1a5a28315496155.jpg",
        "broadcast_type": 0,
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_af55fc67-dd7e-4c68-bf2e-b0322efbdd99&group_id=1000182&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=21381785&parent_id=6&area_id=216&page=1&position=1",
        "cover": "http://i0.hdslb.com/bfs/live/new_room_cover/49892544219a499e7cb0cf9aa74b8afbda2b0bd4.jpg",
        "current_qn": 10000,
        "current_quality": 10000,
        "face": "https://i1.hdslb.com/bfs/face/d7d5a01968a235dc6f9a21db9512b3896790ac67.jpg",
        "group_id": 1000182,
        "head_box": null,
        "is_nft": 0,
        "link": "/21381785",
        "master_url": "",
        "nft_dmark": "https://i0.hdslb.com/bfs/live/9f176ff49d28c50e9c53ec1c3297bd1ee539b3d6.gif",
        "p2p_type": 8192,
        "play_url": "https://d1--cn-gotcha204-2.bilivideo.com/live-bvc/747470/live_421736260_60707629/index.m3u8?expires=1725907082&len=0&oi=1879910662&pt=ios&qn=10000&trid=10071ed5f855e466972d14d8cafea466df32&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha204&sign=62f587caa29df3d6c733630f81e862c8&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&bvchls=1&trace=64&isp=cm&rg=East&pv=Zhejiang&flvsk=a2c7c534ce579871fd03c9c2928cc693&sk=9798153f855e2d015f9577b5f3454f4d&hot_cdn=0&deploy_env=prod&origin_bitrate=192275&sl=1&p2p_type=8192&score=1&qp=de_0&source=puv3_batch&suffix=origin&pp=srt&vd=bc&src=puv3",
        "play_url_card": "",
        "play_url_h265": "",
        "playurl_infos": [
          {
            "accept_quality": [
              10000
            ],
            "codec": 0,
            "codec_name": "AVC",
            "current_qn": 10000,
            "current_quality": 10000,
            "playurl": "https://d1--cn-gotcha204-2.bilivideo.com/live-bvc/747470/live_421736260_60707629/index.m3u8?expires=1725907082&len=0&oi=1879910662&pt=ios&qn=10000&trid=10071ed5f855e466972d14d8cafea466df32&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha204&sign=62f587caa29df3d6c733630f81e862c8&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&bvchls=1&trace=64&isp=cm&rg=East&pv=Zhejiang&flvsk=a2c7c534ce579871fd03c9c2928cc693&sk=9798153f855e2d015f9577b5f3454f4d&hot_cdn=0&deploy_env=prod&origin_bitrate=192275&sl=1&p2p_type=8192&score=1&qp=de_0&source=puv3_batch&suffix=origin&pp=srt&vd=bc&src=puv3",
            "quality_description": [
              {
                "desc": "原画",
                "qn": 10000
              }
            ]
          }
        ],
        "quality_description": [
          {
            "desc": "原画",
            "qn": 10000
          }
        ],
        "room_id": 21381785,
        "session_id": "1ed5f855e466972d14d8cafea466df32_af55fc67-dd7e-4c68-bf2e-b0322efbdd99",
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_af55fc67-dd7e-4c68-bf2e-b0322efbdd99&group_id=1000182&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=21381785&parent_id=6&area_id=216&page=1&position=1",
        "title": "GregTechLeisure初入UIV",
        "uid": 421736260,
        "uname": "Dragonator",
        "verify": {
          "role": -1,
          "title": ""
        }
      },
      {
        "accept_quality": [
          10000
        ],
        "app_background": "https://i0.hdslb.com/bfs/live/b91b552eb12e1c65833fc802f1a5a28315496155.jpg",
        "broadcast_type": 0,
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_a88dfe5c-5c61-4373-b099-17f42a1cb86b&group_id=1000182&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=7961369&parent_id=6&area_id=235&page=1&position=2",
        "cover": "http://i0.hdslb.com/bfs/live/new_room_cover/3e67593ef5af6bcb521a2df3acc04fef60006482.jpg",
        "current_qn": 10000,
        "current_quality": 10000,
        "face": "https://i0.hdslb.com/bfs/face/ceb161b361e572379a60b12674522c3560355b06.jpg",
        "group_id": 1000182,
        "head_box": null,
        "is_nft": 0,
        "link": "/7961369",
        "master_url": "",
        "nft_dmark": "https://i0.hdslb.com/bfs/live/9f176ff49d28c50e9c53ec1c3297bd1ee539b3d6.gif",
        "p2p_type": 0,
        "play_url": "https://cn-cq-cm-01-30.bilivideo.com/live-bvc/722845/live_24866370_7639219.flv?expires=1725907082&pt=ios&deadline=1725907082&len=0&oi=1879910662&platform=ios&qn=10000&trid=10001ed5f855e466972d14d8cafea466df32&uipk=100&uipv=100&nbs=1&uparams=cdn,deadline,len,oi,platform,qn,trid,uipk,uipv,nbs&cdn=cn-gotcha01&upsig=15626fc16ca59dbe3f6cb1b29ac3340d&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&sid=cn-cq-cm-01-30&chash=1&bmt=1&sg=cs&trace=73&isp=cm&rg=East&pv=Zhejiang&sl=1&p2p_type=8192&qp=de_0&hot_cdn=0&origin_bitrate=537150&pp=rtmp&score=3&suffix=origin&source=puv3_batch&deploy_env=prod&sk=ecba807bacf4442834ee9e9c50005662&vd=nc&zoneid_l=151355395&sid_l=stream_name_cold&src=puv3",
        "play_url_card": "",
        "play_url_h265": "",
        "playurl_infos": [
          {
            "accept_quality": [
              10000
            ],
            "codec": 0,
            "codec_name": "AVC",
            "current_qn": 10000,
            "current_quality": 10000,
            "playurl": "https://cn-cq-cm-01-30.bilivideo.com/live-bvc/722845/live_24866370_7639219.flv?expires=1725907082&pt=ios&deadline=1725907082&len=0&oi=1879910662&platform=ios&qn=10000&trid=10001ed5f855e466972d14d8cafea466df32&uipk=100&uipv=100&nbs=1&uparams=cdn,deadline,len,oi,platform,qn,trid,uipk,uipv,nbs&cdn=cn-gotcha01&upsig=15626fc16ca59dbe3f6cb1b29ac3340d&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&sid=cn-cq-cm-01-30&chash=1&bmt=1&sg=cs&trace=73&isp=cm&rg=East&pv=Zhejiang&sl=1&p2p_type=8192&qp=de_0&hot_cdn=0&origin_bitrate=537150&pp=rtmp&score=3&suffix=origin&source=puv3_batch&deploy_env=prod&sk=ecba807bacf4442834ee9e9c50005662&vd=nc&zoneid_l=151355395&sid_l=stream_name_cold&src=puv3",
            "quality_description": [
              {
                "desc": "原画",
                "qn": 10000
              }
            ]
          }
        ],
        "quality_description": [
          {
            "desc": "原画",
            "qn": 10000
          }
        ],
        "room_id": 7961369,
        "session_id": "1ed5f855e466972d14d8cafea466df32_a88dfe5c-5c61-4373-b099-17f42a1cb86b",
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_a88dfe5c-5c61-4373-b099-17f42a1cb86b&group_id=1000182&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=7961369&parent_id=6&area_id=235&page=1&position=2",
        "title": "星露谷蘑菇养殖户",
        "uid": 24866370,
        "uname": "广土水牛",
        "verify": {
          "role": -1,
          "title": ""
        }
      },
      {
        "accept_quality": [
          10000,
          250,
          150
        ],
        "app_background": "https://i0.hdslb.com/bfs/live/b91b552eb12e1c65833fc802f1a5a28315496155.jpg",
        "broadcast_type": 0,
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_054312b9-dd30-4df1-a867-4b8f697a5f4c&group_id=1000182&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=32115649&parent_id=6&area_id=804&page=1&position=3",
        "cover": "http://i0.hdslb.com/bfs/live/new_room_cover/c6142744e1960ec1502833005a8635b3ac68cba1.jpg",
        "current_qn": 250,
        "current_quality": 250,
        "face": "https://i2.hdslb.com/bfs/face/1d29ac58bdf583b2ee0d3cf334ff7bb651593f71.jpg",
        "group_id": 1000182,
        "head_box": {
          "desc": "",
          "name": "峻岭骄阳",
          "value": "https://i0.hdslb.com/bfs/live/5b8ab38824aa37d50802ed27b5862090efe55c50.png"
        },
        "is_nft": 0,
        "link": "/32115649",
        "master_url": "",
        "nft_dmark": "https://i0.hdslb.com/bfs/live/9f176ff49d28c50e9c53ec1c3297bd1ee539b3d6.gif",
        "p2p_type": 8192,
        "play_url": "https://d1--cn-gotcha204-2.bilivideo.com/live-bvc/887988/live_699165416_76218470_2500/index.m3u8?expires=1725907082&len=0&oi=1879910662&pt=ios&qn=250&trid=10071ed5f855e466972d14d8cafea466df32&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha204&sign=8b8c0e67bade1f1702b5bc27ecb02d76&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&bvchls=1&trace=64&isp=cm&rg=East&pv=Zhejiang&pp=srt&p2p_type=8192&source=puv3_batch&flvsk=8962a384f71263fade544d380bffd9eb&sl=2&sk=b47ae0b83de4e4ef54530695dbae0c6e&deploy_env=prod&suffix=2500&qp=de_0&score=8&hot_cdn=57353&origin_bitrate=360642&vd=bc&src=puv3",
        "play_url_card": "",
        "play_url_h265": "https://d1--cn-gotcha204-2.bilivideo.com/live-bvc/866423/live_699165416_76218470_minihevc/index.m3u8?expires=1725907082&len=0&oi=1879910662&pt=ios&qn=250&trid=10071ed5f855e466972d14d8cafea466df32&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha204&sign=107f7e3bf23a5f7a5d6ed6f5b07fd7f9&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&bvchls=1&trace=64&isp=cm&rg=East&pv=Zhejiang&qp=de_0&flvsk=8962a384f71263fade544d380bffd9eb&score=13&pp=srt&p2p_type=8192&source=puv3_batch&deploy_env=prod&origin_bitrate=360642&sk=b47ae0b83de4e4ef54530695dbae0c6e&suffix=minihevc&hot_cdn=57353&sl=2&vd=bc&src=puv3",
        "playurl_infos": [
          {
            "accept_quality": [
              250
            ],
            "codec": 1,
            "codec_name": "HEVC",
            "current_qn": 250,
            "current_quality": 250,
            "playurl": "https://d1--cn-gotcha204-2.bilivideo.com/live-bvc/866423/live_699165416_76218470_minihevc/index.m3u8?expires=1725907082&len=0&oi=1879910662&pt=ios&qn=250&trid=10071ed5f855e466972d14d8cafea466df32&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha204&sign=107f7e3bf23a5f7a5d6ed6f5b07fd7f9&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&bvchls=1&trace=64&isp=cm&rg=East&pv=Zhejiang&qp=de_0&flvsk=8962a384f71263fade544d380bffd9eb&score=13&pp=srt&p2p_type=8192&source=puv3_batch&deploy_env=prod&origin_bitrate=360642&sk=b47ae0b83de4e4ef54530695dbae0c6e&suffix=minihevc&hot_cdn=57353&sl=2&vd=bc&src=puv3",
            "quality_description": [
              {
                "desc": "超清",
                "qn": 250
              }
            ]
          },
          {
            "accept_quality": [
              10000,
              250,
              150
            ],
            "codec": 0,
            "codec_name": "AVC",
            "current_qn": 250,
            "current_quality": 250,
            "playurl": "https://d1--cn-gotcha204-2.bilivideo.com/live-bvc/887988/live_699165416_76218470_2500/index.m3u8?expires=1725907082&len=0&oi=1879910662&pt=ios&qn=250&trid=10071ed5f855e466972d14d8cafea466df32&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha204&sign=8b8c0e67bade1f1702b5bc27ecb02d76&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&bvchls=1&trace=64&isp=cm&rg=East&pv=Zhejiang&pp=srt&p2p_type=8192&source=puv3_batch&flvsk=8962a384f71263fade544d380bffd9eb&sl=2&sk=b47ae0b83de4e4ef54530695dbae0c6e&deploy_env=prod&suffix=2500&qp=de_0&score=8&hot_cdn=57353&origin_bitrate=360642&vd=bc&src=puv3",
            "quality_description": [
              {
                "desc": "原画",
                "qn": 10000
              },
              {
                "desc": "超清",
                "qn": 250
              },
              {
                "desc": "高清",
                "qn": 150
              }
            ]
          }
        ],
        "quality_description": [
          {
            "desc": "原画",
            "qn": 10000
          },
          {
            "desc": "超清",
            "qn": 250
          },
          {
            "desc": "高清",
            "qn": 150
          }
        ],
        "room_id": 32115649,
        "session_id": "1ed5f855e466972d14d8cafea466df32_054312b9-dd30-4df1-a867-4b8f697a5f4c",
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_054312b9-dd30-4df1-a867-4b8f697a5f4c&group_id=1000182&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=32115649&parent_id=6&area_id=804&page=1&position=3",
        "title": "《黑神话：悟空》一命模式，死了重开送游戏",
        "uid": 699165416,
        "uname": "老猫的游戏",
        "verify": {
          "role": -1,
          "title": ""
        }
      },
      {
        "accept_quality": [
          10000
        ],
        "app_background": "https://i0.hdslb.com/bfs/live/b91b552eb12e1c65833fc802f1a5a28315496155.jpg",
        "broadcast_type": 0,
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_fd1a5c9a-c1ec-49ff-8bd2-915a00af88df&group_id=1000182&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=7810157&parent_id=6&area_id=216&page=1&position=4",
        "cover": "http://i0.hdslb.com/bfs/live/new_room_cover/65babcc5a4de3e7e6d2093262c2fe41b52a60972.jpg",
        "current_qn": 10000,
        "current_quality": 10000,
        "face": "https://i0.hdslb.com/bfs/face/10c5d20d9025a96f2c3a3cc0caf64ba463819901.jpg",
        "group_id": 1000182,
        "head_box": null,
        "is_nft": 0,
        "link": "/7810157",
        "master_url": "",
        "nft_dmark": "https://i0.hdslb.com/bfs/live/9f176ff49d28c50e9c53ec1c3297bd1ee539b3d6.gif",
        "p2p_type": 8192,
        "play_url": "https://cn-jxnc-cm-01-38.bilivideo.com/live-bvc/649491/live_11432466_8856030/index.m3u8?expires=1725907082&len=0&oi=1879910662&pt=ios&qn=10000&trid=10071ed5f855e466972d14d8cafea466df32&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha01&sign=5c3b2d8a8d79e0075f3a2ae9c78bfefb&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&bvchls=1&sid=cn-jxnc-cm-01-38&chash=1&bmt=1&sg=lr&trace=8388681&isp=cm&rg=East&pv=Zhejiang&score=2&origin_bitrate=760977&qp=de_0&sk=8d330842663f0f8c7b68ca6577876fc8&sl=1&pp=rtmp&suffix=origin&deploy_env=prod&p2p_type=8192&source=puv3_batch&flvsk=781532ca016d085c986fc6c56e6c40a7&hot_cdn=0&vd=nc&zoneid_l=151355395&sid_l=stream_name_cold&src=puv3",
        "play_url_card": "",
        "play_url_h265": "",
        "playurl_infos": [
          {
            "accept_quality": [
              10000
            ],
            "codec": 0,
            "codec_name": "AVC",
            "current_qn": 10000,
            "current_quality": 10000,
            "playurl": "https://cn-jxnc-cm-01-38.bilivideo.com/live-bvc/649491/live_11432466_8856030/index.m3u8?expires=1725907082&len=0&oi=1879910662&pt=ios&qn=10000&trid=10071ed5f855e466972d14d8cafea466df32&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha01&sign=5c3b2d8a8d79e0075f3a2ae9c78bfefb&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&bvchls=1&sid=cn-jxnc-cm-01-38&chash=1&bmt=1&sg=lr&trace=8388681&isp=cm&rg=East&pv=Zhejiang&score=2&origin_bitrate=760977&qp=de_0&sk=8d330842663f0f8c7b68ca6577876fc8&sl=1&pp=rtmp&suffix=origin&deploy_env=prod&p2p_type=8192&source=puv3_batch&flvsk=781532ca016d085c986fc6c56e6c40a7&hot_cdn=0&vd=nc&zoneid_l=151355395&sid_l=stream_name_cold&src=puv3",
            "quality_description": [
              {
                "desc": "原画",
                "qn": 10000
              }
            ]
          }
        ],
        "quality_description": [
          {
            "desc": "原画",
            "qn": 10000
          }
        ],
        "room_id": 7810157,
        "session_id": "1ed5f855e466972d14d8cafea466df32_fd1a5c9a-c1ec-49ff-8bd2-915a00af88df",
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_fd1a5c9a-c1ec-49ff-8bd2-915a00af88df&group_id=1000182&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=7810157&parent_id=6&area_id=216&page=1&position=4",
        "title": "RLCraft休闲生存",
        "uid": 11432466,
        "uname": "骨头汤OuO",
        "verify": {
          "role": -1,
          "title": ""
        }
      },
      {
        "accept_quality": [
          10000
        ],
        "app_background": "https://i0.hdslb.com/bfs/live/a76112fde643c83ab5e58576b20136f74b6efbee.jpg",
        "broadcast_type": 0,
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_88c88db6-23a7-4959-b3c6-1acc56fd1576&group_id=1000182&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=21655742&parent_id=11&area_id=701&page=1&position=5",
        "cover": "http://i0.hdslb.com/bfs/live/new_room_cover/3b267d25b433a73b45a8b3ff2433bd9992f3df85.jpg",
        "current_qn": 10000,
        "current_quality": 10000,
        "face": "https://i0.hdslb.com/bfs/face/af48d89c7f52840adf9ed12cf6e74cd88e5f61fc.jpg",
        "group_id": 1000182,
        "head_box": null,
        "is_nft": 0,
        "link": "/21655742",
        "master_url": "",
        "nft_dmark": "https://i0.hdslb.com/bfs/live/9f176ff49d28c50e9c53ec1c3297bd1ee539b3d6.gif",
        "p2p_type": 0,
        "play_url": "https://c1--cn-gotcha09.bilivideo.com/live-bvc/367637/live_103120101_39602226.flv?expires=1725907082&len=0&oi=1879910662&pt=ios&qn=10000&trid=10001ed5f855e466972d14d8cafea466df32&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha09&sign=a885a3bf438072ec53a51761a9eead8c&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&trace=64&isp=cm&rg=East&pv=Zhejiang&suffix=origin&hot_cdn=0&origin_bitrate=372389&qp=de_0&sk=1174fda3e37dc7adc04251e0e9785a49&pp=rtmp&source=puv3_batch&deploy_env=prod&sl=1&score=8&p2p_type=8192&vd=bc&src=puv3",
        "play_url_card": "",
        "play_url_h265": "",
        "playurl_infos": [
          {
            "accept_quality": [
              10000
            ],
            "codec": 0,
            "codec_name": "AVC",
            "current_qn": 10000,
            "current_quality": 10000,
            "playurl": "https://c1--cn-gotcha09.bilivideo.com/live-bvc/367637/live_103120101_39602226.flv?expires=1725907082&len=0&oi=1879910662&pt=ios&qn=10000&trid=10001ed5f855e466972d14d8cafea466df32&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha09&sign=a885a3bf438072ec53a51761a9eead8c&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&trace=64&isp=cm&rg=East&pv=Zhejiang&suffix=origin&hot_cdn=0&origin_bitrate=372389&qp=de_0&sk=1174fda3e37dc7adc04251e0e9785a49&pp=rtmp&source=puv3_batch&deploy_env=prod&sl=1&score=8&p2p_type=8192&vd=bc&src=puv3",
            "quality_description": [
              {
                "desc": "原画",
                "qn": 10000
              }
            ]
          }
        ],
        "quality_description": [
          {
            "desc": "原画",
            "qn": 10000
          }
        ],
        "room_id": 21655742,
        "session_id": "1ed5f855e466972d14d8cafea466df32_88c88db6-23a7-4959-b3c6-1acc56fd1576",
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_88c88db6-23a7-4959-b3c6-1acc56fd1576&group_id=1000182&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=21655742&parent_id=11&area_id=701&page=1&position=5",
        "title": "一起来看发布会",
        "uid": 103120101,
        "uname": "糊粥人儿",
        "verify": {
          "role": -1,
          "title": ""
        }
      },
      {
        "accept_quality": [
          10000,
          250
        ],
        "app_background": "https://i0.hdslb.com/bfs/live/b91b552eb12e1c65833fc802f1a5a28315496155.jpg",
        "broadcast_type": 1,
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_16675590-f284-4014-a90a-68bfc3c8a375&group_id=1000182&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=31178778&parent_id=5&area_id=192&page=1&position=6",
        "cover": "http://i0.hdslb.com/bfs/live/user_cover/819e8f04996e55f97c2776c0e03be3f33ce9de55.jpg",
        "current_qn": 10000,
        "current_quality": 10000,
        "face": "https://i2.hdslb.com/bfs/face/71701dfa5348cad3461ed71c8870d4c0c6b913c1.jpg",
        "group_id": 1000182,
        "head_box": null,
        "is_nft": 0,
        "link": "/31178778",
        "master_url": "",
        "nft_dmark": "https://i0.hdslb.com/bfs/live/9f176ff49d28c50e9c53ec1c3297bd1ee539b3d6.gif",
        "p2p_type": 0,
        "play_url": "https://cn-jxnc-cm-01-18.bilivideo.com/live-bvc/149811/live_3546389667645713_58755750.flv?expires=1725907082&pt=ios&deadline=1725907082&len=0&oi=1879910662&platform=ios&qn=10000&trid=10001ed5f855e466972d14d8cafea466df32&uipk=100&uipv=100&nbs=1&uparams=cdn,deadline,len,oi,platform,qn,trid,uipk,uipv,nbs&cdn=cn-gotcha01&upsig=fb3df4c31b0a3f0ab5b2f15414721fde&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&sid=cn-jxnc-cm-01-18&chash=1&bmt=1&sg=cs&trace=73&isp=cm&rg=East&pv=Zhejiang&score=3&sl=1&p2p_type=8192&deploy_env=prod&suffix=origin&hot_cdn=0&qp=de_0&source=puv3_batch&origin_bitrate=23728&pp=srt&sk=558689aded471021b7465ccc3f484860&vd=nc&zoneid_l=151355395&sid_l=stream_name_cold&src=puv3",
        "play_url_card": "",
        "play_url_h265": "",
        "playurl_infos": [
          {
            "accept_quality": [
              10000,
              250
            ],
            "codec": 0,
            "codec_name": "AVC",
            "current_qn": 10000,
            "current_quality": 10000,
            "playurl": "https://cn-jxnc-cm-01-18.bilivideo.com/live-bvc/149811/live_3546389667645713_58755750.flv?expires=1725907082&pt=ios&deadline=1725907082&len=0&oi=1879910662&platform=ios&qn=10000&trid=10001ed5f855e466972d14d8cafea466df32&uipk=100&uipv=100&nbs=1&uparams=cdn,deadline,len,oi,platform,qn,trid,uipk,uipv,nbs&cdn=cn-gotcha01&upsig=fb3df4c31b0a3f0ab5b2f15414721fde&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&sid=cn-jxnc-cm-01-18&chash=1&bmt=1&sg=cs&trace=73&isp=cm&rg=East&pv=Zhejiang&score=3&sl=1&p2p_type=8192&deploy_env=prod&suffix=origin&hot_cdn=0&qp=de_0&source=puv3_batch&origin_bitrate=23728&pp=srt&sk=558689aded471021b7465ccc3f484860&vd=nc&zoneid_l=151355395&sid_l=stream_name_cold&src=puv3",
            "quality_description": [
              {
                "desc": "原画",
                "qn": 10000
              },
              {
                "desc": "超清",
                "qn": 250
              }
            ]
          }
        ],
        "quality_description": [
          {
            "desc": "原画",
            "qn": 10000
          },
          {
            "desc": "超清",
            "qn": 250
          }
        ],
        "room_id": 31178778,
        "session_id": "1ed5f855e466972d14d8cafea466df32_16675590-f284-4014-a90a-68bfc3c8a375",
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_16675590-f284-4014-a90a-68bfc3c8a375&group_id=1000182&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=31178778&parent_id=5&area_id=192&page=1&position=6",
        "title": "有人吗 看看呗 看看盘",
        "uid": 3546389667645713,
        "uname": "地山谦新派无偿看盘呀",
        "verify": {
          "role": -1,
          "title": ""
        }
      },
      {
        "accept_quality": [
          10000
        ],
        "app_background": "https://i0.hdslb.com/bfs/live/b91b552eb12e1c65833fc802f1a5a28315496155.jpg",
        "broadcast_type": 0,
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_86351fce-b530-412f-9f80-7f97937022ea&group_id=1000182&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=1790898766&parent_id=6&area_id=237&page=1&position=7",
        "cover": "http://i0.hdslb.com/bfs/live/new_room_cover/6b65b84c80f55f594217dbbe23255dc76a65498a.jpg",
        "current_qn": 10000,
        "current_quality": 10000,
        "face": "https://i1.hdslb.com/bfs/face/3295c3fff3fb0fb9f7619ccc5710870dba8af5f8.jpg",
        "group_id": 1000182,
        "head_box": null,
        "is_nft": 0,
        "link": "/1790898766",
        "master_url": "",
        "nft_dmark": "https://i0.hdslb.com/bfs/live/9f176ff49d28c50e9c53ec1c3297bd1ee539b3d6.gif",
        "p2p_type": 0,
        "play_url": "https://cn-jssz-cm-02-05.bilivideo.com/live-bvc/406435/live_269206714_56396002.flv?expires=1725907082&pt=ios&deadline=1725907082&len=0&oi=1879910662&platform=ios&qn=10000&trid=10001ed5f855e466972d14d8cafea466df32&uipk=100&uipv=100&nbs=1&uparams=cdn,deadline,len,oi,platform,qn,trid,uipk,uipv,nbs&cdn=cn-gotcha01&upsig=3f7970ac920407b0c32e3248b6d30c52&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&sid=cn-jssz-cm-02-05&chash=1&bmt=1&sg=cs&trace=73&isp=cm&rg=East&pv=Zhejiang&suffix=origin&p2p_type=8192&sl=1&pp=srt&deploy_env=prod&score=1&origin_bitrate=416152&qp=de_0&source=puv3_batch&sk=36c0256d49d4e48e3d508625e76433e1&hot_cdn=0&vd=nc&zoneid_l=151355395&sid_l=stream_name_cold&src=puv3",
        "play_url_card": "",
        "play_url_h265": "",
        "playurl_infos": [
          {
            "accept_quality": [
              10000
            ],
            "codec": 0,
            "codec_name": "AVC",
            "current_qn": 10000,
            "current_quality": 10000,
            "playurl": "https://cn-jssz-cm-02-05.bilivideo.com/live-bvc/406435/live_269206714_56396002.flv?expires=1725907082&pt=ios&deadline=1725907082&len=0&oi=1879910662&platform=ios&qn=10000&trid=10001ed5f855e466972d14d8cafea466df32&uipk=100&uipv=100&nbs=1&uparams=cdn,deadline,len,oi,platform,qn,trid,uipk,uipv,nbs&cdn=cn-gotcha01&upsig=3f7970ac920407b0c32e3248b6d30c52&site=39b56b598a9adeae78cd77526d9f26ab&free_type=0&mid=291814941&sche=ban&sid=cn-jssz-cm-02-05&chash=1&bmt=1&sg=cs&trace=73&isp=cm&rg=East&pv=Zhejiang&suffix=origin&p2p_type=8192&sl=1&pp=srt&deploy_env=prod&score=1&origin_bitrate=416152&qp=de_0&source=puv3_batch&sk=36c0256d49d4e48e3d508625e76433e1&hot_cdn=0&vd=nc&zoneid_l=151355395&sid_l=stream_name_cold&src=puv3",
            "quality_description": [
              {
                "desc": "原画",
                "qn": 10000
              }
            ]
          }
        ],
        "quality_description": [
          {
            "desc": "原画",
            "qn": 10000
          }
        ],
        "room_id": 1790898766,
        "session_id": "1ed5f855e466972d14d8cafea466df32_86351fce-b530-412f-9f80-7f97937022ea",
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=1ed5f855e466972d14d8cafea466df32_86351fce-b530-412f-9f80-7f97937022ea&group_id=1000182&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=1790898766&parent_id=6&area_id=237&page=1&position=7",
        "title": "星露谷物语:不去姜岛",
        "uid": 269206714,
        "uname": "mm花花花草草草",
        "verify": {
          "role": -1,
          "title": ""
        }
      }
    ],
    "load_trigger": 3,
    "max_trigger_time": 305,
    "min_trigger_time": 300,
    "need_show_guide": 1,
    "room_cache_limit": 50
  },
  "message": "0",
  "ttl": 1
}
 */

// return empty body
$done({ body: "{}" })