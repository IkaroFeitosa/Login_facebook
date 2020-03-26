import React from 'react';
import logo from './logo.svg';
import './App.css';

import FacebookLogin from 'react-facebook-login';



class App extends React.Component {
  state = {
    usuario: null
  }
  responseFacebook = (response) => {
    localStorage.setItem("authExemploLogado", true);
    localStorage.setItem("userExemplo", JSON.stringify(response));
    this.setState({usuario : response});
    console.log(response);
  }

  async componentWillMount(){
    const data = await localStorage.getItem("userExemplo");
    this.setState({usuario : JSON.parse(data) });
  }

  render() {
    const usuario = this.state.usuario || JSON.parse(localStorage.getItem("userExemplo"));
    
    let content = () => (
      <>
        <h1>LOGIN WITH FACEBOOK</h1>
        <FacebookLogin
          appId="551060735530547" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
      </>
    );
    if (localStorage.getItem("authExemploLogado"))
      content = () => (
        <>
          <div className="card">
            <img src={usuario.picture.data.url} alt="perfil" className="perfil_foto" />
            <div className="content_card">
              <h2>{usuario.name}</h2>
              <p>{usuario.email}</p>
            </div>
          </div>
        </>
      );

    return (
      <div className="App">
        <div className='content'>
          {content()}
        </div>
      </div>
    );
  }



  /*return (
    <div className="App">
      <div className="card">
        <img src={logo} alt="perfil"  className="perfil_foto" />
        <div className="content_card">
          <h2>Ikaro</h2>
          <p>ikarosdasdsadsa</p>
        </div>
      </div>
    </div>
  );*/
}

export default App;
