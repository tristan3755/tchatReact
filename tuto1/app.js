let n=0

function render(){

const title=React.createElement('h1',{},'bonjour les gueux!',React.createElement('span',{},n))

/*console.log(title)*/

ReactDOM.render(title,document.querySelector("#titre1"))

}


render()

window.setInterval(()=>{
    n++
    render()

},1000)