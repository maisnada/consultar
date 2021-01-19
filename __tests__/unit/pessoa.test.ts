import Pessoa from '../../src/model/Pessoa';

describe('Pessoa', () => {

    it('Deve premitir a criação de uma pessoa passando o nome e idade no construtor', () => {

        const bruno: Pessoa = new Pessoa('Bruno Palmito', 32);

        expect(bruno.nome).toBe('Bruno Palmito');

    })

    it('Deve retornar 32', () => {

        const bruno: Pessoa = new Pessoa('Bruno Palmito', 32);

        expect(bruno.anoNascimento()).toBe(1989);

    })
})