export class Negociacao {
    constructor(negociacaoData) {
        this.data = negociacaoData.data;
        this.quantidade = negociacaoData.quantidade;
        this.valor = negociacaoData.valor;
    }
    get getData() {
        const data = new Date(this.data.getTime());
        return data;
    }
    get getQuantidade() {
        return this.quantidade;
    }
    get getValor() {
        return this.valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criarDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao({
            data,
            quantidade,
            valor
        });
    }
}
