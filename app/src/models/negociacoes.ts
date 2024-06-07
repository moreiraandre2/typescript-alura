import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes extends Imprimivel {
    private negociacoes : Array<Negociacao> = [];

    public adicionar(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public listar(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}