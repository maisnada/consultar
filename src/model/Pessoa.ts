class Pessoa{

    nome:string;
    idade:number;

    constructor(nome:string, idade:number){

        this.nome = nome;
        this.idade = idade;
    }

    anoNascimento(): number{

        return new Date().getFullYear() - this.idade;

    }
    
}

export default Pessoa;