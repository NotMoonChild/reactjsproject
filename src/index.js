class Foo extends React.Component { //Classe di base dove è visibile il passaggio dei dati tramite i Props...
    render() { 
        return <p>Questa è la classe Foo, {this.props.name}!</p>; // {this.props.name} serve proprio come parametro..
    }
}

class Orologio extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() { //Monto l'orologio in modo che si ripeta continuamente il metodo tick()
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() { //Faccio in modo che si aggiorni ogni secondo..
        this.setState({
            date: new Date()
        });
    }

    render() {
        return( // Renderizzo l'orologio e il suo stato..
            <div>
                <p>Questo si aggiorna da solo!..</p>
                <h2>Orario: {this.state.date.toLocaleTimeString()}.</h2> 
            </div>
        )
    }
}

class Interruttore extends React.Component {
    constructor(props){ // Passiamo il costruttore..
        super(props); // Passo i props
        this.state = {acceso: true}; //Indico lo stato dell'interruttore...

        this.handleClick = this.handleClick.bind(this); // Connetto il metodo HandleClick alla funzione
    }

    handleClick() { //Dichiaro la funzione per il click
        this.setState(prevState => ({ // Cambio di stato
            acceso: !prevState.acceso
        }));
    }

    render() { //Renderizzo poi il tutto trasformandolo in HTML
        return(
            <button onClick={this.handleClick}>
                <p>{this.state.acceso ? 'Acceso' : 'Spento'}</p>
            </button>
        );
    }

}

function Blog(props){ //Classe Blog
    const sidebar = ( //Sidebar dove si trovano i punti della lista
        <ul>
            {props.articoli.map((articolo) => //Faccio in modo che mostrino il titolo e l'ID dell'articolo
            <li key={articolo.id}>
                {articolo.titolo}
            </li>)} 
        </ul>
    );
    const contenuto = props.articoli.map((articolo) => //Faccio in modo che venga visualizzato il contenuto...
    <div key={articolo.id}>
        <h3>
            {articolo.titolo}
        </h3>
        <p>{articolo.testo}</p>
    </div>
    );
    return( //Ritorno poi la struttura in HTML
        <div>
        {sidebar}
        <hr />
        {contenuto}
        </div>
    );
}

const articoli = [ //Dichiaro i diversi articoli
    {id: 1, titolo:'Ciao da React.js!', testo: 'Ecco come fare diversi articoli come nei Blog!'},
    {id: 2, titolo:'Non e Difficile!', testo: 'Con poche righe di codice, puoi fare una struttura complessa!'}
];

class FormDiProva extends React.Component { //Form di Prova dove si immetterà un "Nome"
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); //Connetto il metodo di Submit e di Cambio alla funzione principale
    }

    handleChange(event){
        this.setState({value: event.target.value}); //Creo la funzione handleChange dove viene messo il valore 
    }

    handleSubmit(event) {
        alert('E\' stato inserito un nome: ' + this.state.value); //Creo la funzione che segnala quando viene immesso un valore..
        event.preventDefault();
    }

    render(){ //Renderizzo poi tutto in HTML
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

class FormArea extends React.Component{ // Form che funge da TextArea...
    constructor(props) {
        super(props);
        this.state = {
            value: 'Wow... Questa è una TextArea creata con React.js!'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('Un tema è stato inviato: ' + this.state.value);
        event.preventDefault(); 
    }

    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <label>
                Tema:
                <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

ReactDOM.render( //Infine renderizzo tutto quanto, dal primo all'ultimo elemento.. <div> Viene usato per renderizzare più elementi..
    <div> 
        <h1>Queste sono diverse funzioni di React!
        </h1>
        <h2>1) Utilizzo dei Component:</h2>
        <Foo name="Woosh"></Foo>
        <h2>2) Utilizzo degli handleClick:</h2>
        <Interruttore></Interruttore>
        <p>Infatti cambierà ad ogni click da Acceso a Spento!</p>
        <h2>3) Creare liste istantanee:</h2>
        <Blog articoli={articoli} />
        <h2>4) Creare delle Forms!</h2>
        <FormDiProva />
        <h2>5) Creare delle TextArea!</h2>
        <FormArea />
        <h2>6) Aggiornare in tempo reale il testo...</h2>
        <Orologio />
        </div>

    ,document.getElementById('root') // Si finisce indicando a quale parte della pagina HTML aggiungere il contenuto.
);