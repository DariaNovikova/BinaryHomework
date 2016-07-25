var list = [
    {
        id: 1,
        name: "Dasha"

    },
    {
        id: 2,
        name: "Jenike",

    }
];

class ShowUser extends React.Component {

    render() {
        //  var name = this.props.data.name;
        return (
            <p className="name">{this.props.data.name}
                <button className="delete" onClick={() => this.props.onDelete(this.props.data.id) }>Delete</button></p>
        )
    }
};

class ShowList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            deleted: []
        };
    };

    onDelete(id) {
        this.setState({ deleted: this.state.deleted.concat([id]) });
    };

    render() {
        var list = this.props.data;
        if (list) {
            var dataTemplate = list.filter(item => this.state.deleted.indexOf(item.id) === -1).map(function (item, index) {
                return (
                    <div className="user" key={index}>
                        <ShowUser data={item} onDelete={id => this.onDelete(id)} />
                    </div>
                )
            });
        }
        return (
            <div className="userList">{dataTemplate}</div>
        )

    }
};

class App extends React.Component {
    render() {
        return (
            <div className="main">List
                <ShowList data={list} />
            </div>
        )
    }
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);