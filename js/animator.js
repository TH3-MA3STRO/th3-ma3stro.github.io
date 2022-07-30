let sectionHeaders = document.getElementsByClassName("section-header");
let sectUnderlines = document.getElementsByClassName("animated-underline");
let projects = document.querySelectorAll("div.row div.card");
let navLinks = document.getElementsByClassName("nav-link")
let widthVP = visualViewport.width;
let heightVP = visualViewport.height;
let aboutHead, aboutUnder;
let prog1, prog2, prog3, prog4, prog5;
let skill1, skill2, skill3, skill4, skill5;
let projectHead, projectUnder;
let pro1, pro2, pro3, pro4, pro5, pro6;
console.log(projects.length)
pro1 = projects[0];
pro2 = projects[1];
pro3 = projects[2];
pro4 = projects[3];
pro5 = projects[4];
pro6 = projects[5];
pro7 = projects[6];
pro8 = projects[7];
pro9 = projects[8];
pro10 = projects[9];

aboutHead = sectionHeaders[0];
aboutUnder = sectUnderlines[0];
projectHead = sectionHeaders[2];
projectUnder = sectUnderlines[2];
skillHead = sectionHeaders[1];
skillUnder = sectUnderlines[1];



function checkInVP(element, sub = 0) {
  bounds = element.getBoundingClientRect();
  if (sub != 0) {
    sub = bounds.height / 2;
  }
  return bounds.top >= 0 && bounds.left >= 0 && bounds.bottom - sub <= heightVP;
}

function headChanger(header, underline, into) {
  if (checkInVP(header)) {
    header.style.opacity = "100";
    header.style.left = "0";
    underline.style.transform = "scale(1,1)";
    underline.style.opacity = "100";
    clearInterval(into);
  }
}

function skillChanger(header, pbar, into) {
  boundaries = header.getBoundingClientRect();
  if (boundaries.top >= 0 && boundaries.bottom <= heightVP) {
    header.style.opacity = "100";
    header.style.left = "0";
    pbar.style.left = "0";
    pbar.style.opacity = "100";
    clearInterval(into);
  }
}

function procard(card, into) {
  if (checkInVP(card, 200)) {
    card.style.opacity = "100";
    card.style.transform = "translate3d(0,0,0)";
    clearInterval(into);
  }
}
let interAbout, interProject, interSkill;
let intercard1, intercard2, intercard3, intercard4, intercard5, intercard6;
interAbout = setInterval(
  () => headChanger(aboutHead, aboutUnder, interAbout),
  300
);
interProject = setInterval(
  () => headChanger(projectHead, projectUnder, interProject),
  300
);
interSkill = setInterval(
  () => headChanger(skillHead, skillUnder, interSkill),
  300
);

intercard1 = setInterval(() => procard(pro1, intercard1), 400);
intercard2 = setInterval(() => procard(pro2, intercard2), 400);
intercard3 = setInterval(() => procard(pro3, intercard3), 400);
intercard4 = setInterval(() => procard(pro4, intercard4), 400);
intercard5 = setInterval(() => procard(pro5, intercard5), 400);
intercard6 = setInterval(() => procard(pro6, intercard6), 400);
intercard7 = setInterval(() => procard(pro7, intercard7), 400);
intercard8 = setInterval(() => procard(pro8, intercard8), 400);
intercard9 = setInterval(() => procard(pro9, intercard9), 400);
intercard10 = setInterval(() => procard(pro10, intercard10), 400);

