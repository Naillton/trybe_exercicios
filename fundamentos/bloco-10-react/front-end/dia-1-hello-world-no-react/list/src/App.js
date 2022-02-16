import './App.css';

const Task = (value) => {
  return (
    <div>
      <h1>Minha lista de tarefas aprendidas ate aqui</h1>
      <ol className='ordened'>
        <li>{value}</li>
      </ol>
    </div>
  );
}

const listen = ['HTML', 'CSS', 'JavaScript', 'Unit Test', 'ES6', 'React'];
const str = listen.join(' ');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Task(str)}
      </header>
    </div>
  );
}

export default App;
