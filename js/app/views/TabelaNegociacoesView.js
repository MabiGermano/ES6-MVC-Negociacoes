class TabelaNegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Data</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Volume</th>
                </tr>
            </thead>
            <tbody>
                ${this._templateLinhas(model)}
            </tbody>
            <tfoot>
                <tr>
                   <td colspan="3"></td>
                   <td>
                        ${model.negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0.0)}
                   </td>
                </tr>
            </tfoot>
        </table> 
        `;
    }

    _templateLinhas(model) {
        return model.negociacoes.map(negociacao => `
                <tr>
                    <td>${DataHelper.dataParaTexto(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                </tr>
            `).join('');
    }
}