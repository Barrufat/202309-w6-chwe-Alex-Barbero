abstract class Component {
  public readonly element: Element;
  protected readonly parentElement: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.parentElement = parentElement;
  }

  public render(): void {
    this.parentElement.appendChild(this.element);

    this.populate();
  }

  protected abstract populate(): void;
}
export default Component;
