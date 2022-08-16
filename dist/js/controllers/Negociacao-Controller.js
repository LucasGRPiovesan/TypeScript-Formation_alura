import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputValor = document.querySelector("#valor");
        this.inputQuantidade = document.querySelector("#quantidade");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const valor = parseFloat(this.inputValor.value);
        const quantidade = parseInt(this.inputQuantidade.value);
        const date = new Date(this.inputData.value.replace(exp, ','));
        return new Negociacao(date, valor, quantidade);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputQuantidade.value = '';
        this.inputData.focus();
    }
}
