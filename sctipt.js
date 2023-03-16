let responsiveSlider = function() {

    let slider = document.getElementById("slider");
    let sliderWidth = slider.offsetWidth;
    let slideList = document.getElementById("slideWrap");
    let count = 1;
    let items = slideList.querySelectorAll("li").length;
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    let prevSlide = function() {
      if(count > 1) {
        count = count - 5;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    let nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 8000);
    
    };
    
    window.onload = function() {
    responsiveSlider();  
    }
