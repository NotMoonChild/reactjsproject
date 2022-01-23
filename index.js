var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Foo = function (_React$Component) {
    _inherits(Foo, _React$Component);

    function Foo() {
        _classCallCheck(this, Foo);

        return _possibleConstructorReturn(this, (Foo.__proto__ || Object.getPrototypeOf(Foo)).apply(this, arguments));
    }

    _createClass(Foo, [{
        key: 'render',
        //Classe di base dove è visibile il passaggio dei dati tramite i Props...
        value: function render() {
            return React.createElement(
                'p',
                null,
                'Questa \xE8 la classe Foo, ',
                this.props.name,
                '!'
            ); // {this.props.name} serve proprio come parametro..
        }
    }]);

    return Foo;
}(React.Component);

var Orologio = function (_React$Component2) {
    _inherits(Orologio, _React$Component2);

    function Orologio(props) {
        _classCallCheck(this, Orologio);

        var _this2 = _possibleConstructorReturn(this, (Orologio.__proto__ || Object.getPrototypeOf(Orologio)).call(this, props));

        _this2.state = { date: new Date() };
        return _this2;
    }

    _createClass(Orologio, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            //Monto l'orologio in modo che si ripeta continuamente il metodo tick()
            this.timerID = setInterval(function () {
                return _this3.tick();
            }, 1000);
        }
    }, {
        key: 'tick',
        value: function tick() {
            //Faccio in modo che si aggiorni ogni secondo..
            this.setState({
                date: new Date()
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return (// Renderizzo l'orologio e il suo stato..
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Questo si aggiorna da solo!..'
                    ),
                    React.createElement(
                        'h2',
                        null,
                        'Orario: ',
                        this.state.date.toLocaleTimeString(),
                        '.'
                    )
                )
            );
        }
    }]);

    return Orologio;
}(React.Component);

var Interruttore = function (_React$Component3) {
    _inherits(Interruttore, _React$Component3);

    function Interruttore(props) {
        _classCallCheck(this, Interruttore);

        // Passo i props
        var _this4 = _possibleConstructorReturn(this, (Interruttore.__proto__ || Object.getPrototypeOf(Interruttore)).call(this, props)); // Passiamo il costruttore..


        _this4.state = { acceso: true }; //Indico lo stato dell'interruttore...

        _this4.handleClick = _this4.handleClick.bind(_this4); // Connetto il metodo HandleClick alla funzione
        return _this4;
    }

    _createClass(Interruttore, [{
        key: 'handleClick',
        value: function handleClick() {
            //Dichiaro la funzione per il click
            this.setState(function (prevState) {
                return { // Cambio di stato
                    acceso: !prevState.acceso
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            //Renderizzo poi il tutto trasformandolo in HTML
            return React.createElement(
                'button',
                { onClick: this.handleClick },
                React.createElement(
                    'p',
                    null,
                    this.state.acceso ? 'Acceso' : 'Spento'
                )
            );
        }
    }]);

    return Interruttore;
}(React.Component);

function Blog(props) {
    //Classe Blog
    var sidebar = //Sidebar dove si trovano i punti della lista
    React.createElement(
        'ul',
        null,
        props.articoli.map(function (articolo) {
            return (//Faccio in modo che mostrino il titolo e l'ID dell'articolo
                React.createElement(
                    'li',
                    { key: articolo.id },
                    articolo.titolo
                )
            );
        })
    );
    var contenuto = props.articoli.map(function (articolo) {
        return (//Faccio in modo che venga visualizzato il contenuto...
            React.createElement(
                'div',
                { key: articolo.id },
                React.createElement(
                    'h3',
                    null,
                    articolo.titolo
                ),
                React.createElement(
                    'p',
                    null,
                    articolo.testo
                )
            )
        );
    });
    return (//Ritorno poi la struttura in HTML
        React.createElement(
            'div',
            null,
            sidebar,
            React.createElement('hr', null),
            contenuto
        )
    );
}

var articoli = [//Dichiaro i diversi articoli
{ id: 1, titolo: 'Ciao da React.js!', testo: 'Ecco come fare diversi articoli come nei Blog!' }, { id: 2, titolo: 'Non e Difficile!', testo: 'Con poche righe di codice, puoi fare una struttura complessa!' }];

var FormDiProva = function (_React$Component4) {
    _inherits(FormDiProva, _React$Component4);

    //Form di Prova dove si immetterà un "Nome"
    function FormDiProva(props) {
        _classCallCheck(this, FormDiProva);

        var _this5 = _possibleConstructorReturn(this, (FormDiProva.__proto__ || Object.getPrototypeOf(FormDiProva)).call(this, props));

        _this5.state = { value: '' };

        _this5.handleChange = _this5.handleChange.bind(_this5);
        _this5.handleSubmit = _this5.handleSubmit.bind(_this5); //Connetto il metodo di Submit e di Cambio alla funzione principale
        return _this5;
    }

    _createClass(FormDiProva, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value }); //Creo la funzione handleChange dove viene messo il valore 
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('E\' stato inserito un nome: ' + this.state.value); //Creo la funzione che segnala quando viene immesso un valore..
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            //Renderizzo poi tutto in HTML
            return React.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                React.createElement(
                    'label',
                    null,
                    'Nome:',
                    React.createElement('input', { type: 'text', value: this.state.value, onChange: this.handleChange })
                ),
                React.createElement('input', { type: 'submit', value: 'Submit' })
            );
        }
    }]);

    return FormDiProva;
}(React.Component);

var FormArea = function (_React$Component5) {
    _inherits(FormArea, _React$Component5);

    // Form che funge da TextArea...
    function FormArea(props) {
        _classCallCheck(this, FormArea);

        var _this6 = _possibleConstructorReturn(this, (FormArea.__proto__ || Object.getPrototypeOf(FormArea)).call(this, props));

        _this6.state = {
            value: 'Wow... Questa è una TextArea creata con React.js!'
        };

        _this6.handleChange = _this6.handleChange.bind(_this6);
        _this6.handleSubmit = _this6.handleSubmit.bind(_this6);
        return _this6;
    }

    _createClass(FormArea, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({
                value: event.target.value
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('Un tema è stato inviato: ' + this.state.value);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                React.createElement(
                    'label',
                    null,
                    'Tema:',
                    React.createElement('textarea', { value: this.state.value, onChange: this.handleChange })
                ),
                React.createElement('input', { type: 'submit', value: 'Submit' })
            );
        }
    }]);

    return FormArea;
}(React.Component);

ReactDOM.render( //Infine renderizzo tutto quanto, dal primo all'ultimo elemento.. <div> Viene usato per renderizzare più elementi..
React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Queste sono diverse funzioni di React!'
    ),
    React.createElement(
        'h2',
        null,
        '1) Utilizzo dei Component:'
    ),
    React.createElement(Foo, { name: 'Woosh' }),
    React.createElement(
        'h2',
        null,
        '2) Utilizzo degli handleClick:'
    ),
    React.createElement(Interruttore, null),
    React.createElement(
        'p',
        null,
        'Infatti cambier\xE0 ad ogni click da Acceso a Spento!'
    ),
    React.createElement(
        'h2',
        null,
        '3) Creare liste istantanee:'
    ),
    React.createElement(Blog, { articoli: articoli }),
    React.createElement(
        'h2',
        null,
        '4) Creare delle Forms!'
    ),
    React.createElement(FormDiProva, null),
    React.createElement(
        'h2',
        null,
        '5) Creare delle TextArea!'
    ),
    React.createElement(FormArea, null),
    React.createElement(
        'h2',
        null,
        '6) Aggiornare in tempo reale il testo...'
    ),
    React.createElement(Orologio, null)
), document.getElementById('root') // Si finisce indicando a quale parte della pagina HTML aggiungere il contenuto.
);