import React, {Component} from 'react';
import User from "./User";

class AllUsers extends Component {


    state = {users: [], chosenOne: null};

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(value => value.json())
            .then(value => {
                this.setState({users: value})
            })
    }


    onChooseUser = (id) => {
        let {users} = this.state;
        let filtered = users.find(value => value.id === id);
        this.setState({chosenOne: filtered})
        console.log(filtered);
    }

    render() {

        let {users, chosenOne} = this.state;

        return (
            <div>
                {
                    users.map(value => {
                        return (
                            <User
                                item={value}
                                key={value.id}
                                onChooseUser={this.onChooseUser}
                            />
                        )
                    })
                }
                <div>
                    {
                        chosenOne &&
                        <h2>
                            {chosenOne.id}. {chosenOne.name}
                        </h2>
                    }
                </div>


            </div>
        );
    }
}

export default AllUsers;