import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data: {
    "message": {
      "goods_id": 8888,
      "cat_id": 1085,
      "goods_name": "创维（Skyworth）42X6 42英寸10核智能酷开网络平板液晶电视（黑色）",
      "goods_price": 3499,
      "goods_number": 100,
      "goods_weight": 100,
      "goods_introduce": "富文本内容",
      "goods_state": 2,
      "is_del": "0",
      "add_time": 1516361489,
      "upd_time": 1516361489,
      "delete_time": null,
      "hot_mumber": 0,
      "is_promote": false,
      "cat_one_id": 995,
      "cat_two_id": 1075,
      "cat_three_id": 1085,
      "goods_cat": "995,1075,1085",
      "pics": [
          {
              "pics_id": 38711,
              "goods_id": 8888,
              "pics_mid": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg",
          },
          {
            "pics_id": 38712,
            "goods_id": 8888,
            "pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000601395527_1_400x400.jpg",
        },
        {
          "pics_id": 38713,
          "goods_id": 8888,
          "pics_mid": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000168415104_1_400x400.jpg",
      }
      ]
  },
  goodsObj: {},
  },
 // 商品对象
 GoodsInfo: {
  "goods_id": 8888,
  "cat_id": 1085,
  "goods_name": "创维（Skyworth）42X6 42英寸10核智能酷开网络平板液晶电视（黑色）",
  "goods_price": 3499,
  "goods_small_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg",
  "goods_number": 100,
  "goods_weight": 100,
  "goods_introduce": "富文本内容",
  "goods_state": 2,
  "is_del": "0",
  "add_time": 1516361489,
  "upd_time": 1516361489,
  "delete_time": null,
  "hot_mumber": 0,
  "is_promote": false,
  "cat_one_id": 995,
  "cat_two_id": 1075,
  "cat_three_id": 1085,
  "goods_cat": "995,1075,1085",
  "pics": [
      {
          "pics_id": 38711,
          "goods_id": 8888,
          "pics_mid": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg",
      },
      {
        "pics_id": 38712,
        "goods_id": 8888,
        "pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000601395527_1_400x400.jpg",
    },
    {
      "pics_id": 38713,
      "goods_id": 8888,
      "pics_mid": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000168415104_1_400x400.jpg",
  }
  ]
},
 
 onShow: function () {
   let pages = getCurrentPages();
   let currentPage = pages[pages.length - 1];
   let options = currentPage.options;
 },
 // 点击 加入购物车
 handleCartAdd() {
   // 1 获取缓存中的购物车 数组
   let cart = wx.getStorageSync("cart") || [];
   // 2 判断 商品对象是否存在于购物车数组中
   let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id);
   if (index === -1) {
     //3  不存在 第一次添加
     this.GoodsInfo.num = 1;
     this.GoodsInfo.checked = true;
     cart.push(this.GoodsInfo);
   } else {
     // 4 已经存在购物车数据 执行 num++
     cart[index].num++;
   }
   // 5 把购物车重新添加回缓存中
   wx.setStorageSync("cart", cart);
   // 6 弹窗提示
   wx.showToast({
     title: '加入成功',
     icon: 'success',
     // true 防止用户 手抖 疯狂点击按钮 
     mask: true
   });



 },
 
})