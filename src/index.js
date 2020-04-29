const ViewModel = {};

ViewModel.createTextNode  = (comp) => {
  return document.createTextNode(comp);
};

ViewModel.createElement = function (type, props, children) {
  props = props || {};
  const element = document.createElement(type);
  for (const property in props) {
    if (property === "style") {
      Object.assign(element.style, props["style"]);
    } else if (property === "className") {
      element.className = props["className"];
    } else if (typeof property === "function") {
      element[property] = props[property];
    } else {
      element.setAttribute(property, props[property]);
    }
  }

  if (children) {
    if (Array.isArray(children)) {
      for (let index = 0; index < children.length; index++) {
        element.appendChild(
          typeof children[index] === "string"
            ? this.createTextNode (children[index])
            : children[index]
        );
      }
    } else {
      element.appendChild(
        typeof children === "string" ? this.createTextNode (children) : children
      );
    }
  }
  return element;
};

ViewModel.render = function (element, stem) {
  var root = document.querySelector(stem);
  root.innerHTML = "";
  root.appendChild(element);
};
