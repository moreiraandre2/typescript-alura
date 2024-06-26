import { NegociacaoController } from "./controllers/NegociacaoController.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if(form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}

const btnImporta = document.querySelector('#btn-importa');
if(btnImporta) {
    btnImporta.addEventListener('click', () => {
        controller.importar();
    });
}
else {
    throw Error('Botão importa não encontrado');
}



