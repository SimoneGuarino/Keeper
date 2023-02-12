import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";


class Users extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("/api/users")
        .then(res => res.json())
        .then(users => {
            this.setState({users: users});
        });
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidUpdate(prevProps) {
        if (this.props.users !== prevProps.users) {
            fetch("/api/users")
            .then(res => res.json())
            .then(users => {
                this.setState({users: users});
            });         
        }
      }
    
    render() {
        return (
            <div>
                <Header />
                <CreateArea click={this.componentDidMount}/>
            {
                this.state.users.map((user, index) =>{
                    return <Note key={user._id} id={user._id} title={user.title} content={user.content} click={this.componentDidMount} />
                })
            }
            <Footer />
            </div>
        )
    }
};

export default Users;