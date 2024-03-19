/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// JavaScript
document.querySelector('.first-image').addEventListener('click', function() {
    this.classList.add('hidden'); // 첫 번째 이미지 숨기기
    document.querySelector('.second-image').classList.remove('hidden'); // 두 번째 이미지 표시
});

document.querySelector('.second-image').addEventListener('click', function() {
    document.querySelector('.first-image').classList.remove('hidden'); // 첫 번째 이미지 표시
    this.classList.add('hidden'); // 두 번째 이미지 숨기기
});


// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    var additionalInfo = document.querySelector('.additional-info');
    var sentences = [
      "Hi, I am an ISTQB certified Test Engineer.",
      "My passion is in Test Automation, especially for Mobile Apps.",
      "Wanna know more about me?",
      "Find me @yundomiel on Github."
    ];
  
    function typeWriter(text, i, cb) {
      if (i < text.length) {
        additionalInfo.innerHTML += text.charAt(i);
        setTimeout(function() {
          typeWriter(text, i + 1, cb);
        }, 100); // 0.1초마다 한 글자씩 추가
      } else {
        setTimeout(cb, 3000); // 3초 후에 텍스트 사라짐
      }
    }
  
    function animateText() {
      sentences.forEach(function(sentence, index) {
        setTimeout(function() {
          additionalInfo.innerHTML = '';
          typeWriter(sentence, 0, function() {
            setTimeout(function() {
              additionalInfo.innerHTML = '';
            }, 5000); // 5초 후에 텍스트 사라짐
          });
        }, index * 11000); // 11초 간격으로 문장을 나타나게 설정 (타이핑 시간 100ms * 글자 수 + 3초)
      });
    }
  
    animateText(); // 처음 애니메이션 실행
  
    setInterval(animateText, sentences.length * 11000); // 애니메이션 반복
  });
  