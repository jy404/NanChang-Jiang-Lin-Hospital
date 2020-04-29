var WapTeam = new Swiper('.f-wap-team_ban', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.f-wap-team_next',
        prevEl: '.f-wap-team_prev',
    },
 });
$(".f-wap-side_btn").on('click',function(){$(this).fadeOut();$(".m-wap-side").fadeIn().focus();})
$(".m-wap-side>div").each(function(i) {
    $(this).on("click", () => {
    	$(".m-wap-side").fadeOut();
    	$(".f-wap-side_btn").fadeIn();
        site(WapSiteArr[i]);
    })
})
var WapBanner = new Swiper('.wap-banner', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
 });
$(".m-wap-side").on("blur",function(){$(this).fadeOut();$(".f-wap-side_btn").fadeIn()})

var WapTeam = new Swiper('.wap-list_right', {
	init: false,
  	navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
    $('.list-wrap>li').each(function(i) {
 	 	$(this).on('click',()=>{$(".wap-warp").fadeIn();WapTeam.init();WapTeam.slideTo(i, 0, false)})
 	})
	$('video').each(function(i){
		$(this).removeAttr('controls');
    	$(this).on("click",function(){
    		$(this).parent().addClass("z-video-cl");
    		$(this).prop('controls','controls').attr('tabindex','1').focus();
    	})
    	$(this).on('blur',function(){
    		$(this).parent().removeClass("z-video-cl");
    		$(this).removeAttr('controls');
    		this.pause();
    	})
	})
}else{

}

$(".f-close-btn").on('click',()=>{$(".wap-warp").fadeOut()})

$(".f-al-wechar").each(function(i){$(this).on('click',function(){
	$(".al-wechar").fadeIn();
	$(".al-wechar").find("img").prop("src",`images/wap-wx-${i+1}.png`)
	$(".al-wechar").find("span").text($(this).find('span').text())
	$(".al-wechar>div").focus();
})})
$(".al-wechar>div").on("blur",()=>{$(".al-wechar").fadeOut()})
