class NegociacaoController {


    constructor() {
        let docSelect = document.querySelector.bind(document);
        this._inputData = docSelect("#data");
        this._inputQuantidade = docSelect("#quantidade");
        this._inputValor = docSelect("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
        this._tableaNegociacoes = new TabelaNegociacoesView(docSelect('#tabelaNegociacoes'));
        this._mensagem = new Mensagem();
        this._componenteMensagem = new MensagemView(docSelect('#mensagemSucesso'));

        this._tableaNegociacoes.update(this._listaNegociacoes);
    }

    adiciona(event) {

        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._tableaNegociacoes.update(this._listaNegociacoes);

        this._mensagem.mensagem = 'Negociação incluída com sucesso.'
        this._componenteMensagem.update(this._mensagem);
        
        this._limpaFormulario();
    }

    _criaNegociacao(){
        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario(){

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}