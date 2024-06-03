var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoExecucao } from "../decorators/logar-tempo-de-execucao.js";
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
        const negociacao = Negociacao.criarDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        this.negociacoes.adicionar(negociacao);
        this.mensagemView.update('Negociação criada com sucesso!');
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario([
            this.inputData,
            this.inputQuantidade,
            this.inputValor
        ], this.inputData);
    }
    limparFormulario(inputs, inputFocus) {
        inputs.map(element => {
            element.value = '';
        });
        inputFocus.focus();
    }
}
__decorate([
    logarTempoExecucao()
], NegociacaoController.prototype, "adiciona", null);
