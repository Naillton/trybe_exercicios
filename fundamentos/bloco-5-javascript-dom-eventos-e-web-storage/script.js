function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
    //atribuindo li em ul
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    
    const dias = dezDaysList

    for(let i = 0; i < dias.length; i += 1){
        let list = dias[i]
        
        let data = document.getElementById('days')
        let lista = document.createElement('li')
        lista.innerText = list
        lista.className = 'day'
        data.appendChild(lista)
    }

    //adicionando a classe feriado as listas
    let date = document.querySelectorAll(".day")
    for(let i = 0; i < date.length; i += 1){
      let element = date[i]
      if(element.innerHTML.includes(24)){
        element.classList.add('holiday')
      }else if(element.innerHTML.includes(25)){
        element.classList.add('holiday')
      }else if(element.innerHTML.includes(31)){
        element.classList.add('holiday')
      }
    }

    //adicionando classes para as sextas feiras
    let dateS = document.querySelectorAll(".day")
    for(let i = 0; i < dateS.length; i += 1){
      let element = dateS[i]
      if(element.innerHTML.includes(25)){
        element.classList.add('friday')
      }else if(element.innerHTML === '4'){
        element.classList.add('friday')
      }else if(element.innerHTML === '11'){
        element.className = 'day friday'
      }else if(element.innerHTML === '18'){
        element.classList.add('friday')
      }
    }

    //
    function ex2(Feriados){
      let btn = document.createElement('button')
      btn.innerText = "Feriados"
      btn.id = "btn-holiday"
      let botao = document.querySelector('.buttons-container')
      botao.appendChild(btn)
    }

