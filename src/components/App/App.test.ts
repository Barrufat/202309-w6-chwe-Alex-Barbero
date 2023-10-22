import App from "./App";

describe("Given an App component", () => {
  describe("When it receives body, div and test and we check it's class name property", () => {
    test("Then it should return 'test ", async () => {
      const bodyElement = document.querySelector("body")!;

      const testApp = new App(bodyElement, "div", "test");
      const testAppClass = testApp.element.className;

      const expectedClass = "test";

      expect(testAppClass).toBe(expectedClass);
    });
  });
});
