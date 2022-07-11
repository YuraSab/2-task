import React, {Component} from 'react';

class User extends Component {
    render() {

        let {item, onChooseUser} = this.props;

        return (
            <div>
                {item.id}. {item.name} -
                <button onClick={() => onChooseUser(item.id)}>Choose</button>
            </div>
        );
    }
}

export default User;