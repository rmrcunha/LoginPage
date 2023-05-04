import './css/loginCard.css';

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
            </div>
          </form>
          <p>By signing up you are agreeing to our <a id='term' href="#">Terms and Conditions</a></p>
        </div>
      </div>
    </div>
  )
}

