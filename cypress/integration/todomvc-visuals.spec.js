/// <reference types="cypress" />
import * as todoPage from "../page-objects/todo-page";

describe("visual validation", () => {
  before(() => todoPage.navigate());

  beforeEach(() =>
    // open an eyes test
    cy.eyesOpen({
      appName: "Karl TodoMVC",
      batchName: "Karl TodoMVC Hey!",
      browser: [
        { name: "firefox", width: 1024, height: 768 },
        { name: "safari", width: 800, height: 600 },
        { deviceName: "iPhone X" },
      ],
    })
  );
  // close the eyes test
  afterEach(() => cy.eyesClose());

  it("should look good", () => {
    // take a screen shot
    cy.eyesCheckWindow("empty todo list");

    todoPage.addTodo("Clean room");
    todoPage.addTodo("Learn Javascript");
    // take a screen shot
    cy.eyesCheckWindow("two todos");

    todoPage.toggleTodo(0);
    // take a screen shot
    cy.eyesCheckWindow("mark as completed");
  });
});
