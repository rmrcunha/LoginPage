import './css/loginCard.css';
import "https://kit.fontawesome.com/66aa7c98b3.js"
function LoginCard(){
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <form className="card-form">
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
            </div>
            <p>Fazer login com:</p>
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
        </div>
      </div>
    </div>
  )
}

export default LoginCard;