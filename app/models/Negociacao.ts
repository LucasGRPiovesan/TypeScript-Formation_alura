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
}