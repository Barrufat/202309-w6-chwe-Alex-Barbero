import Component from "../Component/Component.js";

class App extends Component {
  protected populate(): void {
    this.element.innerHTML = `
    <div class="pokemon-box">
      <ul class="pokedex">
      </ul>
      <div class="controllers-box">
      </div>
    </div>
    `;
  }
}

export default App;
