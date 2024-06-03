import { logarTempoExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagenView.js";
import { NegociacoesView } from "../views/negociacoesView.js";

export class NegociacaoController {
    private inputData : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputValor : HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoes-view");
    private mensagemView = new MensagemView("#mensagem-view");

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    @logarTempoExecucao()

    adiciona() : void {
        const negociacao = Negociacao.criarDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value,
        );
        this.negociacoes.adicionar(negociacao);
        this.mensagemView.update('Negociação criada com sucesso!');
        this.negociacoesView.update(this.negociacoes);

        this.limparFormulario(
            [
                this.inputData,
                this.inputQuantidade,
                this.inputValor
            ],
            this.inputData
        );

    }    

    limparFormulario(inputs: Array<any>, inputFocus: HTMLInputElement) {
        inputs.map(element => {
            element.value = ''
        });

        inputFocus.focus();
    }
}