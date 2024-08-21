
import './App.css'

function App() {

  const saludando = () => {
    alert("Hiciste click")
  }

  return (
    <>
      <div id="app">
        <header>
          <div className="logo">
              <img src="/img/nike.jpg" alt="naiki"/>
              <span className='naiki'>Naiki</span>
              <button className='naiki' onClick={saludando}>nenene</button>
          </div>
        <nav>
            <ul>
                <li><a href="#">Hombre</a>
                    <ul className="dropdown">
                        <li><a href="#">Remeras</a></li>
                        <li><a href="#">Calzado </a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Gym</a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Moda</a></li>
                    </ul>
                </li>
                <li><a href="#">Mujer</a>
                    <ul className="dropdown">
                        <li><a href="#">Remeras</a></li>
                        <li><a href="#">Calzado </a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Gym</a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Moda</a></li>
                    </ul>
                </li>
                <li><a href="#">Niño</a>
                    <ul className="dropdown">
                        <li><a href="#">Remeras</a></li>
                        <li><a href="#">Calzado </a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Gym</a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Moda</a></li>
                    </ul>
                </li>
                <li><a href="#">Accesorios</a>
                    <ul className="dropdown">
                        <li><a href="#">Remeras</a></li>
                        <li><a href="#">Calzado </a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Gym</a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Moda</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        </header>
      </div>
    </>
  )
}

export default App
