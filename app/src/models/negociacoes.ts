import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes : Array<Negociacao> = [];

    public adicionar(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public listar(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}