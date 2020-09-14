

let menu = [{ nom: "Accueil", lien: "#" }, { nom: "A propos", lien: "#" }, { nom: "A bout", lien: "#" }]


let monFooter=[{param:"copyright"},{param:"tous droits reservés"}]


function NavBar(props) {
    return (<React.Fragment>
        <h1>{props.titre}</h1>
        <nav>
            <ul>
                {props.menu.map((elem, key) => {   
                return < li key={key} > <a href={elem.lien} > {elem.nom} </a></li>
                })}
            </ul>
        </nav>
        </React.Fragment>  )
}


function MonFooter(props){


    return(
        

<React.Fragment>



{props.monFooter.map((monElem,key)=>{

return <li key={key}> <p> {monElem.param}</p></li>

})}


    
</React.Fragment>


)



}


ReactDOM.render(<NavBar titre="MonSite" menu={menu}></NavBar>, document.querySelector('header'));

ReactDOM.render(<MonFooter  monFooter={monFooter}></MonFooter>, document.querySelector('footer'));

