const scrollElements = document.querySelectorAll(".js-scroll");
const loadElements = document.querySelectorAll(".js-load");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}


const displayLoadElement = (element) => {
  element.classList.add("loaded");
}

const hideLoadElements = (element) => {
  element.classList.remove("loaded");
}

const handleLoadAnimation = () => {
  loadElements.forEach(el=>{
    if(elementInView(el,1.25)){
      displayLoadElement(el);
    }
    else if(elementOutofView(el)){
      hideLoadElements(el);
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

window.addEventListener("load", () => {
  handleLoadAnimation();
});


// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// var items = document.querySelectorAll(".timeline li");
 
// // code for the isElementInViewport function
 
// function callbackFunc() {
//   for (var i = 0; i < items.length; i++) {
//     if (isElementInViewport(items[i])) {
//       items[i].classList.add("in-view");
//     }
//   }
// }
 
// window.addEventListener("load", callbackFunc);
// window.addEventListener("scroll", callbackFunc);


/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

//
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
