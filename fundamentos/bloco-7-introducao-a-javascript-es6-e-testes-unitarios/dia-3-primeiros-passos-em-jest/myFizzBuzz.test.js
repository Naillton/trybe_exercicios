const myFizzBuzz = (num) => {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

  describe('myFizzBuzz', (num) => {
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é fizzbuzz', () => {
        expect(myFizzBuzz(105)).toBe('fizzbuzz');
    });

    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é fizz', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });

    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é buzz', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });

    it('Faça uma chamada com um número divisível por 4 e verifique se o retorno é o proprio numero', () => {
        expect(myFizzBuzz(4)).toBe(4);
    });

    it('Faça uma chamada com um número divisível por um parametro string e verifique se o retorno é false', () => {
        expect(myFizzBuzz('4')).toBe(false);
    });
  });