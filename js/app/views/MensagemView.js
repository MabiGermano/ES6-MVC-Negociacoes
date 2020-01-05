class MensagemView extends View{

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return model.mensagem ? `<p class="alert alert-success">${model.mensagem}</p>` : `<p></p>`
    }


}