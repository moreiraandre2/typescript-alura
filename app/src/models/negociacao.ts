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

    public get getData(): Date {
        const data = new Date(this.data.getTime());
        return data;
    }

    public get getQuantidade(): number {
        return this.quantidade;
    }

    public get getValor(): number {
        return this.valor;
    }

    public  get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criarDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString)
        
        return new Negociacao(
            {
                data,
                quantidade,
                valor         
            }
        );
    }
}