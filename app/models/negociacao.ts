interface NegociacaoData {
    data: Date,
    quantidade : number, 
    valor : number
}

export class Negociacao {
    private data : Date;
    private quantidade : number;
    private valor : number;

    constructor(negociacaoData : NegociacaoData) {
        this.data = negociacaoData.data;
        this.quantidade = negociacaoData.quantidade;
        this.valor = negociacaoData.valor;
    }

    get getData(): Date {
        const data = new Date(this.data.getTime());
        return data;
    }

    get getQuantidade(): number {
        return this.quantidade;
    }

    get getValor(): number {
        return this.valor;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }
}