var date = new Date();
var day = date.getDay();
var week = ['周日','周一','周二','周三','周四','周五','周六']

let app = new Vue({
    el: '#app',
    data: {
        zhou: ['今天', '明天', week[`${(day + 2) % 7}`], week[`${(day + 3) % 7}`], week[`${(day + 4) % 7}`],week[`${(day + 5) % 7}`], week[`${(day + 6) % 7}`]],
        bool: false,
        num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        title_p: ['开心麻花2021情怀年底大戏《七平米》', '开心麻花五星爆笑大戏《瞎画艺术家》', '开心麻花爆笑舞台剧《莎士比亚别生气》', '西湖脱口秀周末喜剧之夜【大笑喜剧】爆笑专场', '【早鸟特惠八五折】威尼斯电影节沉浸式VR体验《纸鹤》中文版首映', '【双十二秒杀】280元抢开心麻花2021爆笑年底大戏《危险而甜蜜》', '周末脱口秀江汉喜剧之夜【大笑喜剧】爆笑专场', '国家大剧院BDA青年舞团成立一周年 北京舞蹈学院“为人民而舞”百年百部舞蹈作品专场', '开心麻花爆笑舞台剧《贼想得到你》', '【年底特惠99元】幕布脱口秀|每周精品秀/开放麦'],
        pic_url: ['../assets/bo1.jpg', '../assets/bo2.jpg', '../assets/bo3.jpg', '../assets/bo4.jpg', '../assets/bo5.jpg', '../assets/bo6.jpg', '../assets/bo7.jpg', '../assets/bo8.jpg', '../assets/bo9.jpg', '../assets/bo10.jpg'],
        price: ['80', '80', '80', '60', '148', '9', '60', '80', '80', '49']
    },
    methods: {
        
    }
})
