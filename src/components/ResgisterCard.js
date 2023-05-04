import './css/loginCard.css';
import "https://kit.fontawesome.com/66aa7c98b3.js"
export default function RegistroCard(){
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <form className="card-form">
            <div className="input">
              <input type="text" className="input-field" required/>
              <label className="input-label">Full name</label>
            </div>
            <div className="input">
              <input type="email" className="input-field" required/>
              <label className="input-label">Email</label>
            </div>
            <div className="input">
              <input type="password" className="input-field" required/>
              <label className="input-label">Password</label>
            </div>
            <div className="action">
              <button className="action-button">Logar</button>
            </div><p>Registrar-se com:</p>
            <ul class="sci">
              <li>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </li>
            </ul>
          </form>
          <p>By signing up you are agreeing to our <a id='term' href="#">Terms and Conditions</a></p>
        </div>
      </div>
    </div>
  )
}

