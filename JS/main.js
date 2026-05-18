// Variables
let header = document.querySelector("header");
const nav = document.querySelector("nav ul");
const allLinks = document.querySelectorAll("nav ul li a");
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
const icon = document.querySelector(".icon");
const heading = document.querySelector(".content h1");
const text = "Hello Everyone! \n Welcome In My Portfolio";
let work = document.querySelector(".landing .works");
let about = document.querySelector(".about");
let content = document.querySelector(".about .content");
let skills = document.querySelector(".our-skills");
let progSpans = document.querySelectorAll(".our-skills .prog-span");
let switcherLis = document.querySelectorAll(".switcher li");
let boxes = document.querySelectorAll(".projects .box");
const copyIcons = document.querySelectorAll(".copy");
let inputs = document.querySelectorAll(".contacts .input");
let year = document.querySelector("footer span.year");
let yearNum = new Date().getFullYear();

document.addEventListener("keydown", function (e) {
  if (e.key === "F12") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key === "J") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
  }
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Smooth Scroll
function scrollToSomeWhere(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionSelector = e.currentTarget.dataset.section;
      const targetSection = document.querySelector(sectionSelector);
      if (targetSection) {
        const sectionPosition = targetSection.offsetTop;
        window.scrollTo({
          top: sectionPosition - 76,
          behavior: "smooth",
        });
      }
    });
  });
}
scrollToSomeWhere(allLinks);
scrollToSomeWhere(allBullets);

work.addEventListener("click", function (e) {
  e.preventDefault();
  const sectionSelector = e.currentTarget.dataset.section;
  const targetSection = document.querySelector(sectionSelector);
  if (targetSection) {
    const sectionPosition = targetSection.offsetTop;
    window.scrollTo({
      top: sectionPosition - 76,
      behavior: "smooth",
    });
  }
});

icon.addEventListener("click", function (e) {
  e.stopPropagation();
  nav.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (e.target !== icon && e.target !== nav) {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
    }
  }
});

// Animate Heading
setTimeout(() => {
  text.split("").forEach((letter, index) => {
    setTimeout(() => {
      heading.innerHTML += letter;
    }, 100 * index);
  });
}, 1000);

window.addEventListener("scroll", function () {
  if (scrollY >= 50) {
    header.classList.add("scrolled");
    allBullets.forEach((bullet) => bullet.classList.add("color"));
  } else {
    header.classList.remove("scrolled");
    allBullets.forEach((bullet) => bullet.classList.remove("color"));
  }

  if (scrollY >= about.offsetTop - 300) {
    content.style.transform = "translateY(0)";
  }

  let i = document.querySelector(".scroll-to-top i");

  // Scroll To Top Button
  if (scrollY >= 600) {
    i.style.cssText = `
    right: 20px; opacity: 1;
    `;
  } else {
    i.style.cssText = `
    right: -40px;
    opacity: 0;
    `;
  }

  i.onclick = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  if (scrollY >= skills.offsetTop) {
    progSpans.forEach((span) => (span.style.width = span.dataset.prog));
  }

  let skillsOffsetTop = skills.offsetTop;

  // Our Skills Outer Height
  let skillsOuterHeight = skills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight + 100;

  // Window Scroll Top
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    progSpans.forEach((skill) => {
      skill.style.width = skill.dataset.prog;
    });
  }
});

window.addEventListener("load", function () {
  if (scrollY >= 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  if (scrollY >= about.offsetTop - 300) {
    content.style.transform = "translateY(0)";
  }
});

work.onclick = function () {
  return false;
};

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageBoxes);
});

function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageBoxes() {
  boxes.forEach((box) => {
    box.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((ele) => {
    ele.style.display = "block";
  });
}

// Make Dynamism Year For Footer
let currentYear = new Date().getFullYear();
// Select Span
let spans = document.querySelectorAll("span.time");

spans.forEach((span) => {
  span.textContent = currentYear;
});

copyIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const textToCopy = this.parentElement.querySelector(".info p").innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalClasses = this.className;
      this.className = "fa-solid fa-check copy-icon";
      this.style.color = "#28a745";
      setTimeout(() => {
        this.className = originalClasses;
        this.style.color = "";
      }, 3000);
    });
  });
});

inputs.forEach(function (input) {
  input.addEventListener("mouseenter", function () {
    this.focus();
  });

  input.addEventListener("mouseleave", function () {
    if (this.value !== "") {
      this.focus();
    } else {
      this.blur();
    }
  });
});

year.innerHTML = yearNum;
