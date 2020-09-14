class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nom:"", pseudo:"", accueil:"Connectez-vous"};
    this.changeInput = this.changeInput.bind(this);
    this.login = this.login.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  changeInput(e) {
    console.log(e.target.value);
    this.setState({ nom:e.target.value });
  }

  login(e) {
    this.setState({ pseudo: this.state.nom },()=> {
      if (this.state.pseudo.length == 0){
        this.setState({ accueil: "Connectez-vous" });
      } else {
        this.setState({ accueil: "bonjour" + " " + this.state.nom });
      }
      this.props.name(this.state.nom)
    });
  }

  refresh(e) {
    this.setState({ nom: "", pseudo: "", accueil: "Connectez-vous" },()=>{
      this.props.name(this.state.nom)
    })
  }

  render() {
    let connexion = "";
    let champs = "";
    if (this.state.pseudo.length == 0) {
      connexion = (
        <input
          type="submit"
          value="se connecter"
          className="log"
          onClick={this.login}
        ></input>
      );
      champs = (
        <input
          name="Login"
          placeholder="Login"
          className="login"
          value={this.pseudo}
          onChange={this.changeInput}
        ></input>
      );
    } else {
      connexion = (
        <input
          type="submit"
          value="se deconnecter"
          className="log"
          onClick={this.refresh}
        ></input>
      );
    }

    return (
      <React.Fragment>
        <header>
          <h1>Ma Messagerie React</h1>

          <h2>{this.state.accueil}</h2>

          <div>
            {champs}
            {connexion}
          </div>
        </header>
      </React.Fragment>
    );
  }
}

/**************************************************************************milieu****************************************************************/

class Connect extends React.Component {

  constructor(props){
    super(props)
    this.state={text:'',mess:[]}
    this.Changtext = this.Changtext.bind(this);
    this.envoyer = this.envoyer.bind(this);  
  }

  envoyer(e){
  let messages = this.state.mess
  messages.push({users:this.props.user,content:this.state.text,date:new Date()})
  this.setState({mess:[...messages],text:''})  
  }

  Changtext(e) {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  }

  render() {
  let tableau=this.props.tableUsers.map((user,K)=><h3 key={K}>{user}</h3>)
  let Mes=this.state.mess.map((sms,K)=><p key={K}>{sms.users}{sms.content}{sms.date.toLocaleTimeString()}</p>)

  let redaction = ""

  if(this.props.tableUsers.length>0){

    redaction =  <div className="text">
    <textarea placeholder="rédigez votre message ici" onChange={this.Changtext} value={this.state.text}></textarea>
    <input type="submit" className="bouton" onClick={this.envoyer}></input>
    </div>

  }


  return (
      <React.Fragment>
        <section>
          <div className="connection">
            <h1>Qui est connecté ?</h1>
            {tableau}
          </div>
          <div className="message">
          <h2>Messages</h2>
          <div className="appli">
          {Mes} 
          </div>
          {redaction}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

/***********************************************footer et app**********************************************************/

function PiedePage(){
 return (
      <React.Fragment>
        <footer>
        <i className="far fa-copyright"></i>
          <h3> Tous droits réservés 2020</h3>
        </footer>
      </React.Fragment>
    );
}

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={Beco:false,User:'',tableUsers:[],tableMessage:[]}
    this.chgCo=this.chgCo.bind(this)
}

  chgCo(nom){

    let utilisateurs=this.state.tableUsers

    if(nom===''){
      console.log('le nom est vide')
      this.setState({Beco:false,User:'',tableUsers:[],tableMessage:[]})
    }else{
      utilisateurs.push(nom)
      console.log('le nom est' + ' ' + nom)
      this.setState({Beco:true,User:nom,tableUsers:utilisateurs})
    }
}

  render(){

  return (
    <React.Fragment>
      <Login name={this.chgCo}></Login>
      <Connect tableUsers={this.state.tableUsers} user={this.state.User}></Connect>
      <PiedePage></PiedePage>
    </React.Fragment>
  )
}
}

ReactDOM.render(<App></App>,document.querySelector("body"));

