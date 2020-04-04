// get the DOM
const getDOM = selector => () => {
  return document.querySelector(selector);
};
// Values DOM nodes
const dom = {
  main: {
    name: getDOM('#main #name'),
    mail: getDOM('#main #mail'),
    img: getDOM('#main #img'),
    role: getDOM('#main #role'),
    connects: getDOM('#main #connects'),
    links: getDOM('#main #links')
  },
  projects: getDOM('#projects'),
  logo: getDOM('#projects-page #logo')
};
// External Links (ICONS)
const connectsDOM = main.connects.map(
    ({ name, iconName, link }) =>
      `<a href=${link} target="_blank"><ion-icon name="${iconName}" title="${name}"></ion-icon></a>`
  ).join('\n');
// Internal Links
const getLinks = links => links
    .map(({ name, link }) => `<a href="${link}" class="text-pink-500" >${name}</a>`)
    .map((link, index, links) => index === links.length - 1 ? link: `${link} - `)
    .join('\n');
// Set page title
document.title = `${main.name} | ${main.role}`
// Assign elements to the DOM
function assignDOM(dom, value, options) {
  console.log('dom, value, img:', dom, value, img);

  if (options && options.isImg) {
    dom.src = value;
    return;
  }

  if (options && options.isAdjacent) {
    dom.insertAdjacentHTML('afterbegin', value);
  }

  dom.innerHTML = value;
}

// Assign email link
dom.main.mail().href = `mailto:${main.mail}?Subject=Hello%20again`;
// Populate DOM
assignDOM(dom.main.name(), main.name);
assignDOM(dom.main.mail(), main.mail);
assignDOM(dom.main.img(), main.img, { isImg: true });
assignDOM(dom.main.role(), main.role);
assignDOM(dom.main.connects(), connectsDOM);
assignDOM(dom.main.links(), getLinks(main.links));

