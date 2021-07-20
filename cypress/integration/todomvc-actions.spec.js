/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('todo actions', () => {
  const todoPage = new TodoPage()

  // before each test (it)...visit site...add 'clean room'...press enter
  beforeEach(() => {
    // cy.visit('http://todomvc-app-for-testing.surge.sh/')
    todoPage.navigate()

    // check the todo-list element...delay for 6secs...type 'clean room'....press enter
    // cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}')
    todoPage.addTodo('Clean room')
  })

  it('should add new todo to the list', () => {
    // check the label element...it should have text = 'clean room'
    // cy.get('label').should('have.text', 'Clean room')
    todoPage.validateTodoText(0, 'Clean room')

    // check the toggle elements...it should...not be checked
    // cy.get('.toggle').should('not.to.be.checked')
    todoPage.validateToggleState(0, false)
  })
  
  describe('troggling todos', () => {
    it('should mark todo as complete', () => {
      // check the toggle element...click it
      // cy.get('.toggle').click()
      todoPage.toggleTodo(0)

      // check the label element...it should....have  css that has...text-decoration-line = line-through
      // cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
      todoPage.validateTodoCompletedState(0, true)
    })
    
    it('should clear completed todos', () => {
      
      // cy.get('.toggle').click()
      todoPage.toggleTodo(0)
      
      // find element that contains 'clear'...click it
      // cy.contains('Clear').click()
      todoPage.clearCompleted()

      // check the todo-list element...it should...not have descendants...that are li
      // cy.get('.todo-list').should('not.have.descendants', 'li')
      todoPage.validateNumberOfTodosShown(0)
    })
  })
    
})