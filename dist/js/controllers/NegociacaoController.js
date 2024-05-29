import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagenView.js";
import { NegociacoesView } from "../views/negociacoesView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoes-view");
        this.mensagemView = new MensagemView("#mensagem-view");
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adicionar(negociacao);
        this.mensagemView.update('Negociação criada com sucesso!');
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario([
            this.inputData,
            this.inputQuantidade,
            this.inputValor
        ], this.inputData);
    }
    criarNegociacao() {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao({
            data,
            quantidade,
            valor
        });
    }
    limparFormulario(inputs, inputFocus) {
        inputs.map(element => {
            element.value = '';
        });
        inputFocus.focus();
    }
}
