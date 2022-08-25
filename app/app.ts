import { NegociacaoController } from "./controllers/Negociacao-Controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if (form) {
    
    form.addEventListener('submit', (event: Event) => {
    
        event.preventDefault();
        controller.adiciona();
    });
} else {

    throw new Error("Não foi possível iniciar a aplicação.");
}