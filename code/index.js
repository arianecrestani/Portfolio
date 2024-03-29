const createMenuItem = (href, textContent) => {
  const header = document.getElementsByClassName("header")[0];
  const menuItem = document.createElement("a");

  menuItem.href = href;
  menuItem.className = "menuSection";
  menuItem.textContent = textContent;
  header.appendChild(menuItem);
};

function createTitleSection(id, textContent) {
  const container = document.getElementsByClassName("container")[0];
  const titleSection = document.createElement("h2");

  titleSection.id = id;
  titleSection.textContent = textContent;
  titleSection.className = "title";
  container.appendChild(titleSection);
}

function createTitleSection2(id, textContent) {
  const titleSection = document.createElement("h2");

  titleSection.id = id;
  titleSection.textContent = textContent;
  titleSection.className = "title";
  return titleSection;
}
function createTitleSection3(id, textContent) {
  const titleSection = document.createElement("h2");

  titleSection.id = id;
  titleSection.textContent = textContent;
  titleSection.className = "title";
  return titleSection;
}
function createTitleSection4(id, textContent) {
  const titleSection = document.createElement("h2");

  titleSection.id = id;
  titleSection.textContent = textContent;
  titleSection.className = "title";
  return titleSection;
}
function createDivSection() {
  const section = document.createElement("div");
  section.className = "divSection";
  return section;
}
//
function createHomeSection() {
  const container = document.getElementsByClassName("container")[0];
  const section = createDivSection();
  container.appendChild(section);

  const homeSection = document.createElement("div");
  homeSection.className = "divSectionHome";
  homeSection.id = "home";
  section.appendChild(homeSection);

  const homeImg = document.querySelector("video");
  homeSection.appendChild(homeImg);

  const homeTitle = document.createElement("div");
  homeTitle.className = "homeTitle";
  homeSection.appendChild(homeTitle);

  const titleImage = document.getElementById("titleMeName");
  homeTitle.appendChild(titleImage);

  createMenuItem("#home", "Home");
}

function createAboutMeSection() {
  const container = document.getElementsByClassName("container")[0];

  const section = createDivSection();
  container.appendChild(section);

  const titleSection = createTitleSection2("aboutMe", "About Me");
  section.appendChild(titleSection);

  const aboutSection = document.createElement("div");
  aboutSection.className = "divSectionAboutMe";
  section.appendChild(aboutSection);

  const textContainer = document.createElement("div");
  textContainer.className = "textContainer";
  aboutSection.appendChild(textContainer);

  const mainTitleAboutMe = document.createElement("h2");

  mainTitleAboutMe.className = "textAboutMe";
  textContainer.appendChild(mainTitleAboutMe);

  const infoAboutMe = document.getElementById("infoAboutMe");
  infoAboutMe.className = "textAboutMe";
  textContainer.appendChild(infoAboutMe);

  const icon = document.getElementById("icons");
  aboutSection.appendChild(icon);
  icon.id = "icons";

  const avatarImg = document.createElement("img");
  avatarImg.className = "avatarImg";
  avatarImg.src = "images/fotoperfil.jpg";
  aboutSection.appendChild(avatarImg);

  createMenuItem("#aboutMe", "About Me");
}

function createProjectSection() {
  const container = document.getElementsByClassName("container")[0];

  const section = createDivSection();
  container.appendChild(section);

  const titleSection = createTitleSection3("project", "Project");
  section.appendChild(titleSection);

  const projectSection = document.createElement("div");
  projectSection.className = "divSectionProject";
  section.appendChild(projectSection);

  const onlineShopping = document.createElement("div");
  onlineShopping.className = "section";
  projectSection.appendChild(onlineShopping);

  const onlineShoppingLink = document.createElement("a");
  onlineShoppingLink.href = "https://arianecrestani.github.io/online-shopping/";
  onlineShoppingLink.className = "links";
  onlineShopping.appendChild(onlineShoppingLink);

  const onlineShoppingImg = document.createElement("img");
  onlineShoppingImg.src = "images/onlineShopping.png";
  onlineShoppingImg.className = "imagesFormat";
  onlineShoppingLink.appendChild(onlineShoppingImg);

  const blogSection = document.createElement("div");
  blogSection.className = "section";
  projectSection.appendChild(blogSection);

  const linkBlog = document.createElement("a");
  linkBlog.href = "https://arianecrestani.github.io/Travel-blog/";
  linkBlog.className = "links";
  blogSection.appendChild(linkBlog);

  const imgBlog = document.createElement("img");
  imgBlog.src = "images/screen.png";
  imgBlog.className = "imagesFormat";
  linkBlog.appendChild(imgBlog);

  const toDoSection = document.createElement("div");
  toDoSection.className = "section";
  projectSection.appendChild(toDoSection);

  const linkToDo = document.createElement("a");
  linkToDo.href = "https://arianecrestani.github.io/To-do-list/";
  linkToDo.className = "links";
  toDoSection.appendChild(linkToDo);

  const imgToDo = document.createElement("img");
  imgToDo.src = "images/toDo.png";
  imgToDo.className = "imagesFormat";
  linkToDo.appendChild(imgToDo);

  const movieDbSection = document.createElement("div");
  movieDbSection.className = "section";
  projectSection.appendChild(movieDbSection);

  const linkMovieDb = document.createElement("a");
  linkMovieDb.href = "https://arianecrestani.github.io/Movie-Preview/";
  linkMovieDb.className = "links";
  movieDbSection.appendChild(linkMovieDb);

  const imgMovieDb = document.createElement("img");
  imgMovieDb.src = "images/movie.png";
  imgMovieDb.className = "imagesFormat";
  linkMovieDb.appendChild(imgMovieDb);

  const forescastAppSection = document.createElement("div");
  forescastAppSection.className = "section";
  projectSection.appendChild(forescastAppSection);

  const forescastAppLink = document.createElement("a");
  forescastAppLink.href = "https://github.com/arianecrestani/Project-weather";
  forescastAppLink.className = "links";
  forescastAppSection.appendChild(forescastAppLink);

  const imgForecast = document.createElement("img");
  imgForecast.src = "images/forecast.png";
  imgForecast.className = "imagesFormat";
  forescastAppLink.appendChild(imgForecast);

  const sentimentSection = document.createElement("div");
  sentimentSection.className = "section";
  projectSection.appendChild(sentimentSection);

  const sentimentAppLink = document.createElement("a");
  sentimentAppLink.href =
    "https://github.com/arianecrestani/Evaluate-a-News-Article-with-Natural-Language-Processing";
  sentimentAppLink.className = "links";
  sentimentSection.appendChild(sentimentAppLink);

  const imgSentiment = document.createElement("img");
  imgSentiment.src = "images/sentiment.png";
  imgSentiment.className = "imagesFormat";
  sentimentAppLink.appendChild(imgSentiment);

  const menuSection = document.createElement("div");
  menuSection.className = "section";
  projectSection.appendChild(menuSection);

  const menuAppLink = document.createElement("a");
  menuAppLink.href = "https://github.com/arianecrestani/Menu-restaurant";
  menuAppLink.className = "links";
  menuSection.appendChild(menuAppLink);

  const imgMenu = document.createElement("img");
  imgMenu.src = "images/menu.png";
  imgMenu.className = "imagesFormat";
  menuAppLink.appendChild(imgMenu);

  const travelAppSection = document.createElement("div");
  travelAppSection.className = "section";
  projectSection.appendChild(travelAppSection);

  const travelAppLink = document.createElement("a");
  travelAppLink.href = "https://github.com/arianecrestani/Travel-App";
  travelAppLink.className = "links";
  travelAppSection.appendChild(travelAppLink);

  const imgTravelApp = document.createElement("img");
  imgTravelApp.src = "images/travelApp.jpg";
  imgTravelApp.className = "imagesFormat";
  travelAppLink.appendChild(imgTravelApp);

  createMenuItem("#project", "project");
}

function createContactSection() {
  const container = document.getElementsByClassName("container")[0];

  const section = createDivSection();
  container.appendChild(section);

  const titleSection = createTitleSection4("contact", "Contact");
  section.appendChild(titleSection);

  const contactSection = document.createElement("div");
  contactSection.className = "divSectionContact";
  section.appendChild(contactSection);

  const linkEmail = document.createElement("a");
  linkEmail.href = "mailto:ariane.crestani@gmail.com";
  linkEmail.className = "fas fa-envelope";
  linkEmail.id = "medias";
  contactSection.appendChild(linkEmail);

  const linkLinkdin = document.createElement("a");
  linkLinkdin.className = "fab fa-linkedin";
  linkLinkdin.id = "medias";
  linkLinkdin.href = "https://www.linkedin.com/in/ariane-crestani-14910ba4/";
  contactSection.appendChild(linkLinkdin);

  const linkGithub = document.createElement("a");
  linkGithub.href = "https://github.com/arianecrestani";
  linkGithub.className = "fab fa-github";
  linkGithub.id = "medias";
  contactSection.appendChild(linkGithub);

  createMenuItem("#contact", "contact");
}

function createFooter() {
  const container = document.getElementsByClassName("container")[0];

  const footer = document.createElement("div");
  footer.className = "footer";
  container.appendChild(footer);
}

const createSection = () => {
  createHomeSection();
  createAboutMeSection();
  createProjectSection();
  createContactSection();
  createFooter();
};

function highlightMenuSection() {
  const sections = document.getElementsByClassName("divSection");
  const menu = document.getElementsByClassName("menuSection");

  document.addEventListener("scroll", (event) => {
    console.log(document.body.offsetHeight);
    console.log(event);
    let selectedMenuItem;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const isShowingCurrentSection =
        section.getBoundingClientRect().top - document.body.offsetHeight / 5 <=
        document.body.offsetHeight / 2;

      if (isShowingCurrentSection) {
        selectedMenuItem = menu[i];
      }
    }

    if (event.target.scrollingElement.scrollTop == 0) {
      selectedMenuItem = menu[0];
    }

    for (const item of menu) {
      if (item === selectedMenuItem) {
        item.setAttribute("style", "background-color:silver");
      } else {
        item.setAttribute("style", "background-color: none;");
      }
    }
  });
}

window.addEventListener("load", () => {
  createSection();
  highlightMenuSection();
});
