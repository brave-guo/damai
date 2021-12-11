// todo swiper
var mySwiper = new Swiper ('.hor', {
    direction: 'horizontal', // 水平切换选项
    // loop: true, // 循环模式选项
    autoplay:true,//自动播放
    slidesPerView : 3,
    freeMode: true,
  })        
  var mySwiper = new Swiper ('.column', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:{
      delay: 800
    },//自动播放
    // slidesPerView : 1,
    speed:200
  })