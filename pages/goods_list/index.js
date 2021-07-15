// pages/goods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: "综合",
        isActive: true
      },
      {
        id: 1,
        value: "销量",
        isActive: false
      },
      {
        id: 2,
        value: "价格",
        isActive: false
      }
    ],
    goods:[
      
      {
        "upd_time":1516663280,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg","goods_price":3499,"goods_number":100,"goods_name":"创维（Skyworth）42X6 42英寸10核智能酷开网络平板液晶电视（黑色）","goods_id":57444,"goods_big_logo":"http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663280
      },
      {
        "upd_time":1516663277,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000601395527_1_400x400.jpg","goods_price":2999,"goods_number":100,"goods_name":"创维彩电40G6A","goods_id":57442,"goods_big_logo":"http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000601395527_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663277
      },
      {
        "upd_time":1516663273,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000168415104_1_400x400.jpg","goods_price":9699,"goods_number":100,"goods_name":"创维(Skyworth) G7 4K超高清彩电HDR 智能网络液晶平板电视(玫瑰金) 65G7 (65英寸)","goods_id":57441,"goods_big_logo":"http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000168415104_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663273
      },
      {
        "upd_time":1516663269,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000632066713_1_400x400.jpg","goods_price":4699,"goods_number":100,"goods_name":"创维彩电55G3","goods_id":57440,"goods_big_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000632066713_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663269
      },
      {
        "upd_time":1516663265,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000611474169_1_400x400.jpg","goods_price":4999,"goods_number":100,"goods_name":"创维电视55G720S 55英寸4色4K 23核智能彩电网络液晶平板电视","goods_id":57439,"goods_big_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000611474169_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663265
      },
      {
        "upd_time":1516663261,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000185518945_2_400x400.jpg","goods_price":3999,"goods_number":100,"goods_name":"创维（Skyworth）55H9A 55英寸超薄 全面屏 4K超高清智能电视(黑色)","goods_id":57438,"goods_big_logo":"http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000185518945_2_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663261
      },
      {
        "upd_time":1516663258,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image3.suning.cn/uimg/b2c/newcatentries/0070078057-000000000136928577_1_400x400.jpg","goods_price":3099,"goods_number":100,"goods_name":"创维（Skyworth）55V6 55英寸 4色4K超高清 18核 智能网络液晶电视 银色","goods_id":57437,"goods_big_logo":"http://image3.suning.cn/uimg/b2c/newcatentries/0070078057-000000000136928577_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663258
      },
      {
        "upd_time":1516663255,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image4.suning.cn/uimg/b2c/newcatentries/0070078057-000000000751129836_1_400x400.jpg","goods_price":2399,"goods_number":100,"goods_name":"创维(Skyworth) 43M9 43英寸 4K超高清智能网络LED液晶平板电视","goods_id":57436,"goods_big_logo":"http://image4.suning.cn/uimg/b2c/newcatentries/0070078057-000000000751129836_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663255
      }
    ]
  },

  // 绑定标题点击事件,从子组件传递过来
  handleTabsItemChange(e){
    // 获取被点击事件索引
    const {index} = e.detail;
    // 修改原数组
    let {tabs} = this.data
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    //赋值到data中
    this.setData({
      tabs
    })
   },
  //  下拉刷新功能
   onPullDownRefresh(){
     this.setData({
       goods:[]
     })
     this.setData({
      goods:[
      
        {
          "upd_time":1516663280,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg","goods_price":1899,"goods_number":100,"goods_name":"创维（Skyworth）42X6 42英寸10核智能酷开网络平板液晶电视（黑色）","goods_id":57444,"goods_big_logo":"http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663280
        },
        {
          "upd_time":1516663277,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000601395527_1_400x400.jpg","goods_price":2999,"goods_number":100,"goods_name":"创维彩电40G6A","goods_id":57442,"goods_big_logo":"http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000601395527_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663277
        },
        {
          "upd_time":1516663273,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000168415104_1_400x400.jpg","goods_price":9699,"goods_number":100,"goods_name":"创维(Skyworth) G7 4K超高清彩电HDR 智能网络液晶平板电视(玫瑰金) 65G7 (65英寸)","goods_id":57441,"goods_big_logo":"http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000168415104_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663273
        },
        {
          "upd_time":1516663269,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000632066713_1_400x400.jpg","goods_price":4699,"goods_number":100,"goods_name":"创维彩电55G3","goods_id":57440,"goods_big_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000632066713_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663269
        },
        {
          "upd_time":1516663265,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000611474169_1_400x400.jpg","goods_price":4999,"goods_number":100,"goods_name":"创维电视55G720S 55英寸4色4K 23核智能彩电网络液晶平板电视","goods_id":57439,"goods_big_logo":"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000611474169_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663265
        },
        {
          "upd_time":1516663261,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000185518945_2_400x400.jpg","goods_price":3999,"goods_number":100,"goods_name":"创维（Skyworth）55H9A 55英寸超薄 全面屏 4K超高清智能电视(黑色)","goods_id":57438,"goods_big_logo":"http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000185518945_2_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663261
        },
        {
          "upd_time":1516663258,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image3.suning.cn/uimg/b2c/newcatentries/0070078057-000000000136928577_1_400x400.jpg","goods_price":3099,"goods_number":100,"goods_name":"创维（Skyworth）55V6 55英寸 4色4K超高清 18核 智能网络液晶电视 银色","goods_id":57437,"goods_big_logo":"http://image3.suning.cn/uimg/b2c/newcatentries/0070078057-000000000136928577_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663258
        },
        {
          "upd_time":1516663255,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"http://image4.suning.cn/uimg/b2c/newcatentries/0070078057-000000000751129836_1_400x400.jpg","goods_price":2399,"goods_number":100,"goods_name":"创维(Skyworth) 43M9 43英寸 4K超高清智能网络LED液晶平板电视","goods_id":57436,"goods_big_logo":"http://image4.suning.cn/uimg/b2c/newcatentries/0070078057-000000000751129836_1_800x800.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663255
        }
      ]
     })
   }

})