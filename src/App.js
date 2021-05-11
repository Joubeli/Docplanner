import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import {card, clients} from './components/data'


function App() {
  
  return (
    <div className="App">
      <Header />
      <Main card={card} clients={clients} />
    </div>
  );
}

export default App;
