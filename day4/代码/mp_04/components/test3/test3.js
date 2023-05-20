// components/test3/test3.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  options:{
    // 指定所有_开头的数据字段为纯数据字段
    pureDataPattern:/^_/
  },
  /**
   * 组件的初始数据
   */
  data: {
    // rgb这个字段不会在页面中展示 也不会传递给其他组件，仅仅在当前组件内部使用。
    // 带有这种特性的data字段适合被设置为纯数据字段 
    // 好处：纯数据字段 有助于提升页面更新的性能 不会将它设置为响应式数据
    a:true,//普通数据字段
    // _b以_开头 将其设置为纯数据字段
    _b:true,//纯数据字段
    _rgb:{
      r:0,
      g:0,
      b:0
    },
    fullColor:'0,0,0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 生成随机RGB颜色的方法。非事件处理函数建议_开头
    _randomColor(){
      this.setData({
        // 为data里面的_rgb纯数据字段重新赋值
        _rgb:{
          r:Math.floor(Math.random()*256),
          g:Math.floor(Math.random()*256),
          b:Math.floor(Math.random()*256),
        }
      })
    },
    changeR(){
      this.setData({
        '_rgb.r':this.data._rgb.r + 5 > 255 ? 255:this.data._rgb.r +5
      })
    },
    changeG(){
      this.setData({
        '_rgb.g':this.data._rgb.g + 5 > 255 ? 255:this.data._rgb.g +5
      })
    },
    changeB(){
      this.setData({
        '_rgb.b':this.data._rgb.b + 5 > 255 ? 255:this.data._rgb.b +5
      })
    }
  },
  // 一种方式在js文件中 和data平级 直接创建生命周期函数

  // 1.created 组件实例刚被创建好的时候，
  // 此时还不能调用setData
  // 通常在这个函数中，只应该用于给组件的this添加一些自定义的属性字段
  created(){
    console.log('created');
  },
  // 在组件完全初始化完毕、进入页面节点树后、attached函数会被触发
  // 此时，this.data已被初始化完毕
  // 这个生命周期很有用 绝大多数初始化工作可以在这里进行（发请求获取初始数据）
  attached(){
    console.log('attached');
  },
  // 在组件离开页面节点树后，detached会被触发
  // 退出一个页面时，会触发页面内每个自定义组件的detached生命周期函数
  // 此时适合做一些清理的工作
  detached(){
    
  },
    // 新的方式是 创建一个lifetimes对象 生命周期函数全部放这里
    // 推荐的方法 优先级最高
    lifetimes:{
      created(){
        console.log('我先来1');
      },
      //在组件实例进入页面节点树时执行
      attached(){
        console.log('我先来2');
      },
      detached(){},//在组件实例被页面节点树删除时执行
    },
    // 页面生命周期函数 三个
    pageLifetimes:{
      show(){
        // 当页面一展示的时候 就调用一次_randomColor函数 使其获取一次随机颜色
        this._randomColor();
        console.log('show');
      },
      hide(){
        console.log('hide');
      },
      resize(){
        console.log('resize');
      },
    },

  observers:{
      //监听rgb对象上r,g,b三个子属性的变化
      // '_rgb.r,_rgb.g,_rgb.b':function(r,g,b){
      //   // 监听n1和n2数据的变化
      //   this.setData({ 
      //     fullColor : `${r},${g},${b}`
      //   })
      // }

      //此时 如果对象中需要被监听的属性太多，就可以使用通配符**来监听对象中所有属性的变化 
      '_rgb.**':function(obj){
        // 监听n1和n2数据的变化
        this.setData({ 
          fullColor : `${obj.r},${obj.g},${obj.b}`
        })
      }
  }
})
