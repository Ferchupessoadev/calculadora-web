import Display from "./display.js";
import Calculadora from "./calculadora.js";

addEventListener("DOMContentLoaded",()=> {
    const calculadora =  new Calculadora;
    const display = new Display;
    display.setCalculadora(calculadora);
})