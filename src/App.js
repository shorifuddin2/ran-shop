
import Quetion from './components/Quetion/Quetion';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shop/Shop';
import  './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Quetion></Quetion>
      <Cart></Cart>
    </div>
  );
}

export default App;
