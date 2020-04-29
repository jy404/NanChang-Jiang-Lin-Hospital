var banner = new Swiper('.g-banner', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.f-ban_next',
        prevEl: '.f-ban_prev',
    },
 });
 var team = new Swiper('.m-team_ban', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.f-team_btn',
        clickable: true,
    },
 });
 $('.list-wrap>li').each(function(i) {
    $(this).on("click", function() {
        $('.list-wrap>li').each(function(i) {
            $(this).find('img').prop('src', `images/list-${i + 1}.png`)
            $(this).find('span').css('color', '#fff');
        })
        $(".list_right").fadeIn();
        $(".list_right").find('img').prop('src', `images/list-rg-${i + 1}.png`);
        $(this).find('img').prop('src', `images/list-active-${i + 1}.png`);
        $(this).find('span').css('color', '#10e472');
    })
 });
 // 百度地图API功能
 var map = new BMap.Map("map"); // 创建Map实例
 var point = new BMap.Point(116.0115810000, 28.6799960000)
 map.centerAndZoom(point, 17); // 初始化地图,设置中心点坐标和地图级别
 var marker = new BMap.Marker(point);
 map.addOverlay(marker);
 //添加地图类型控件
 map.addControl(new BMap.MapTypeControl({
    mapTypes: [
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
    ]
 }));
 map.setCurrentCity("南昌"); // 设置地图显示的城市 此项是必须设置的
 map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

 var SiteArr = [$('.g-intro').offset().top, $('.g-team').offset().top, $('.g-ques').offset().top, $('.g-con').offset().top];
 SiteArr = SiteArr.map(currentValue => currentValue = currentValue - 86)
 WapSiteArr = SiteArr.map(currentValue => currentValue = currentValue + 86 - 44)
 $('.g-ret').on("click", () => {
    site(0)
 })
 $(".m-head_nav>li").each(function(i) {
    $(this).on("click", () => {
        site(SiteArr[i])
    })
 })

 function site(site) {
    $('html , body').animate({
        scrollTop: site
    }, 'slow');
 }
 $(window).scroll(() => {
    let _tap = $(window).scrollTop();
    if ($(".g-intro").offset().top < _tap) {
        $('.m-side').css({
            left: "0px"
        });
    } else if ($(".g-intro").offset().top >= _tap) {
        $('.m-side').css({
            left: "-200px"
        });
    }
    if ($(".g-team").offset().top < _tap) {
        $('.g-ret').fadeIn()
    }else{
        $('.g-ret').fadeOut()
    }
 })

$('video').each(function(i){
    $(this).on("click",function(){
        if($(this).get(0).paused){
            this.play()
        }else{
            this.pause()
        }
    })
})