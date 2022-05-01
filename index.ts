class Filme {
nomeFilme:string;
anoDeLancamento:number;
diretor:string;
}

let filme:any = new Filme();

filme.nomeFilme = "Interestelar";
filme.anoDeLancamento = 2014;
filme.diretor = "Christopher Nolan";


console.log(`Nome do filme é ${filme.nomeFilme}`)
console.log(`Ano de lançamento do filme é ${filme.anoDeLancamento}`)
console.log(`Nome do diretor do filme é ${filme.diretor}`)
console.log(filme)