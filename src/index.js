import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Reddit extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://www.reddit.com/r/reactjs.json").then(res => {
      const poster = res.data.data.children.map(obj => obj.data);

      //What i did here was set the class variable posts to the value of the const poster
      this.setState({ posts: (this.posts = poster) });
    });
  }
  //the key is equal to each post ID so it is unique for every post
  render() {
    return (
      <div>
        <h1>/r/reactjs</h1>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>
              <a href={post.url.split("\\")}>{post.title}</a>{" "}
              <b>{post.author_fullname}</b> {post.score}
              <br />
              <br />{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Reddit />, document.getElementById("root"));
