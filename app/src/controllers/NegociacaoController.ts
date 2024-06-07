import { domInject } from "../decorators/dom-inject.js";
import { inspect } from "../decorators/inspect-decorator.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagenView.js";
import { NegociacoesView } from "../views/negociacoesView.js";

export class NegociacaoController {
    @domInject('#data')
    private inputData : HTMLInputElement;
    @domInject('#quantidade')
    private inputQuantidade : HTMLInputElement;
    @domInject('#valor')
    private inputValor : HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoes-view");
    private mensagemView = new MensagemView("#mensagem-view");
    private negociacoesService = new NegociacoesService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    @logarTempoExecucao(true)
    @inspect()
    public adiciona() : void {
        const negociacao = Negociacao.criarDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value,
        );
        this.negociacoes.adicionar(negociacao);
        this.mensagemView.update('Negociação criada com sucesso!');
        this.negociacoesView.update(this.negociacoes);
        imprimir(negociacao, this.negociacoes);

        this.limparFormulario(
            [
                this.inputData,
                this.inputQuantidade,
                this.inputValor
            ],
            this.inputData
        );

    }  

    public importar(): void {
        this.negociacoesService.obterNegociacoesDoDia()
        .then(negociacoesDeHoje => {
            for(let negociacao of negociacoesDeHoje) {
                this.negociacoes.adicionar(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }

    private limparFormulario(inputs: Array<any>, inputFocus: HTMLInputElement) {
        inputs.map(element => {
            element.value = ''
        });

        inputFocus.focus();
    }
}