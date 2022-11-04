import "./styles.css";
import { words } from "./words.js";
import { map, includes, filter } from "ramda";
import React from "react";

const WordBox = ({ word }) => {
  const { root, meaning, origin, etymology, examples } = word;

  return (
    <div className="word-box">
      <h1>{root}</h1>
      <h2>Meaning: {meaning} </h2>
      <h2>Origin: {origin}</h2>
      <h2>Etymology: {etymology} </h2>
      <h2>Examples: {examples}</h2>
    </div>
  );
};

const SearchBox = ({ onChange }) => {
  return (
    <div>
      <input type="search" placeholder="Search" onChange={onChange} />
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", filteredWords: words, words: words };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const includesLetters = (value, { root } = "") => {
      return root ? includes(value, root) : false;
    };

    const filterWords = (value) => {
      return filter((word) => includesLetters(value, word), words);
    };

    this.setState({
      value: event.target.value,
      filteredWords: event.target.value
        ? filterWords(event.target.value)
        : words
    });
    console.log("State: ", this.state);
  }

  render() {
    return (
      <div className="App">
        <SearchBox onChange={this.handleChange} />
        {map(
          (w) => (
            <WordBox word={w} key={w.root + w.meaning + w.origin} />
          ),
          this.state.filteredWords
        )}
      </div>
    );
  }
}

export default App;
