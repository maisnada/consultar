class Pessoa{

    nome:string;
    idade:number;
    
    constructor(nome:string, idade:number){

        this.nome = nome;
        this.idade = idade;        
    }

    anoNascimento(): number{

        let n:number = 5;

        n = n + 2;

        return new Date().getFullYear() - this.idade;

    }
    
}

export default Pessoa;