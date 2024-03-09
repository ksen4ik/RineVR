// Бургер-меню





// Переключение блоков в UTILITY

const utilitySwitchers = document.querySelectorAll('.utility3__switch');
const utilityBlocks = document.querySelectorAll('.utility3__block');

utilitySwitchers[0].classList.add('switch-active');
utilityBlocks[0].classList.add('block-active');

utilitySwitchers.forEach((utilitySwitcher, index) => {
  utilitySwitcher.addEventListener('click', () => {
    utilitySwitchers.forEach(item => item.classList.remove('switch-active'));
    utilityBlocks.forEach(item => item.classList.remove('block-active'));

    utilitySwitcher.classList.add('switch-active');
    utilityBlocks[index].classList.add('block-active');
  })
})



// Данные для карточек блока Roadmap

const roadmapItemsData = [
  {
    image: 'assets/images/roadmap/roadmap-1.png',
    number: '01',
    title: 'MULTIUSER',
    description: 'Functionality to implement multi avatars presence is scene',
  },
  {
    image: 'assets/images/roadmap/roadmap-2.png',
    number: '02',
    title: 'USER PROFILE',
    description: 'Functionality to implement multi avatars presence is scene',
  },
  {
    image: 'assets/images/roadmap/roadmap-3.png',
    number: '03',
    title: 'NFT MANAGEMENT',
    description: 'Functionality to implement multi avatars presence is scene',
  },
  {
    image: 'assets/images/roadmap/roadmap-4.png',
    number: '04',
    title: 'CUSTOMER CLOUD EVOLUTION',
    description: 'Customers cloud database and admin panek',
  },
  {
    image: 'assets/images/roadmap/roadmap-5.png',
    number: '05',
    title: '10 STANDARD ENVIRONMENT',
    description: '10 ready to use 3D environment',
  },
  {
    image: 'assets/images/roadmap/roadmap-6.png',
    number: '06',
    title: 'MULTI LANGUAGE',
    description: 'Multi language support',
  },
  {
    image: 'assets/images/roadmap/roadmap-7.png',
    number: '07',
    title: '3D AND MENU CLOUD EVOLUTION',
    description: 'Cloud database for 3D, delivery network and Menu management',
  },
  {
    image: 'assets/images/roadmap/roadmap-8.png',
    number: '08',
    title: 'CUSTOMER PERSONALIZATION TOOL',
    description: 'Web app to give users the ability to customize their 3D space',
  },
  {
    image: 'assets/images/roadmap/roadmap-9.png',
    number: '09',
    title: 'EVENTS FOR FANS',
    description: 'Event management to create events for fans and event admin panel',
  },
]

const roadmapSliderList = document.querySelector('.roadmap__list');

for (let i = 0; i < roadmapItemsData.length; i++) {
  const roadmapItem = document.createElement('div');
  roadmapItem.classList.add('roadmap__item');
  roadmapItem.innerHTML = `
    <div class="roadmap__item-image">
      <img src="${roadmapItemsData[i].image}" alt="">
      <span>
        <div class="roadmap__item-num">
          <div class="roadmap__item-num-inner">
            <span>${roadmapItemsData[i].number}</span>
          </div>
        </div>
      </span>
    </div>
    <div class="roadmap__item-info">
      <h4>${roadmapItemsData[i].title}</h4>
      <p>${roadmapItemsData[i].description}</p>
    </div>
  `;
  roadmapSliderList.appendChild(roadmapItem);
}



// Прокрутка карточек в блоке Roadmap курсором

let isDragging = false;
let startPos = 0;
let scrollLeft = 0;

roadmapSliderList.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPos = e.clientX;
  scrollLeft = roadmapSliderList.scrollLeft;
});

roadmapSliderList.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const distance = e.clientX - startPos;
  roadmapSliderList.scrollLeft = scrollLeft - distance;
});

roadmapSliderList.addEventListener('mouseup', () => {
  isDragging = false;
});

roadmapSliderList.addEventListener('mouseleave', () => {
  isDragging = false;
});



// Слайдер Partners

$('.partners__slider').slick({
  arrows: false,
	pauseOnHover: false,
  pauseOnFocus: false,
	infinite: true,
	autoplay: true,
	speed: 2000,
	autoplaySpeed: 0,
	draggable: false,
	swipe: false,
	variableWidth: true,
	cssEase: 'linear',
});



// Данные для FAQ

const faqItemsData = [
  {
    question: 'What is RINE VR?',
    answer: 'RINE VR is a virtual reality platform that allows users to explore, create, and connect in a metaverse environment.',
  },
  {
    question: 'What devices are compatible with RINE VR?',
    answer: 'Currently, RINE VR is compatible with Oculus Quest 2 and Oculus Quest Pro.',
  },
  {
    question: 'How do I access RINE VR?',
    answer: 'You can access RINE VR by downloading the app from the Oculus store.',
  },
  {
    question: 'Is RINE VR free to use?',
    answer: 'Yes, RINE VR is free to use. However, some features may require a subscription or additional payment.',
  },
  {
    question: 'What kind of experiences are available on RINE VR?',
    answer: 'RINE VR offers a range of experiences, including social gatherings, creative tools, and entertainment events.',
  },
  {
    question: 'Can I create my own content on RINE VR?',
    answer: 'Yes, RINE VR provides a set of creative tools that allow users to design and customise their own virtual spaces.',
  },
  {
    question: 'Is there a community aspect to RINE VR?',
    answer: 'Yes, RINE VR has a strong community aspect with opportunities to connect with like-minded individuals and participate in events and activities.',
  },
  {
    question: 'What is the Platinum NFT membership?',
    answer: 'The Platinum NFT membership is a premium membership that provides exclusive access to certain features and events on RINE VR.',
  },
  {
    question: 'How can I become a Platinum NFT member?',
    answer: 'You can become a Platinum NFT member by purchasing the Platinum NFT on the RINE website or through a supported NFT marketplace.',
  },
]

const faqAccordeon = document.querySelector('.faq__accordion');

for (let i = 0; i < faqItemsData.length; i++) {
  const faqItem = document.createElement('div');
  faqItem.classList.add('faq__item');
  faqItem.classList.add('js-accordion-item');
  faqItem.innerHTML = `
    <div class="faq__title js-accordion-header">
      <h5>${faqItemsData[i].question}</h5>
      <div class="faq__icon"></div>
    </div>
    <div class="faq__body js-accordion-body">
      <p>${faqItemsData[i].answer}</p>
    </div>
  `;
  faqAccordeon.appendChild(faqItem);
}



// Аккордеон FAQ

var accordion = (function(){
  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-header');

  var settings = {
    speed: 400,
    oneOpen: false
  };
    
  return {
    init: function($settings) {
      $accordion_header.on('click', function() {
        accordion.toggle($(this));
      });
      
      $.extend(settings, $settings); 

      if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
        $('.js-accordion-item.active:not(:first)').removeClass('active');
      }

      $('.js-accordion-item.active').find('> .js-accordion-body').show();
    },
    toggle: function($this) {
            
      if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
        $this.closest('.js-accordion')
               .find('> .js-accordion-item') 
               .removeClass('active')
               .find('.js-accordion-body')
               .slideUp()
      }
      
      $this.closest('.js-accordion-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();

$(document).ready(function(){
  accordion.init({ speed: 300, oneOpen: true });
});