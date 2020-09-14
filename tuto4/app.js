
class Salut extends React.Component{




render () {

    return <React.Fragment>

        <h1>bonjour {this.props.nom}</h1> 
        <p>
            {this.props.children}
        </p>

    </React.Fragment> 

}


}



class Horloge extends React.Component{

    constructor(props){

    super(props)

    this.state = {date: new Date()}
    this.timer = null

    }


    componentDidMount(){

        this.timer = window.setInterval(this.changementdEtat.bind(this),1000)



        }

    


    ComponentwillUnmount(){

        window.clearInterval(this.timer)

    }

    changementdEtat(){


        this.setState({date: new Date()})


    }

    render () {

    
        return <React.Fragment>

           il est {this.state.date.toLocaleTimeString()} guignole

        </React.Fragment> 
    
    }
    
    
    }

/****************************************************************exo ******************************************************/

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

/****************************************************exo**********************************************/

class ManualIncrementer extends React.Component {


    constructor (props){

    super(props)
    this.state = {n:0}
}


increment (){


    this.setState((state,props) =>({n: state.n + 1}))

}


render () {

    
    return <React.Fragment>

     valeur : {this.state.n} <button onClick={this.increment.bind(this)}>augmenter</button>

    </React.Fragment> 

}

}






function Home(){

return <React.Fragment>

    <Salut nom="ma gueule"/>
    <Salut nom="tarlouze"/>
    <Horloge/> <br></br>
    <ManualIncrementer/>

    
    


</React.Fragment>

}


ReactDOM.render(<Home nom='jean'>salut le reste des cons</Home>,document.querySelector('#titre1'))