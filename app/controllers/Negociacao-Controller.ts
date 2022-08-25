import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/Mensagem-View.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { NegociacoesView } from "../views/Negociacoes-View.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private mensagemView = new MensagemView('#mensagemView', true);
    private negociacoesView = new NegociacoesView('#negociacoesView');

    constructor() {

        this.inputData = <HTMLInputElement>document.querySelector("#data");
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {

        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.ehDiaUtil(negociacao.data)) {
            
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas.")
            return;
        } 

        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private ehDiaUtil(data: Date): boolean {

        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {

        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputQuantidade.value = '';

        this.inputData.focus();
    }

    private atualizaView(): void {

        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
}