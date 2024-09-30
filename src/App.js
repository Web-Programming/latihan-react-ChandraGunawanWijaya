import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Product from './product';
import Registrasi from './Registrasi';

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className='App'>
        <NavLink to="/" className="navbar-brand" exact="true">
        Navbar
        </NavLink>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    <div className='Main'>
      <Routes>
        {
          routes.map((route,i)) => {
            const {path, Component} = route;
            return <Route key={i} path = {path} element={<Component />} />;
          ))
          }
        }
      </Routes>
    </div>
      </div>
    </React.Suspense>
  );
  //   <div className="App">
  //     <header className="App-header">
  //       <Hello nama="Chandra Gunawan" pesan="Selamat datang di kelas IF31 PW2"></Hello>
  //       <Hello></Hello>
  //       <Product></Product>
  //       <Registrasi></Registrasi>

  //     </header>
  //   </div>
  // );
}

export default App;
