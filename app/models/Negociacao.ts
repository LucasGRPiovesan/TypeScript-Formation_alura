export class Negociacao {

    constructor(
        private _data: Date, 
        public readonly valor: number, 
        public readonly quantidade: number
    ) {}

    
    get data() : Date {

        const data = new Date(this._data.getTime());
        return data;
    }
    

    get volume(): number {

        return this.quantidade * this.valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {

        const exp = /-/g;
        const valor = parseFloat(valorString);
        const quantidade = parseInt(quantidadeString);
        const date = new Date(dataString.replace(exp, ','));
        return new Negociacao(date, valor, quantidade);
    }
}