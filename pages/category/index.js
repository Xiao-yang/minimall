// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      "message": [
        {
          "cat_id": 0,
          "cat_name": "大家电",
          "cat_pid": 0,
          "cat_level": 0,
          "cat_deleted": false,
          "cat_icon": "",
          
        },
        {
          "cat_pid":0,
          "cat_name":"生活电器",
          "cat_level":0,"cat_id":1,
          "cat_icon":"/full/none.jpg",
          "cat_deleted":false
        },
        {
          "cat_pid":0,
          "cat_name":"热门推荐",
          "cat_level":0,"cat_id":2,
          "cat_icon":"/full/none.jpg",
          "cat_deleted":false
        },
        {
          "cat_pid":0,
          "cat_name":"手机相机",
          "cat_level":0,"cat_id":3,
          "cat_icon":"/full/none.jpg",
          "cat_deleted":false
        },
        {
          "cat_pid":0,
          "cat_name":"厨卫电器",
          "cat_level":0,"cat_id":4,
          "cat_icon":"/full/none.jpg",
          "cat_deleted":false
        },
        {
          "cat_pid":0,
          "cat_name":"食品酒水",
          "cat_level":0,"cat_id":5,
          "cat_icon":"/full/none.jpg",
          "cat_deleted":false
        },
        {
          "cat_pid":0,
          "cat_name":"烹饪厨具",
          "cat_level":0,"cat_id":6,
          "cat_icon":"/full/none.jpg",
          "cat_deleted":false 
        },
        {
          "cat_pid":0,
          "cat_name":"生活电器",
          "cat_level":0,"cat_id":7,
          "cat_icon":"/full/none.jpg",
          "cat_deleted":false
        },
        {
          "cat_pid":0,
          "cat_name":"居家生活",
          "cat_level":0,"cat_id":8,
          "cat_icon":"/full/none.jpg",
          "cat_deleted":false
        },
       
      ],
          // 大家电
          "children": [
            // 电视
            {
              "cat_id": 3,
              "cat_name": "电视",
              "cat_pid": 1,
              "cat_level": 1,
              "cat_deleted": false,
              "cat_icon": "",
              "children": [
                {
                  "cat_id": 5,
                  "cat_name": "曲面电视",
                  "cat_pid": 3,
                  "cat_level": 2,
                  "cat_deleted": false,
                  "cat_icon": "https://api-hmugo-web.itheima.net/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg"
                },
                {
                              "cat_pid":3,"cat_name":"海信","cat_level":2,"cat_id":6,"cat_icon":"https://api-hmugo-web.itheima.net/full/5e38cf9e6e7c46a17fe1c597a883ae627977b296.jpg","cat_deleted":false
                            },
                            {
                              "cat_pid":3,"cat_name":"夏普","cat_level":2,"cat_id":8,"cat_icon":"https://api-hmugo-web.itheima.net/full/cece39bd7e9654c20043e4af71696e1f838d4a22.jpg","cat_deleted":false
                            },
                            {
                              "cat_pid":3,"cat_name":"创维","cat_level":2,"cat_id":9,"cat_icon":"https://api-hmugo-web.itheima.net/full/f62eba98423af3311487f3331c6798d8f099c893.jpg","cat_deleted":false
                            },
                            {
                              "cat_pid":3,"cat_name":"TCL","cat_level":2,"cat_id":10,"cat_icon":"https://api-hmugo-web.itheima.net/full/86832cc37db8474ac07853c835009f9873eaec89.jpg","cat_deleted":false
                            },
                            {
                              "cat_pid":3,"cat_name":"PPTV","cat_level":2,"cat_id":11,"cat_icon":"https://api-hmugo-web.itheima.net/full/41c169f14680b3ebf88b4a37ea09085ed731c985.jpg","cat_deleted":false
                            }
              ]
            },
            // 空调
            {
              "cat_id": 21,
              "cat_name": "空调",
              "cat_pid": 12,
              "cat_level": 42,
              "cat_deleted": false,
              "cat_icon": "",
              "children": [
                {
                              "cat_pid":7,"cat_name":"变频空调","cat_level":2,"cat_id":23,"cat_icon":"https://api-hmugo-web.itheima.net/full/994977fac8f4fa6cea5eb413cd64ddac24a97600.jpg","cat_deleted":false
                            },
                            {
                              "cat_pid":7,"cat_name":"立柜空调","cat_level":2,"cat_id":24,"cat_icon":"https://api-hmugo-web.itheima.net/full/19fc040b41b4c821c16748529545265f5feb34fa.jpg","cat_deleted":false
                            },
                            {
                              "cat_pid":7,"cat_name":"挂壁空调","cat_level":2,"cat_id":25,"cat_icon":"https://api-hmugo-web.itheima.net/full/7f3dfec1efdb2559d7fba1ea39d901f4763fae21.jpg","cat_deleted":false
                            }
              ]
            },
            // 洗衣机
            {
              "cat_id": 121,
              "cat_name": "洗衣机",
              "cat_pid": 42,
              "cat_level": 54,
              "cat_deleted": false,
              "cat_icon": "",
              "children": [
                {
                              "cat_pid":30,"cat_name":"洗衣机","cat_level":2,"cat_id":42,"cat_icon":"https://api-hmugo-web.itheima.net/full/d33bc76faf761d86692f6b79dbd5bdb007a6c060.jpg","cat_deleted":false
                            },
                            {
                              "cat_pid":30,"cat_name":"滚筒洗衣机","cat_level":2,"cat_id":43,"cat_icon":"https://api-hmugo-web.itheima.net/full/4f083927b8062beb2e2a8e5fbcb956e07231e644.jpg","cat_deleted":false
                            },
                            {
                              "cat_pid":30,"cat_name":"波轮洗衣机","cat_level":2,"cat_id":44,"cat_icon":"https://api-hmugo-web.itheima.net/full/2333a004401004514d43fc56bf3a08de3d6dee44.jpg","cat_deleted":false
                            }
              ]
            },
            //冰箱
            {
              "cat_id": 65,
              "cat_name": "冰箱",
              "cat_pid": 7,
              "cat_level": 45,
              "cat_deleted": false,
              "cat_icon": "",
              "children": [
                {
                              "cat_pid":53,"cat_name":"对开门冰箱","cat_level":2,"cat_id":57,"cat_icon":"https://api-hmugo-web.itheima.net/full/4b6bfa1646ca0beeb0acda07f77149bc1e3e7185.jpg","cat_deleted":false
                            },
                            {
                              "cat_pid":53,"cat_name":"多门冰箱","cat_level":2,"cat_id":58,"cat_icon":"https://api-hmugo-web.itheima.net/full/51a4c3435e9445093fc172b65309089e6f8b2262.jpg","cat_deleted":false
                            },
                            {
                              "cat_pid":53,"cat_name":"三门冰箱","cat_level":2,"cat_id":59,"cat_icon":"https://api-hmugo-web.itheima.net/full/9b4ef20a87083e32b189c49417c55d1e6d297c9a.jpg","cat_deleted":false
                            }
              ]
            },
              // 电脑
            {
              "cat_pid":266,
              "cat_name":"电脑整机",
              "cat_level":1,"cat_id":281,
              "cat_icon":"/full/none.jpg",
              "cat_deleted":false,
              "children": [
                {
                                                          "cat_pid":281,"cat_name":"轻薄本","cat_level":2,"cat_id":283,"cat_icon":"https://api-hmugo-web.itheima.net/full/7097160f74842e8640660218a051ec5efdbf3dd9.jpg","cat_deleted":false
                                                        },
                                                        {
                                                          "cat_pid":281,"cat_name":"平板电脑","cat_level":2,"cat_id":284,"cat_icon":"https://api-hmugo-web.itheima.net/full/d2a821ebd29bad4bf687dc84cc6e092a1792c66f.jpg","cat_deleted":false
                                                        },
                                                        {
                                                          "cat_pid":281,"cat_name":"台式机","cat_level":2,"cat_id":285,"cat_icon":"https://api-hmugo-web.itheima.net/full/983bd8d8d8370e33e324f59f217e06d9e3e8adef.jpg","cat_deleted":false
                                                        }
            
          ],
            },
               // 电脑外设
            {
              "cat_pid":266,
              "cat_name":"电脑外设",
              "cat_level":1,"cat_id":290,
              "cat_icon":"/full/none.jpg",
              "cat_deleted":false,
              "children": [
                {
                                                              "cat_pid":290,"cat_name":"鼠标","cat_level":2,"cat_id":293,"cat_icon":"https://api-hmugo-web.itheima.net/full/24fbb82fa40cf47451b5fd3218805e234434f4c5.jpg","cat_deleted":false
                                                            },
                                                            {
                                                              "cat_pid":290,"cat_name":"键盘","cat_level":2,"cat_id":294,"cat_icon":"https://api-hmugo-web.itheima.net/full/ebb03e4c4b7ad3a60a49a2f65514ec33b1fd0870.jpg","cat_deleted":false
                                                            },
                                                            {
                                                              "cat_pid":290,"cat_name":"键鼠套装","cat_level":2,"cat_id":295,"cat_icon":"https://api-hmugo-web.itheima.net/full/ef56c29bddd48beeb07e21e33457726b2436948b.jpg","cat_deleted":false
                                                            }
          ]
          
      
            },
               // DIY硬件
            {
              "cat_pid":266,
              "cat_name":"DIY硬件",
              "cat_level":1,"cat_id":291,
              "cat_icon":"/full/none.jpg",
              "cat_deleted":false,
              "children": [
                {
                                                                  "cat_pid":291,"cat_name":"显示器","cat_level":2,"cat_id":299,"cat_icon":"https://api-hmugo-web.itheima.net/full/6227510f6ac6f3b8d3a41d5d66c347240f5439a0.jpg","cat_deleted":false
                                                                },
                                                                {
                                                                  "cat_pid":291,"cat_name":"CPU","cat_level":2,"cat_id":300,"cat_icon":"https://api-hmugo-web.itheima.net/full/9a903c9d3d95c41e0051bd94377db1e1e60a23a8.jpg","cat_deleted":false
                                                                },
                                                                {
                                                                  "cat_pid":291,"cat_name":"显卡","cat_level":2,"cat_id":303,"cat_icon":"https://api-hmugo-web.itheima.net/full/f1c57339501b81934d68e6a37b2ae4ddb1542cbe.jpg","cat_deleted":false
                                                                }
          ]
            },
          ]
        },
  // 给左侧菜单绑定点击事件
    handleItemTap(e) {
      const {index} = e.currentTarget.dataset;
      // let children = this.message[index].children;

      this.setData({
        currentTarget:index,
        // children
      })
      console.log(e);
  }

  
})