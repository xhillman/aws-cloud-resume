let currentPage;
const homePage = document.querySelector('.home');
const aboutPage = document.querySelector('.about');
const projectsPage = document.querySelector('.projects');
const contactPage = document.querySelector('.contact');
const homeNav = document.querySelector('.home-nav');
const aboutNav = document.querySelector('.about-nav');
const projectsNav = document.querySelector('.projects-nav');
const contactNav = document.querySelector('.contact-nav');

const setPage = (page) => {
  homePage.style.display = 'none';
  aboutPage.style.display = 'none';
  projectsPage.style.display = 'none';
  contactPage.style.display = 'none';
  page.style.display = 'block';
}

const setNav = (nav) => {
  homeNav.classList.remove('selected-nav');
  aboutNav.classList.remove('selected-nav');
  projectsNav.classList.remove('selected-nav');
  contactNav.classList.remove('selected-nav');
  nav.classList.add('selected-nav');
}

//To Do: save current page


homeNav.addEventListener('click', () => {
  setPage(homePage);
  setNav(homeNav);
  currentPage = homePage;
});

aboutNav.addEventListener('click', () => {
  setPage(aboutPage);
  setNav(aboutNav);
  currentPage = aboutPage;
});

projectsNav.addEventListener('click', () => {
  setPage(projectsPage);
  setNav(projectsNav);
  currentPage = projectsPage;
});

contactNav.addEventListener('click', () => {
  setPage(contactPage);
  setNav(contactNav);
  currentPage = contactPage;
});