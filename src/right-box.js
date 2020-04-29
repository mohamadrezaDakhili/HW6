// checkbox remember me
const checkboxRemember =ViewModel.createElement("input" , {type:"checkbox" , name:"check"})
//text Remember me
const textRemember = ViewModel.createElement(
  "span",
  {
    className: "mr-2",
    id: "rememberMe",
  },
  "مرا به خاطر بسپار"
);
// box remember me
const boxRemember = ViewModel.createElement(
  "div",
  {
    className: "mt-3 d-flex justify-content-end align-items-center",
  },
  [textRemember, checkboxRemember]
);
// button
const button = ViewModel.createElement("button", {
  className: "button w-100 mt-5",
},
"ورود");
//icon input captcha
const iconCaptcha = ViewModel.createElement(
  "span",
  { className: "iconInput ml-5" },
  ViewModel.createElement("i", { className: "fas fa-keyboard" })
);
//inout captcha
const inputCaptcha = ViewModel.createElement("input", {
  className: "inputUser w-100 ml-5",
  type: "text",
  placeholder: "کد امنیتی",
});
// box input captcha
const boxInputCaptcha = ViewModel.createElement(
  "div",
  {
    className: "w-75 position-relative m-0 p-0 d-flex justify-content-end",
  },
  [inputCaptcha, iconCaptcha]
);

// image captcha
const imgCaptcha = ViewModel.createElement("img", {
  className: "w-25",
  src: "Assets/PNG/captcha.png",
  alt: "captcha",
});

// create box for captcha code
const boxCaptcha = ViewModel.createElement(
  "div",
  {
    className: "boxHover d-flex align-items-center",
  },
  [imgCaptcha, boxInputCaptcha]
);

//create box input and icon for input | content => type input |  holder => placeHolder input | classIcon => class icon in fontawesome.com
let boxInput = function (content, holder, classIcon) {
  //create input
  let createInput = (content, holder) => {
    const input = ViewModel.createElement("input", {
      className: "inputUser w-100",
      type: content,
      placeHolder: holder,
    });
    return input;
  };
  // create icon for input box
  let Icon = (classIcon) => {
    const iconUser = ViewModel.createElement("i", {
      className: "fas" + " " + classIcon,
    });
    const boxIcon = ViewModel.createElement(
      "span",
      { className: "iconInput" },
      iconUser
    );
    return boxIcon;
  };
  // create box input
  const boxInput = ViewModel.createElement("div", { className: "boxHover" }, [
    createInput(content, holder),
    Icon(classIcon),
  ]);
  return boxInput;
};

//text login to accunt
const textUserPass = ViewModel.createElement(
  "span",
  {
    className: "mb-3",
    id: "textWriteUser",
  },
  "جهت ورود به برنامه،نام کاربری و رمز عبور خود را وارد نمایید"
);
const textAccunt = ViewModel.createElement(
  "span",
  { id: "textLogin" },
  "ورود به حساب کاربری"
);

//box package login
const boxLogin = ViewModel.createElement(
  "div",
  {
    style: { height: "85%" },
    className:
      "col-12 row justify-content-center flex-column align-items-end p-0 m-0",
  },
  [
    textAccunt,
    textUserPass,
    boxInput("text", "نام کاربری", "fa-user"),
    boxInput("password", "رمز عبور", "fa-lock"),
    boxCaptcha,
    button,
    boxRemember,
  ]
);

//text login
const textLogin = ViewModel.createElement(
  "div",
  {
    className:
      "col-12 RightBoxTop d-flex p-0 m-0 justify-content-end align-items-end",
  },
  "ورود"
);
//box for text login in top page
const boxTextLogin = ViewModel.createElement(
  "div",
  {
    className:
      "d-flex col-xl-9 col-lg-10 col-md-11 col-sm-11 col-11 p-0 m-0 flex-wrap",
  },
  [textLogin, boxLogin]
);
//package box right
const boxRight = ViewModel.createElement(
  "div",
  {
    className:
      "h-100 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 d-flex justify-content-center",
  },
  boxTextLogin
);
