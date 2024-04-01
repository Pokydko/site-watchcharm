(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  // const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLink = document.querySelectorAll('.mobile-menu-link');
  // burger-menu
  const burger_btn = document.querySelector('.menu-anima');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    // burger-menu
    burger_btn.classList.toggle('crossed');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
  closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
  openMenuBtn.addEventListener('click', toggleMenu);
  // closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  // active class of menu items onscroll
  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY + window.innerHeight / 3;

    // if (window.innerWidth > 768) {
    document.querySelectorAll('.section').forEach((el, i) => {
      if (
        el.offsetTop - document.querySelector('.nav').clientHeight <=
        scrollDistance
      ) {
        document.querySelectorAll('.nav a').forEach(el => {
          if (el.classList.contains('header-link-active')) {
            el.classList.remove('header-link-active');
          }
        });
        document
          .querySelectorAll('.nav li')
          [i].querySelector('a')
          .classList.add('header-link-active');

        // the same for menu
        document.querySelectorAll('.mobile-menu-list a').forEach(el => {
          if (el.classList.contains('menu-link-active')) {
            el.classList.remove('menu-link-active');
          }
        });
        document
          .querySelectorAll('.mobile-menu-list li')
          [i].querySelector('a')
          .classList.add('menu-link-active');
      }
    });
    // }
  });
})();
