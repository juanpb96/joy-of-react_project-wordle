import Game from "../Game";
import GuessInput from "../GuessInput";
import Header from "../Header";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
      </div>

      <GuessInput />
    </div>
  );
}

export default App;
