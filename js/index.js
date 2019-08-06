const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
 
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let nav = document.querySelectorAll('a');

nav.forEach(function(value, i){
  value.textContent = siteContent.nav[`nav-item-${i+1}`];
})



let mainHeading = document.querySelector('h1');
mainHeading.textContent = siteContent.cta['h1'];

mainHeading.style.width = '40%';


let button = document.querySelector('button');
button.textContent = siteContent.cta['button'];

let subHeadings = document.querySelectorAll('h4');

subHeadings[0].textContent = siteContent["main-content"]["features-h4"];
subHeadings[1].textContent = siteContent["main-content"]["about-h4"];
subHeadings[2].textContent = siteContent["main-content"]["services-h4"];
subHeadings[3].textContent = siteContent["main-content"]["product-h4"];
subHeadings[4].textContent = siteContent["main-content"]["vision-h4"];

let mainText = document.querySelectorAll('p');

mainText[0].textContent = siteContent["main-content"]["features-content"];
mainText[1].textContent = siteContent["main-content"]["about-content"];
mainText[2].textContent = siteContent["main-content"]["services-content"];
mainText[3].textContent = siteContent["main-content"]["product-content"];
mainText[4].textContent = siteContent["main-content"]["vision-content"];

subHeadings[5].textContent = siteContent["contact"]["contact-h4"];
mainText[5].textContent = siteContent["contact"]["address"];
mainText[6].textContent = siteContent["contact"]["phone"];
mainText[7].textContent = siteContent["contact"]["email"];

mainText[8].textContent = siteContent["footer"]["copyright"];

nav.forEach(item => {
  item.style.color = 'green';
})

let navigation = document.querySelector('nav');

let firstNav = document.createElement('a');
let secondNav = document.createElement('a');

firstNav.textContent = "Blog";
secondNav.textContent = "Future";

navigation.appendChild(firstNav);
navigation.prepend(secondNav);

firstNav.style.color = 'green';
secondNav.style.color = 'green';

let contact = document.querySelector('.contact');
contact.style.width = '20%';