import { escapar } from "../decorators/escapar.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    @escapar
    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
            ${
                model.listar().map(negociacao => {
                    return `
                    <tr>
                        <td>${this.formatarData(negociacao.getData)}</td>
                        <td>${negociacao.getQuantidade}</td>
                        <td>${negociacao.getValor}</td>
                    </tr>
                    `;
                })
            }
            </tbody>
        </table>
        `;
    }

    public update(model: Negociacoes) : void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    private formatarData(data: Date): string
    {
        return new Intl.DateTimeFormat().format(data);
    }
}