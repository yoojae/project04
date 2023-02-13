$(function() {

  let slideIndexS = 0,
      sliding = false;

  $('#fullpage').fullpage({
    anchors: ['page00', 'page01', 'page02', 'page03', 'page04'],
    menu: '#menu',
    css3: true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    normalScrollElements: '.page03 .xd, .page03 .left .swiper-container',

    afterLoad: function(origin, destination, direction) {

      if(destination.anchor == 'page00') {
        $('.page00').css('cursor','default')
      }

      if(destination.anchor == 'page01') {

        $('.p1').animate({
          top: '0'
        },600);
        $('.p2').animate({
          top: '0'
        },600);

        $('.p3').animate({
          left: '0',
          opacity: '1'
        },700)

        $('.p4').fadeIn(700)
        $('.p5').fadeIn(700)
        $('.p6').fadeIn(700)

        $('.page01 .left>img').animate({
          marginTop: '25px',
          opacity: '1'
        }, 300).animate ({
          marginTop: '30px'
        }, 300);


        $('.page01 .bubble01').stop().animate({
          marginTop: '-4px',
          opacity: '1'
        },300).animate({
          marginTop: '0'
        },300);

        $('.page01 .bubble01').hover(function() {
          $(this).stop().animate({
            marginTop: '-5px'
          },300);
        }, function() {
          $(this).stop().animate({
            marginTop: '0'
          },300);
        });

      };


      if(destination.anchor == 'page02') {
        $('.progressbox01 span').each(function () {
          $(this).delay(500).animate(
            {
              width: $(this).attr('data-progress') + "%",
            },1500);

          $(this).text($(this).attr('data-progress') + "%");
        });

      };


      if(destination.anchor == 'page03') {

        $('.xd_pro01').click(function(){
          $('.xd_file01').show();
        });
        $('.xd_clo01').click(function(){
          $('.xd_file01').hide();
        });
    
    
        $('.xd_pro02').click(function(){
          $('.xd_file02').show();
        });
        $('.xd_clo02').click(function(){
          $('.xd_file02').hide();
        });
    
    
        $('.xd_pro03').click(function(){
          $('.xd_file03').show();
        });
        $('.xd_clo03').click(function(){
          $('.xd_file03').hide();
        });
    
    
        $('.xd_pro04').click(function(){
          $('.xd_file04').show();
        });
        $('.xd_clo04').click(function(){
          $('.xd_file04').hide();
        });

        $('.page03 .bubble03').stop().animate({
          top: '250px',
          opacity: '1'
        },200).animate({
          top: '255px'
        },200);

      }

      
      if(destination.anchor == 'page04') {

        $('.card_box').animate({
          top: '390px'
        },300).animate({
          top: '400px'
        },300).animate({
          top: '390px'
        },300).animate({
          top: '400px'
        },300)
        
        $('.card_box').on('click', function (){
          $('.card_show').css('display','block').animate({
            width: '812px',
            height: '440px'
          }, 500)
        });

      };

    },

    afterSlideLoad: function(section, origin, destination, direction){
      slideIndexS = destination.index+1;

      if(direction == 'right') {
        
        $('.education').animate({
          top: '-10px',
          opacity: '1'
        },400).animate({top: '0px'},400)
        $('.career').delay(300).animate({
          top: '150px',
          opacity: '1'
        },400).animate({top: '160px'},400)
        $('.participation').delay(800).animate({
          top: '290px',
          opacity: '1'
        },500).animate({top: '300px'},400)
        $('.bubble02').animate({
          marginTop: '-5px'
        },300).animate({marginTop: '0'},400)


        $('.education').hover(function(){
          $(this).animate({top: '-10px'},400)
        }, function() {
          $(this).animate({top: '0px'},400)
        });
        $('.career').hover(function(){
          $(this).animate({top: '150px'},400)
        }, function() {
          $(this).animate({top: '160px'},400)
        });
        $('.participation').hover(function(){
          $(this).animate({top: '290px'},400)
        }, function() {
          $(this).animate({top: '300px'},400)
        });
        $('.bubble02').hover(function(){
          $('.file04 p').addClass('in')
        }, function() {
          $('.file04 p').removeClass('in')
        });


        const display=$('.mini_window div')
        const folder=$('.fol div')

        display.mouseover(function() {
          let i=$(this).index()

          folder.removeClass('hover')
          folder.eq(i).addClass('hover')
        })
        display.mouseout(function() {
          folder.removeClass('hover')
        });

      }
    },

    onLeave: function(origin, destination, direction) {
      if (origin.index === 1 && !sliding) {
        if (direction === 'down' && slideIndexS < 2) {
          $.fn.fullpage.moveSlideRight();
          return false;
        } else if (direction === 'up' && slideIndexS > 1) {
          $.fn.fullpage.moveSlideLeft();
          return false;
        }
      }
    }

  });



  const content = "HELLO! \n 안녕하세요 \n 프론트엔드 개발자 유가영입니다";
  const text = document.querySelector(".text");
  let i = 0;

  function typing(){
    if (i < content.length) {
      let txt = content.charAt(i);
      text.innerHTML += txt === "\n" ? "<br/>": txt;
      i++;
    }
  }
  setInterval(typing, 200)



  let bullet = ['개인 프로젝트', '팀 프로젝트', '리액트 프로젝트', '개인 포트폴리오']

  let fourthPage = new Swiper(".page03 .left .swiper-container", {
    slidesPerView: "auto",
    direction: 'horizontal',
    mousewheel: true,
    navigation: {
      nextEl: ".page03 .left .swiper-button-next",
      prevEl: ".page03 .left .swiper-button-prev",
    },
    pagination: {
      el: '.page03 .left .swiper-pagination',
      clickable: 'true',
      type: 'bullets',
      renderBullet: function (index, className) {
        return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
      }
    }
  });


  let project01 = new Swiper(".page03 .project01", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".page03 .project01 .swiper-button-next",
      prevEl: ".page03 .project01 .swiper-button-prev",
    },
    pagination: {
      el: '.page03 .project01 .swiper-pagination',
      clickable: 'true',
      type: 'bullets'
    }
  });


  let project02 = new Swiper(".page03 .project02", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".page03 .project02 .swiper-button-next",
      prevEl: ".page03 .project02 .swiper-button-prev",
    },
    pagination: {
      el: '.page03 .project02 .swiper-pagination',
      clickable: 'true',
      type: 'bullets'
    }
  });


  let project03 = new Swiper(".page03 .project03", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".page03 .project03 .swiper-button-next",
      prevEl: ".page03 .project03 .swiper-button-prev",
    },
    pagination: {
      el: '.page03 .project03 .swiper-pagination',
      clickable: 'true',
      type: 'bullets'
    }
  });


  let project04 = new Swiper(".page03 .project04", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".page03 .project04 .swiper-button-next",
      prevEl: ".page03 .project04 .swiper-button-prev",
    },
    pagination: {
      el: '.page03 .project04 .swiper-pagination',
      clickable: 'true',
      type: 'bullets'
    }
  });

});
