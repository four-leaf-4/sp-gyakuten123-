$(function(){
  $('a[href^="#"]').on('click',function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function() {
  var topBtnfade = $(".totopbtn_fade");
    topBtnfade.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            topBtnfade.fadeIn("1500",function(){
            $(this).addClass('translate');
        });
        } else {
            topBtnfade.fadeOut("1500");
        }
    });
});

$(function(){
	const scroll_area = $("div.scroll_area");
	$('#btn_right').on('click',function(){
		scroll_area.animate( { scrollLeft: '+=200' },500);
		});
	$('#btn_left').on('click',function(){
		scroll_area.animate( { scrollLeft: '-=200' },500);
		});
	});