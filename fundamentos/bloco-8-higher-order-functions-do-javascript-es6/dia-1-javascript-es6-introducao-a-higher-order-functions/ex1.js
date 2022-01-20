const funcObj = (nome) => {
    const obj = {
        nomeCompleto: nome,
        email: `${nome.replace(" ", "").toLowerCase()}@trybe.com`,
    }
    return obj;
};

const newEmployees = () => {
    const employees = {
      id1: funcObj('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: funcObj('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: funcObj('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(funcObj));