const sum = require('./sum');

describe('sum', () => {
    it('testa se o retorno de 4 e 5 e 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
});