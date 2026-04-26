// Portfolio mobile slider
(function () {
  var items = [
    { src: '/images/portfolio-1.png', alt: 'Bride and Groom', title: 'The First Dance',  sub: 'Oil on Canvas, 24\u00d736"' },
    { src: '/images/portfolio-2.png', alt: 'Tuscany Sunset',   title: 'Tuscany Sunset',   sub: 'Live Landscape, 18\u00d724"' },
    { src: '/images/portfolio-3.png', alt: 'Guest Portrait',   title: 'Evening Guests',   sub: 'Watercolor Portrait' },
  ];
  var idx = 0;

  var slideImg   = document.getElementById('portfolio-slide-img');
  var slideTitle = document.getElementById('portfolio-slide-title');
  var slideSub   = document.getElementById('portfolio-slide-sub');
  var slideCount = document.getElementById('portfolio-slide-count');
  var btnPrev    = document.getElementById('portfolio-prev');
  var btnNext    = document.getElementById('portfolio-next');
  var slide      = document.getElementById('portfolio-slide');

  if (!slideImg) return;

  function update(newIdx) {
    slide.style.opacity = '0';
    setTimeout(function () {
      idx = (newIdx + items.length) % items.length;
      slideImg.src              = items[idx].src;
      slideImg.alt              = items[idx].alt;
      slideTitle.textContent    = items[idx].title;
      slideSub.textContent      = items[idx].sub;
      slideCount.textContent    = (idx + 1) + ' / ' + items.length;
      slide.style.opacity       = '1';
    }, 200);
  }

  btnPrev.addEventListener('click', function () { update(idx - 1); });
  btnNext.addEventListener('click', function () { update(idx + 1); });
})();
