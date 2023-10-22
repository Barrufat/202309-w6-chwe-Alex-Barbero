import Component from "../Component/Component.js";

class App extends Component {
  protected populate(): void {
    this.element.innerHTML = `
    <div class="pokemon-box">
    <img class="pokemon-box__main-title" src="./images/main-title.png" alt="pokemon main title" witdh="200" heigth=100"/>
    <div class="pokemon-box__header"></div>
      <ul class="pokemon-box__pokedex">
      </ul>
      <div class="pokemon-box__controllers">
      </div>
    </div>
    `;
  }
}

export default App;
