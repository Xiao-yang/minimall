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
        "upd_time":1516663280,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"https://img14.360buyimg.com/n0/jfs/t1/193410/33/11631/196303/60e3bee2E99d48a18/0a771a666c4f9a06.jpg","goods_price":199,"goods_number":100,"goods_name":"betu百图女装圆领刺绣蕾丝荷叶边娃娃领甜美雪纺衬衫长袖上衣女春秋夏季新品2007T18 米杏白 S","goods_id":57444,"goods_big_logo":"https://img14.360buyimg.com/n0/jfs/t1/193410/33/11631/196303/60e3bee2E99d48a18/0a771a666c4f9a06.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663280
      },
      {
        "upd_time":1516663277,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"https://img14.360buyimg.com/n0/jfs/t1/189925/14/11883/366131/60e3bee3Ee1395a1a/2fa468ed951c3a7a.jpg","goods_price":299,"goods_number":100,"goods_name":" betu百图女装复古方领衬衫女露锁骨短袖雪纺衬衣外穿百搭上衣春夏新品2004T23 黄色 M","goods_id":57442,"goods_big_logo":"https://img14.360buyimg.com/n0/jfs/t1/189925/14/11883/366131/60e3bee3Ee1395a1a/2fa468ed951c3a7a.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663277
      },
      {
        "upd_time":1516663273,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"https://gd3.alicdn.com/imgextra/i3/3316577185/O1CN017QSHF322wmQ2ZQaGU_!!3316577185-0-picasso.jpg","goods_price":399,"goods_number":100,"goods_name":"记忆的起点连衣裙2021夏季新款卡通印花撞色条纹裙子潮65AX82588","goods_id":57441,"goods_big_logo":"https://gd3.alicdn.com/imgextra/i3/3316577185/O1CN017QSHF322wmQ2ZQaGU_!!3316577185-0-picasso.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663273
      },
      {
        "upd_time":1516663269,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"https://gd4.alicdn.com/imgextra/i4/326616593/O1CN01w8mFiE1yZdwgHlDlT_!!326616593.jpg","goods_price":120,"goods_number":100,"goods_name":"家君姐姐 Via Pitti 2021夏 爱心刺绣大口袋绸缎面衬衫短袖女外套","goods_id":57440,"goods_big_logo":"https://gd4.alicdn.com/imgextra/i4/326616593/O1CN01w8mFiE1yZdwgHlDlT_!!326616593.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663269
      },
      {
        "upd_time":1516663265,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"https://img14.360buyimg.com/n0/jfs/t1/172294/23/16309/154118/60d2a596Ed0fbbce6/066467b041b2f757.jpg","goods_price":199,"goods_number":100,"goods_name":"李宁篮球鞋男鞋韦德之道7全城6队尚音速7驭帅11夏季13户外休闲鞋悟道减震碳板高帮运动鞋 韦德之道7-裂变TD纪念款 42内长(265)","goods_id":57439,"goods_big_logo":"https://img14.360buyimg.com/n0/jfs/t1/172294/23/16309/154118/60d2a596Ed0fbbce6/066467b041b2f757.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663265
      },
      {
        "upd_time":1516663261,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"https://img14.360buyimg.com/n0/jfs/t1/188276/2/12253/267386/60e508f2Ea81ad40d/42eee441f0ff326e.jpg","goods_price":222,"goods_number":100,"goods_name":"李宁篮球鞋CJ-迈克勒姆团队款专业实战篮球鞋-“SILENCER”官方旗舰网 标准白-3 42","goods_id":57438,"goods_big_logo":"https://img14.360buyimg.com/n0/jfs/t1/188276/2/12253/267386/60e508f2Ea81ad40d/42eee441f0ff326e.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663261
      },
      {
        "upd_time":1516663258,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"https://img14.360buyimg.com/n0/jfs/t1/173351/8/18527/210966/60e508f0E26b64994/cde032ff2919a5ed.jpg","goods_price":599,"goods_number":100,"goods_name":"李宁篮球鞋男鞋闪击6代premium男子一体织减震支撑中帮篮球专业比赛鞋防滑耐磨运动鞋男鞋官方旗舰网 标准白-3 44","goods_id":57437,"goods_big_logo":"https://img14.360buyimg.com/n0/jfs/t1/173351/8/18527/210966/60e508f0E26b64994/cde032ff2919a5ed.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663258
      },
      {
        "upd_time":1516663255,"is_promote":false,"hot_mumber":0,"goods_weight":100,"goods_small_logo":"https://img14.360buyimg.com/n0/jfs/t1/191292/27/12171/320594/60e509c4E65c52d00/3966471ecd27c01f.jpg","goods_price":799,"goods_number":100,"goods_name":"李宁闪击7篮球鞋男鞋2021春季新品Premium稳定支撑减震回弹耐磨防滑专业比赛鞋官方旗舰网 彤红色/黑色-2 42","goods_id":57436,"goods_big_logo":"https://img14.360buyimg.com/n0/jfs/t1/191292/27/12171/320594/60e509c4E65c52d00/3966471ecd27c01f.jpg","cat_two_id":3,"cat_three_id":9,"cat_one_id":1,"cat_id":9,"add_time":1516663255
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