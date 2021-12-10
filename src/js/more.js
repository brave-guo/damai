// var y = document.querySelector('.more_title');
let more = new Vue({
    el: '#more',
    data: {
        price: ['380', '380', '80', '180', '108', '480'],
        bool: false,
        title_p: ['重塑雕像的权利【喝彩之后】2021广州专场', '五条人“大时代歌厅”巡回演唱会·广州站', 'X玖少年团 赵磊「第一次」巡演上海站', '音乐剧《阿加莎》中文版', '【真迹展】遇见古埃及 黄金木乃伊', '王晰“图景”新年音乐会'],
        time: ['2021.12.31 周五 19:50', '2021.12.25 周六 19:50', '2021.12.24 周五 19:30', '2021.12.22-2022.01.16', '2021.12.28-2022.04.20', '2022.01.01 周六 19:30'],
        address: ['广州 | 广州体育馆', '广州 | 广州体育馆', '上海 | 上海保利大剧院-大剧场', '上海 | 中国大戏院', '上海 | 遇见博物馆(上海静安馆)', '苏州 | 苏州独墅湖影剧院'],
        pic_url: ['../assets/lb1.jpg', '../assets/lb2.jpg', '../assets/lb3.jpg', '../assets/lb4.jpg', '../assets/lb5.jpg', '../assets/lb6.jpg'],
        isFixed:false,
        searchBarFixed:false
    },
    methods: {
        // let more_title =document.querySelector('more_title')
        handleScroll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            var offsetTop = document.querySelector('.more_title').offsetTop;
            // var y = document.querySelector('.more_title');
            // console.log(document.querySelector('.more_title').screenY);
            // console.log(y);
            if (scrollTop > 450) {
                this.searchBarFixed = true;
                this.isFixed=true
            } else {
                this.searchBarFixed = false;
                this.isFixed=false
            }
        },
        go_buy(){
            window.location="../html/buy.html";
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    }
})