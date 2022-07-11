import React, {Component} from 'react';
import Post from "./Post";

class AllPosts extends Component {

    state = {posts: [], chosenPost: null};

    async componentDidMount() {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        let json = await response.json();
        let filtered = await json.filter(value => value.id < 11);
        this.setState({posts: filtered})


        // fetch(`https://jsonplaceholder.typicode.com/posts`)
        //     .then(value => value.json())
        //     .then(value => {
        //         this.setState({posts: value})
        //     })
    }


    onChoosePost = (id) => {
        let {posts} = this.state;
        let found = posts.find(value => value.id === id);
        this.setState({chosenPost: found})
    }

    render() {

        let {posts, chosenPost} = this.state;

        return (
            <div>
                {
                    posts.map(value => {
                        return (
                            <Post
                                item = {value}
                                key = {value.id}
                                onChoosePost = {this.onChoosePost}
                            />
                        )
                    })
                }
                {
                    chosenPost && <h3>
                        {chosenPost.body}
                    </h3>
                }
            </div>
        );
    }
}

export default AllPosts;