import { message, funct, Fruit as f, default as default_function } from "./library.js";
import * as haseeb from "./library2.js";
import { abc } from "./library2.js";

console.log(message);
document.body.innerHTML = message;
funct();
let F = new f("banana");

default_function();
console.log(abc);
console.log(haseeb.ins);
haseeb.funct2("Haseeb");
haseeb.funct2("Sami");
default_function();