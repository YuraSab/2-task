import React, {Component} from 'react';
import AllUsers from "./components/users/AllUsers";
import AllPosts from "./components/posts/AllPosts";

class App extends Component {
    render() {
        return (
            <div>
                {/*<AllUsers/>*/}
                <AllPosts/>
            </div>
        );
    }
}

export default App;