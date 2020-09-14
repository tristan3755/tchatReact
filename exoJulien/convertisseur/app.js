class Convertisseur extends React.Component{


    constructor(props){
        super(props)
    this.state = {n:0}
    this.Temp=this.Temp.bind(this)
    this.Far=this.Far.bind(this)

    }


    Temp(e){


        this.setState({n:e.target.value})
    
    }

    Far(e){

        let degrésEnFar=e.target.value
        let degrésEnCelsus=5/9*(degrésEnFar-32)
        this.setState({n:degrésEnCelsus})

    }



    render () {

    let degrésEnCelsus=this.state.n
    let degrésEnFar=(degrésEnCelsus*9/5)+32
    let retour=""

if(degrésEnCelsus<100){

retour="l\'eau ne bout pas"


}else{


    retour="tu peux mettre les pâtes"

}


        return <React.Fragment>
    

<label htmlFor="valeurDegrés">Entrez une valeur en degrés</label>
<input name="valeurDegré" value= {degrésEnCelsus} onChange={this.Temp}></input><br></br>
<label htmlFor="Fareneiht">température en F</label>
<input name="Fareneiht" value={degrésEnFar}  onChange={this.Far}></input>

<h2> {retour} </h2>

        </React.Fragment> 
    
    }

}


function Home(){

    return <React.Fragment>

    <Convertisseur></Convertisseur>

    </React.Fragment>
    
}
    
    
ReactDOM.render(<Home></Home>,document.querySelector('section'))