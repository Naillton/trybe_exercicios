// Verifique se a importação do arquivo correto está sendo feita.
/* describe('A função getPokemonDetails', (done) => {
    it('retorna erro quando procuramos um pokemon que não existe no banco de dados', () => {
    getPokemonDetails(() => {
        try {
            expect(null).toEqual('Não temos esse pokémon para você :(');
            done();
        } catch (error) {
            done(error);
        }
    });
}); */
const { getPokemonDetails } = require('./exercicio8.js');

describe("A função getPokemonDetails", () => {
    it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
      const expectedError = new Error('Não temos esse pokémon para você :(');
  
      function callback(error, result) {
        expect(error).toEqual(expectedError);
        done();
      }
  
      getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
    });
  
    it("retorna um pokemon que existe no banco de dados", (done) => {
      const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
  
      function callback(err, result) {
        expect(result).toBe(expectedString);
        done();
      }
  
      getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
    });
  });