export class Negociacao {
    constructor(_data, valor, quantidade) {
        this._data = _data;
        this.valor = valor;
        this.quantidade = quantidade;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const valor = parseFloat(valorString);
        const quantidade = parseInt(quantidadeString);
        const date = new Date(dataString.replace(exp, ','));
        return new Negociacao(date, valor, quantidade);
    }
}
