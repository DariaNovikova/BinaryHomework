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

class ShowUser extends React.component {
    render() {
        var name = this.props.data.name;
        return (
            <p className="name">{name} <button>Delete</button></p>
        )
    }
};

class ShowList extends React.Component {
    render() {
        var list = this.props.data;
        if (list) {
            var dataTemplate = list.map(function (item, index) {
                return (
                    <div className="user" key={index}>
                        <ShowUser data={item} />
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