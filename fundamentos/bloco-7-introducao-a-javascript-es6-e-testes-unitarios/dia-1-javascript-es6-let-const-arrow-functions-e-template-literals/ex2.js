const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      oddsAndEvens.sort((a,b) =>{
        if(a > b) return 1;
        if(a < b) return -1;

        return 0
      });

      console.log(`Os numeros ${oddsAndEvens} se encontram ordenados de forma crescente!`)

      //console.log(oddsAndEvens); // será necessário alterar essa linha 😉