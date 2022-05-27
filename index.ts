class Pessoa{
    constructor(
        public nome: string,
        public email: string,
        public fone: string,
        protected senha: string,
    ){}

    getNome(): string{
        return this.nome
    }
}

class Fisica extends Pessoa{
    constructor(
        nome: string,
        email: string,
        fone: string,
        public cpf:string,
        senha:string,
        ){
        super(nome, email, fone, senha)
    }

    getAllData(): string{
        return "Nome: " +this.nome+" - "+"Email: "+this.email+" - "
        +"Fone: "+this.fone+" - "+"CPF: "+this.cpf
    }

    loginCpf(): void{
        // out: Login com sucesso
        // out: Erro de Login ()
        if ((this.cpf == "013.123.123-09") && (this.senha == "bobesponja")) {
            console.log("Login com sucesso!")
        } else {
            console.log("Erro de Login!")
        }
    }

}

// const pessoa = new Pessoa('Classe Pessoa','pessoa@gmail.com','(88)99999-9999')
const pf = new Fisica('Wellington','well@gmail.com','(88)99901-9090',"013.123.123-09","bobesponja")

// console.log(pessoa.getNome())
console.log(pf.getAllData())
console.log(pf.loginCpf())

