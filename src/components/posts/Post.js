import React, {Component} from 'react';

class Post extends Component {
    render() {

        let {item, onChoosePost} = this.props;

        return (
            <div>
                {item.id}. {item.title} - <button onClick={() => onChoosePost(item.id)}>About</button>
            </div>
        );
    }
}

export default Post;