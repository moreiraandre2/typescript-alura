import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
            ${model.listar().map(negociacao => {
            return `
                    <tr>
                        <td>${new Intl.DateTimeFormat().format(negociacao.getData)}</td>
                        <td>${negociacao.getQuantidade}</td>
                        <td>${negociacao.getValor}</td>
                    </tr>
                    `;
        })}
            </tbody>
        </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
