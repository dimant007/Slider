/**
 * Created by ditry_000 on 27.03.2015.
 */
(function($){

    $.fn.slider = function (slider) {

    var slidesNumber = $(".b-slideshow-item").size();
    var slideWidth = $(".b-slideshow-item").eq(1).width();

    $(".b-slider-nav li").eq(0).addClass("active");
    var activeSlide = 1;

    $(".b-slider-nav li").click(function(){
        $(".b-slider-nav li").removeClass("active");
        $(this).addClass("active");
        var clickedSlide = $(this).index()+1;
        $(".b-slideshow-list").animate({
            left: -slideWidth*(clickedSlide-1)+"px"
        }, 800);
        activeSlide = $(".b-slider-nav li.active").index()+1;
    });


    $(".b-slideshow-right").click(function(){
        if(activeSlide<slidesNumber){
            $(".b-slideshow-list").animate({
                left: "-=0"+slideWidth+"px"
            }, 800);
            activeSlide++;
            $(".b-slider-nav li").removeClass("active");
            $(".b-slider-nav li").eq(activeSlide-1).addClass("active");
        }
        else {
            $(".b-slideshow-list").animate({
                left: "0px"
            }, 800);
            $(".b-slider-nav li").removeClass("active");
            $(".b-slider-nav li").eq(0).addClass("active");
            activeSlide = $(".b-slider-nav li.active").index()+1;
        }
    });

    $(".b-slideshow-left").click(function(){
        if(activeSlide>1){
            $(".b-slideshow-list").animate({
                left: "+=0"+slideWidth+"px"
            }, 800);
            activeSlide--;
            $(".b-slider-nav li").removeClass("active");
            $(".b-slider-nav li").eq(activeSlide-1).addClass("active");
        }
        else {
            $(".b-slideshow-list").animate({
                left: -slideWidth*(slidesNumber-1)+"px"
            }, 800);
            $(".b-slider-nav li").removeClass("active");
            $(".b-slider-nav li").eq(-1).addClass("active");
            activeSlide = $(".b-slider-nav li.active").index()+1;
        }
    });

        setInterval(function () {
            if(activeSlide<slidesNumber){
            $(".b-slideshow-list").animate({
                left: "-=0"+slideWidth+"px"
            }, 800);
            activeSlide++;
            $(".b-slider-nav li").removeClass("active");
            $(".b-slider-nav li").eq(activeSlide-1).addClass("active");
        }
            else {
                $(".b-slideshow-list").animate({
                    left: "0px"
                }, 800);
                $(".b-slider-nav li").removeClass("active");
                $(".b-slider-nav li").eq(0).addClass("active");
                activeSlide = $(".b-slider-nav li.active").index()+1;
            }
        }, 8000);
    };

})(jQuery);