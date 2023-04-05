export default class Calculadora {
    constructor() {

    }

    calcular(ope,num1,num2) {
        let resultado;
        switch (ope) {
            case "+":
                    resultado = this.sumar(num1,num2);
                break;
            case "-":
                    resultado = this.restar(num1,num2);
                break;
            case "*":
                    resultado = this.multiplicar(num1,num2);
                break;
            case "/":
                    if(num1 == 0 || num2 == 0) return "math ERROR" 
                    resultado = this.dividir(num1,num2);
                break;
            default:
                resultado = num1;
                break;
        } 
        return resultado;
    }

    sumar(num1,num2) {
        let result = num1 + num2
        return result;
    }

    restar(num1,num2) {
        let result = num1 - num2;
        return result;
    }

    multiplicar(num1,num2) {
        let result = num1 * num2;
        return result;
    }

    dividir(num1,num2) {
        let result = num1 / num2;
        return result;
    }

}