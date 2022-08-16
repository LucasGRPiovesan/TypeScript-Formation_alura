import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {

        this.inputData = document.querySelector("#data");
        this.inputValor = document.querySelector("#valor");
        this.inputQuantidade = document.querySelector("#quantidade");
    }

    adiciona(): void {

        const negociacao = this.criaNegociacao();
        
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {

        const exp = /-/g;
        const valor = parseFloat(this.inputValor.value);
        const quantidade = parseInt(this.inputQuantidade.value);
        const date = new Date(this.inputData.value.replace(exp, ','));

        return new Negociacao(date, valor, quantidade);
    }

    limparFormulario(): void {

        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputQuantidade.value = '';

        this.inputData.focus();
    }
}