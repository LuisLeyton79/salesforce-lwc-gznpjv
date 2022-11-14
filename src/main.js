import { createElement } from "lwc";
import App from "x/app";
import Contacto from "lWC"

const elm = createElement("x-app", { is: App });
document.body.appendChild(elm);
const cont = createElement("LWC", { is: Contacto});
document.body.appendChild(cont);
