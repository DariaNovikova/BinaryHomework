function User(id, name) {
    this.id = id;
    this.name = name;
}

var AddUser = React.createClass({
    getInitialState: function () {
        return {
            userName: ""
        };
    },

    onChangeHandler: function (e) {
        this.setState({ userName: e.target.value });
    },

    onAdd: function () {
        this.props.addUser(this.state.userName);
    },

    render: function () {
        return (
            <div className="addUser">
                <textarea className="input"  value={this.state.userName} onChange={this.onChangeHandler} />
                <button className="add" onClick={this.onAdd}>Add</button>
            </div>
        )
    }
});


var ShowUser = React.createClass({
    deleteUser: function () {
        this.props.onDelete(this.props.data.id);
    },
    render: function () {
        return (
            <p className="name">{this.props.data.name}
                <button className="delete" onClick={this.deleteUser}>Delete</button></p>
        )
    }
});

var ShowList = React.createClass({
    getInitialState: function () {
        return {
            deleted: []
        }
    },

    onDelete: function (id) {
        this.setState({ deleted: this.state.deleted.concat([id]) });
    },

    render: function () {
        var list = this.props.data;
        if (list) {
            var dataTemplate = list.filter(item => !this.state.deleted.includes(item.id))
                .map((item, index) => {
                    return (
                        <div className="user" key={index}>
                            <ShowUser data={item} onDelete={id => this.onDelete(id) } />
                        </div>
                    )
                });
        }
        return (
            <div className="userList">{dataTemplate}</div>
        )

    }
});

var Users = React.createClass({
    getInitialState: function () {
        return {
            currentId: 3,
            list: [{ id: 1, name: "Dasha" }, { id: 2, name: "Jenike" }]
        }
    },
    addUser: function (userName) {
        var user = new User(this.state.currentId, userName);
        return this.setState({
            currentId: this.state.currentId + 1,
            list: this.state.list.concat([user])
        });
    },
    render: function () {
        return (
            <div className="main">
                <AddUser addUser={this.addUser}/>
                <ShowList data={this.state.list} />
            </div>
        )
    }
});

ReactDOM.render(
    <Users/>,
    document.getElementById('root')
);