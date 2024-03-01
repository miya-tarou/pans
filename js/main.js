
'use strict';

{
  // sp-menu
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  // 商品説明
  const product = document.querySelectorAll('.product');
  for (let i = 0; i < product.length; i++) {
    const keyframes = {
      opacity: [0, 1],
      translate: ['0 100px', 0]
    };
    const options = {
      duration: 600,
      delay: i * 600,
      fill: 'forwards'
    };
    product[i].animate(keyframes, options);
  }
  // 商品説明　見出し
  const profile = entries => {
    const keyframe = {
      opacity: [0, 1],
      rotate: ['20deg 0', 0]
    };
    entries[0].target.animate(keyframe, 1000);
  };
  const profileObserver = new IntersectionObserver(profile);

  profileObserver.observe(document.querySelector('#profile'));
}

// お知らせの文字
const animateScroll = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          translate: [0, '100%']
        },
        {
          duration: 2000,
          pseudoElement: '::before',
          easing: 'ease',
          fill: 'forwards'
        }
      );
    }
  });
};
const scrollObserver = new IntersectionObserver(animateScroll);
const scrollElements = document.querySelectorAll('#know');
scrollElements.forEach((scrollElement) => {
  scrollObserver.observe(scrollElement);
});

// 店舗紹介の文字
const animatedScroll = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          translate: [0, '100%']
        },
        {
          duration: 2000,
          pseudoElement: '::before',
          easing: 'ease',
          fill: 'forwards'
        }
      );
    }
  });
};
const scrollsObserver = new IntersectionObserver(animatedScroll);
const scrollsElements = document.querySelectorAll('.info');
scrollsElements.forEach((scrollsElement) => {
  scrollsObserver.observe(scrollsElement);
});


// お問い合わせの文字
const animatingScroll = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          translate: [0, '100%']
        },
        {
          duration: 2000,
          pseudoElement: '::before',
          easing: 'ease',
          fill: 'forwards'
        }
      );
    }
  });
};
const scrollingObserver = new IntersectionObserver(animatingScroll);
const scrollingElements = document.querySelectorAll('.contact');
scrollingElements.forEach((scrollingElement) => {
  scrollingObserver.observe(scrollingElement);
});






// loading...(z-index..)
// const loadingArea = document.querySelector('#loading');
// const loadingText = document.querySelector('#loading p');

// window.addEventListener('load', () => {
//   loadingArea.animate(
//     {
//       backdropFilter: ['blur(10px)', 'blur(0)'],
//       background: ['rgba(190, 211, 202, 1)', 'rgba(190, 211, 202, 0)'],
//     },
//     {
//       duration: 2000,
//       delay: 1200,
//       easing: 'ease',
//       fill: 'forwards',
//     }
//     );
//     loadingText.animate(
//       [
//         {
//           opacity: 1,
//           offset: .8
//         },
//         {
//           opacity: 0,
//           offset: 1
//         },
//         ],
//         {
//           duration: 1200,
//           easing: 'ease',
//           fill: 'forwards',
//           }
//           );
// });

// // コンタクトの文字 ふわっと現れるアイテムの設定
// const animateFade = (entries、obs) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//     entry.target.animate(
//       {
//         opacity: [0, 1],
//         filter: ['blur(.4rem)', 'blur(0)'],
//         translate: ['0 4rem', 0],
//       },
//       {
//         duration: 2000,
//         easing: 'ease',
//         fill: 'forwards',
//       }
//       );
//       obs.unobserve(entry.target);
//   }
//   });
// };
// const fadeObserber = new IntersectionObserver(animateFade);

// const fadeElements = document.querySelectorAll('.fadein');
// fadeElements.forEach((fadeElement) => {
//   fadeObserver.observe(fadeElement);
// });









// フッターのpagetopボタン
$(function() {
  var pageTopBtn = $('pageTop');
  pageTopBtn.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      pageTopBtn.fadeIn();
    } else {
      pageTopBtn.fadeOut();
    }
  });
  pageTopBtn.click(function() {
    $('body,html').animate(
      {
        scrollTop: 0
      },
      500
    );
    return false;
  });
});
