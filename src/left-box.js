//logo image
const logoImage = ViewModel.createElement("img", {
  src: "Assets/PNG/Logo.png",
  alt: "logo"
});

// box for logo imge in box left
const boxLogo = ViewModel.createElement("div" , {className:"h-100 col-12 d-flex p-0 m-0 justify-content-center align-items-center position-absolute"} , 
logoImage
);

//text Anti-Virus in bottom box
const txtAnti = ViewModel.createElement(
  "div",
  {
    className: "textAntivirus",
  },
  "Muiti Anti-Virus & Cybersecurity"
);

// function for animation circle in box left
let circleAnim = function (classCricle) {
  const circle = ViewModel.createElement("div", {
    className: "element" + " " + classCricle,
  });
  return circle;
};
// circle
const circleOne = circleAnim("circleOne");
const circleTwo = circleAnim("circleTwo");
const circleThree = circleAnim("circleThree");
const circleFour = circleAnim("circleFour");
const circleFive = circleAnim("circleFive");
const circleSix = circleAnim("circleSix");
const circleSeven = circleAnim("circleSeven");

//radar image
const imgRadar = ViewModel.createElement("img", {
  className: "image",
  style: { width: "20%", height: "100%" },
  src: "Assets/PNG/radar-angle.png",
  alt: "radar",
});

//box circle and radar animation
const layoutCircle = ViewModel.createElement(
  "div",
  {
    className: "h-100 col-12 d-flex justify-content-center align-items-center",
  },
  [
    imgRadar,
    circleOne,
    circleTwo,
    circleThree,
    circleFour,
    circleFive,
    circleSix,
    circleSeven,
    txtAnti,
  ]
);

//full package box left
const boxLeft = ViewModel.createElement(
  "div",
  {
    className:
      "boxLeft col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 d-flex p-0 m-0 justify-content-center align-items-center",
  },
  [layoutCircle,
  boxLogo]
);
