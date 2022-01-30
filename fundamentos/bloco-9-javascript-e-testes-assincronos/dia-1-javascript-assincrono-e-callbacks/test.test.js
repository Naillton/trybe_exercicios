const uppercase = (str, callback) => {
    setTimeout(() => {
      const result = str.toUpperCase();
      callback(result);
    }, 500);
  };

  test('verificando se a funcao retorna palavra maiuscula',(done) => {
    uppercase('ola', (result) => {
        try {
            expect(result).toEqual('OLA');
            done();
        } catch (error) {
            done(error);
        }
    });
  });