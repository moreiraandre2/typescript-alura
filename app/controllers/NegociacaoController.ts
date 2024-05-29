import { DiaDaSemana } from "../enums/diaDaSemana.js";
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
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona() : void {
        const negociacao = this.criarNegociacao();
        if(!this.ehDiaUtil(negociacao.getData)){
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
            return;
        }
        this.negociacoes.adicionar(negociacao);
        this.atualizarView();
        this.limparFormulario(
            [
                this.inputData,
                this.inputQuantidade,
                this.inputValor
            ],
            this.inputData
        );

    }

    private criarNegociacao(): Negociacao {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value)
        
        return new Negociacao(
            {
                data,
                quantidade,
                valor         
            }
        );
    }

    private limparFormulario(inputs: Array<any>, inputFocus: HTMLInputElement) {
        inputs.map(element => {
            element.value = ''
        });

        inputFocus.focus();
    }

    private atualizarView()
    {
        this.mensagemView.update('Negociação criada com sucesso!');
        this.negociacoesView.update(this.negociacoes);
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }
}