import React, { Component } from 'react';
import CharacterCard from "./components/Character";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

function shuffleImage(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp
  }
  return array
};


class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    clickedCharacters: []
  };

  clickedImage = id => {
    let clickedCharacters = this.state.clickedCharacters;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if (clickedCharacters.indexOf(id) === -1) {
      clickedCharacters.push(id);
      this.handleIncrement();
      this.characterShuffle();
    } else if (this.state.score === 12) {
      alert("Grab your wands! You win!")
      this.setState({
        score: 0,
        clickedCharacters: []
      });
    } else {
      this.setState({
        score: 0,
        clickedCharacters: []
      });
      alert("Uh oh! You picked the same character twice!")
    }

    if (score > topScore) {
      topScore = score;
      this.setState({ topScore })
    }
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  }

  characterShuffle = () => {
    this.setState({ characters: shuffleImage(characters) })
  }


  render() {
    return (    
      <Wrapper>
         <Title 
            score={this.state.score}
            message={this.state.message}
            topScore={this.state.topScore} />
        <div class="container"> 
          <div class="row">
            {this.state.characters.map(character => (
              <CharacterCard
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                clickedImage={this.clickedImage}
                />
            ))}
            </div>
        </div>
      </Wrapper>
    ); 
  }
}

export default App;
