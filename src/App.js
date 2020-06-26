import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  // Peter helped with getting click handlers to work
  handleClickAllPosts = (event) => {
    fetch("http://localhost:8000/Post")
      .then((res) => res.json())
      .then((res) => this.setState({ post: res }));
  };

  handleClickBoast = (event) => {
    fetch("http://127.0.0.1:8000/Post/boast/")
      .then((res) => res.json())
      .then((res) => this.setState({ post: res }));
  };

  handleClickRoast = (event) => {
    fetch("http://127.0.0.1:8000/Post/roast/")
      .then((res) => res.json())
      .then((res) => this.setState({ post: res }));
  };

  render() {
    return (
      <div className="App">
        <h1>Boast or Roast</h1>
        <button onClick={this.handleClickAllPosts}>Home</button>
        <button onClick={this.handleClickBoast}>Boasts</button>
        <button onClick={this.handleClickRoast}>Roasts</button>
        <button>Highest Votes</button>
        {this.state.post.map((p) => {
          return (
            <ul>
              <li>
                Title: {p.post_title}
                <br />
                Date: {p.date}
                <br />
                Body: {p.body}
                <br />
                <button>UpVote{p.upvotes}</button>
                <button>DownVote{p.downvotes}</button>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default App;
