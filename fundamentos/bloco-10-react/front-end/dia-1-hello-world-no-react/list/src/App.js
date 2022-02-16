import './App.css';

const listen = ['HTML', 'CSS', 'JavaScript', 'Unit Test', 'ES6', 'React'];

const Task = (value) => {
  return value.map((listens) => {
    return (
          <li>{listens}</li>
    );
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1>Minha lista de tarefas aprendidas ate aqui</h1>
          <ol className='ordened'>
            {Task(listen)}
          </ol>
        </div> 
      </header>
    </div>
  );
}

export default App;
