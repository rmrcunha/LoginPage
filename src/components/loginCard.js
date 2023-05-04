import './css/loginCard.css';

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
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginCard;