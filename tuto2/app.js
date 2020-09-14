let n=0

function numberFormat(n){

    return n.toString().padStart(2,'0')

}

function render(){

    const items = [

        'tache1',
        'tache2',
        'tache3',

    ]

const liste = items.map((item, k) =><li key={k}> {item}</li>)    

const title=<React.Fragment><h1 className="title">salut les gueux !
    <span>{numberFormat(n)}</span>
</h1>

<ul>

    <li>{liste}</li>

</ul>
</React.Fragment>

/*console.log(title)*/

ReactDOM.render(title,document.querySelector("#titre1"))

}


render()

window.setInterval(()=>{
    n++
    render()

},1000)