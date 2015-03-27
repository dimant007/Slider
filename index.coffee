(($) ->

  $.fn.slider = (slider) ->
    slidesNumber = $('.b-slideshow-item').size()
    slideWidth = $('.b-slideshow-item').eq(1).width()
    $('.b-slider-nav li').eq(0).addClass 'active'
    activeSlide = 1
    $('.b-slider-nav li').click ->
      $('.b-slider-nav li').removeClass 'active'
      $(this).addClass 'active'
      clickedSlide = $(this).index() + 1
      $('.b-slideshow-list').animate { left: -slideWidth * (clickedSlide - 1) + 'px' }, 800
      activeSlide = $('.b-slider-nav li.active').index() + 1
      return
    $('.b-slideshow-right').click ->
      if activeSlide < slidesNumber
        $('.b-slideshow-list').animate { left: '-=0' + slideWidth + 'px' }, 800
        activeSlide++
        $('.b-slider-nav li').removeClass 'active'
        $('.b-slider-nav li').eq(activeSlide - 1).addClass 'active'
      else
        $('.b-slideshow-list').animate { left: '0px' }, 800
        $('.b-slider-nav li').removeClass 'active'
        $('.b-slider-nav li').eq(0).addClass 'active'
        activeSlide = $('.b-slider-nav li.active').index() + 1
      return
    $('.b-slideshow-left').click ->
      if activeSlide > 1
        $('.b-slideshow-list').animate { left: '+=0' + slideWidth + 'px' }, 800
        activeSlide--
        $('.b-slider-nav li').removeClass 'active'
        $('.b-slider-nav li').eq(activeSlide - 1).addClass 'active'
      else
        $('.b-slideshow-list').animate { left: -slideWidth * (slidesNumber - 1) + 'px' }, 800
        $('.b-slider-nav li').removeClass 'active'
        $('.b-slider-nav li').eq(-1).addClass 'active'
        activeSlide = $('.b-slider-nav li.active').index() + 1
      return
    setInterval (->
      if activeSlide < slidesNumber
        $('.b-slideshow-list').animate { left: '-=0' + slideWidth + 'px' }, 800
        activeSlide++
        $('.b-slider-nav li').removeClass 'active'
        $('.b-slider-nav li').eq(activeSlide - 1).addClass 'active'
      else
        $('.b-slideshow-list').animate { left: '0px' }, 800
        $('.b-slider-nav li').removeClass 'active'
        $('.b-slider-nav li').eq(0).addClass 'active'
        activeSlide = $('.b-slider-nav li.active').index() + 1
      return
    ), 8000
    return

  return
) jQuery