import { Negociacao } from "./Negociacao.js";

export class Negociacoes {

    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {

        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {

        return this.negociacoes;
    }
}