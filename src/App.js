import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Product from './product';
import Registrasi from './Registrasi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello nama="Chandra Gunawan" pesan="Selamat datang di kelas IF31 PW2"></Hello>
        <Hello></Hello>
        <Product></Product>
        <Registrasi></Registrasi>

      </header>
    </div>
  );
}

export default App;
