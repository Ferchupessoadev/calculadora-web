export default class Display {
    constructor() {
        this.displayResultadoHTML = document.querySelector(".result");
        this.calculadora = null;
        this.numerosHTML = document.querySelectorAll(".btn-num");
        this.operadoresHTML = document.querySelectorAll(".btn-ope");
        this.botonResultadoHTML = document.querySelector(".btn-result");
        this.borrarUnCaracterHTML = document.querySelector(".btn-delete");
        this.borrarTodoHTML = document.querySelector(".btn-delete-all");
        this.numero1HTML = document.querySelector(".display__num-1");
        this.numero2HTML = document.querySelector(".display__num-2");
        this.displaySigno = document.querySelector(".display__signo");
        this.operadores = undefined;
        this.error = false;
        this.numerosHTML.forEach(numeroHTML => numeroHTML.addEventListener("click",(e)=> this.agregarNumero(e.target.textContent)));
        this.operadoresHTML.forEach(operadorHTML => operadorHTML.addEventListener("click",(e) => this.agregarSigno(e.target.textContent)));
        this.botonResultadoHTML.addEventListener("click",()=> this.calcular());
	    this.borrarTodoHTML.addEventListener("click", ()=> this.borrarTodo());
        this.borrarUnCaracterHTML.addEventListener("click",()=> this.borrarUnCaracter());
    }

    setCalculadora(calc) {
        this.calculadora = calc;
    }


    borrarTodo() {
	    this.numero1HTML.textContent = "";
	    this.numero2HTML.textContent = "";
	    this.error = false;
	    this.displayResultadoHTML.textContent = "";
	    this.operadoresHTML.innerHTML = "";
	    this.operadores = undefined;
    }

    borrarUnCaracter() {
        if(this.numero1HTML.innerHTML != "" || this.numero2HTML.innerHTML != "") {
            if(this.numero1HTML.innerHTML != "") {
		    
            }
        }
    }

    agregarNumero(num) {
        if(this.error) {
            this.displayResultadoHTML.innerHTML = "";
            this.error = false;
        };
        if(this.operadores == undefined || this.operadores == null) this.numero1HTML.innerHTML += num 
        else this.numero2HTML.innerHTML += num;
    }

    agregarSigno(signo) {
        if(this.operadores != undefined) {
            this.calcular();
            this.displaySigno.innerHTML = signo;
            this.operadores = signo;
        } else {
            if(this.numero1HTML.innerHTML != "") {
                this.displaySigno.innerHTML = signo;
                this.operadores = signo;
            } else {
                this.agregarNumero(signo);
            }
        }
    }

    calcular() {
        let resultado;
        if(this.numero1HTML.innerHTML != "" && this.numero2HTML.innerHTML != "") {
            let num1 = parseFloat(this.numero1HTML.textContent);
            let num2 = parseFloat(this.numero2HTML.textContent);
            resultado = this.calculadora.calcular(this.operadores,num1,num2);
            if(resultado == "math ERROR") {
                this.numero1HTML.textContent = "";
                this.numero2HTML.textContent = "";
                this.displaySigno.textContent = "";
                this.operadores = undefined; 
                this.displayResultadoHTML.textContent = resultado;
                this.error = true;
            } else {
                this.numero1HTML.textContent = resultado;
                this.numero2HTML.textContent = "";
                this.displaySigno.textContent = "";
                this.operadores = undefined; 
                this.displayResultadoHTML.textContent = resultado;
            }
        } else if(this.numero1HTML.innerHTML != "") {
            this.displayResultadoHTML.textContent = this.numero1HTML.innerHTML;
        } 
    }

}
