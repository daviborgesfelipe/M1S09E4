var Filme = /** @class */ (function () {
    function Filme() {
    }
    return Filme;
}());
var filme = new Filme();
filme.nomeFilme = "Interestelar";
filme.anoDeLancamento = 2014;
filme.diretor = "Christopher Nolan";
console.log("Nome do filme \u00E9 ".concat(filme.nomeFilme));
console.log("Ano de lan\u00E7amento do filme \u00E9 ".concat(filme.anoDeLancamento));
console.log("Nome do diretor do filme \u00E9 ".concat(filme.diretor));
console.log(filme);
