

let menu = [{ nom: "Accueil", lien: "#" }, { nom: "A propos", lien: "#" }, { nom: "A bout", lien: "#" }]


let monFooter = [{ param: "copyright" }, { param: "tous droits reservés" }]


class NavBar extends React.Component {

    render() {

        return (<React.Fragment>
            <h1>{this.props.titre}</h1>
            <nav>
                <ul>
                    {this.props.menu.map((elem, key) => {
                        return < li key={key} > <a href={elem.lien} > {elem.nom} </a></li>
                    })}
                </ul>
            </nav>
        </React.Fragment>)
    }
}


class MonFooter extends React.Component {

    render() {
        return (


            <React.Fragment>



                {this.props.monFooter.map((monElem, key) => {

                    return <li key={key}> <p> {monElem.param}</p></li>

                })}



            </React.Fragment>


        )



    }
}





class Horloge extends React.Component {

    constructor(props) {

        super(props)

        this.state = { date: new Date() }
        this.timer = null
        this.changementdEtat=this.changementdEtat.bind(this)

    }


    componentDidMount() {

        this.timer = window.setInterval(this.changementdEtat.bind(this), 1000)



    }




    ComponentwillUnmount() {

        window.clearInterval(this.timer)

    }

    changementdEtat() {


        this.setState({ date: new Date() })


    }

    render() {


        return <React.Fragment>

            il est {this.state.date.toLocaleTimeString()} guignole

        </React.Fragment>

    }


}

/************************incermenter **********************************************************/

class Incrementer extends React.Component{


    constructor(props){
    super(props)
    this.state = {n: props.start}
    this.Numero = null




}

componentDidMount(){

    this.Numero = window.setInterval(this.increment.bind(this),1000)



    }


    ComponentwillUnmount(){

        window.clearInterval(this.Numero)

    }

    increment (){


        this.setState(function (state,props){
            
            return {n: state.n + props.step}

    })

    }


    

    render () {

    
        return <React.Fragment>

           Le nombre de dollars que je me fais  {this.state.n} guignole

        </React.Fragment> 
    
    }

}


Incrementer.defaultProps = {

    start:0,
    step: 1


}

/******************************incrementer************************************************ */


class ManualIncrementer extends React.Component {


    constructor (props){

    super(props)
    this.state = {n:0}
}


increment (){


    this.setState((state,props) =>({n: state.n + 1}))

}

deincrement (){

    this.setState((state,props) =>({n: state.n - 1}))

}

render () {

    
    return <React.Fragment>

     valeur : {this.state.n} <button onClick={this.increment.bind(this)}>augmenter</button>
     <button onClick={this.deincrement.bind(this)}>diminuer</button>

    </React.Fragment> 

}

}


/**************************************formulaire****************************************** */



class Formulaire extends React.Component{


    constructor(props){
        super(props)
        this.state={nom:'julien'}
        this.changeInput=this.changeInput.bind(this)

    }

changeInput(e){

    console.log(e.target.value)
    this.setState({nom:e.target.value})

}



render (){


return (

<React.Fragment>

<label htmlFor="nom">Entrez votre nom </label>
<input name="nom" value={this.state.nom} onChange={this.changeInput}></input><br></br>
<h2>salut {this.state.nom}</h2>

</React.Fragment>

)
}




}





ReactDOM.render(<NavBar titre="MonSite" menu={menu}></NavBar>, document.querySelector('header'));
ReactDOM.render(<Horloge></Horloge>, document.querySelector('.time'));
ReactDOM.render(<Incrementer></Incrementer>, document.querySelector('.incrementer'));
ReactDOM.render(<ManualIncrementer></ManualIncrementer>, document.querySelector('.manual'));
ReactDOM.render(<Formulaire></Formulaire>, document.querySelector('.formulaire'));

ReactDOM.render(<MonFooter monFooter={monFooter}></MonFooter>, document.querySelector('footer'));

