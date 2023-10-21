import Component from "../Component/Component.js";

class Button extends Component {
  constructor(
    parentElement: Element,
    public text: string,
  ) {
    super(parentElement, "button", "change-pokemons");
  }

  protected populate(): void {
    this.element.textContent = this.text;
  }
}

export default Button;
