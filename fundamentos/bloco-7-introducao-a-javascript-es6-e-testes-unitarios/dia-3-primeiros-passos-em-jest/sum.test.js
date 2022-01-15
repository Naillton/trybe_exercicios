const sum = require('./sum');

describe('sum', () => {
    it('testa se o retorno de 4 e 5 e 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    it('testa se o retorno de 0 e 0 e 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    it('testa se o retorno de 4 e "5" = Erro', () => {
        expect(() => {sum(4, "5") }).toThrow();
    });
});