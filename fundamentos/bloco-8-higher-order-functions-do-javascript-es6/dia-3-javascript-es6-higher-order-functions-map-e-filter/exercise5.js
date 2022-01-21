/* const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ]; */

  const authors = [
    'J. R. R. Tolkien',
    'George R. R. Martin',
    'Frank Herbert',
    'Isaac Asimov',
  ]
  
  function fantasyOrScienceFictionAuthors(array) {
    const autores = array.map((autor) => {
        return autor
    });
    return autores.sort();
  }

  console.log(fantasyOrScienceFictionAuthors(authors));