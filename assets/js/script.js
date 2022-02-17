$('.banner-slider').slick({
    dots: false,
    arrows:true,
    prevArrow:'<i class="fas fa-chevron-left prevarrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right nextarrow"></i>',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
$('.rooms-slider').slick({
    dots: false,
    arrows:true,
    prevArrow:'<i class="fas fa-chevron-left prevarrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right nextarrow"></i>',
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
$('.rooms-slider-two').slick({
    dots: false,
    arrows:false,
    prevArrow:'<i class="fas fa-chevron-left prevarrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right nextarrow"></i>',
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
$('.services-slider').slick({
    dots: false,
    arrows:false,
    // prevArrow:'<i class="fas fa-chevron-left prevarrow"></i>',
    // nextArrow:'<i class="fas fa-chevron-right nextarrow"></i>',
    fade:true,
    infinite: true,
    speed: 300,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.counter').counterUp();

  

  // function myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }
  
  // function filterFunction() {
  //   var input, filter, ul, li, a, i;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   div = document.getElementById("myDropdown");
  //   a = div.getElementsByTagName("a");
  //   for (i = 0; i < a.length; i++) {
  //     txtValue = a[i].textContent || a[i].innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       a[i].style.display = "";
  //     } else {
  //       a[i].style.display = "none";
  //     }
  //   }
  // }



  $('.slider-top').slick({
    dots: false,
    arrows:false,
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-bottom',
  
  });
  
  $('.slider-bottom').slick({
    dots: false,
    arrows:false,
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-top',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  window.onload = function () {
    if (
      document.querySelectorAll(".progress").length > 0 &&
      document.querySelectorAll(".progress [data-progress]").length > 0
    ) {
      document
        .querySelectorAll(".progress [data-progress]")
        .forEach((x) => AnimateProgress(x));
    }
  };
  
  function AnimateProgress(el) {
    el.className = "animate-progress";
    el.setAttribute(
      "style",
      `--animate-progress:${el.getAttribute("data-progress")}%;`
    );
  }