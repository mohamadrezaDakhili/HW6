//radar image
const imgRadar = ViewModel.createElement("img", {
  className: "image",
  style: { width: "20%", height: "100%" },
  src: "Assets/PNG/radar-angle.png",
  alt:"radar"
});

//circle and radar animation
const layoutCircle = ViewModel.createElement(
  "div",
  {
    className: "h-100 col-12 d-flex justify-content-center align-items-center",
  },
  imgRadar
);

//full package box left
const boxLeft = ViewModel.createElement(
  "div",
  {
    className:
      "boxLeft col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 d-flex p-0 m-0 justify-content-center align-items-center",
  },
  layoutCircle
);
