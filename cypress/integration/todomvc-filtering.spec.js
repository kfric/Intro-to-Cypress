/// <reference types="cypress" />

import { navigate, addTodo, toggleTodo, showOnlyActiveTodos, validateNumberOfTodosShown, showOnlyCompletedTodos, validateTodoCompletedState, showAllTodos } from "../page-objects/todo-page"

describe('filtering', () =>{
  const = new TodoPage()

  beforeEach(() =>{
    // cy.visit('http://todomvc-app-for-testing.surge.sh')
    navigate()
    // cy.get('.new-todo').type('Clean room{enter}')
    addTodo('Clean room')
    // cy.get('.new-todo').type('Learn JavaScript{enter}')
    addTodo('Learn JavaScript')
    // cy.get('.new-todo').type('Use Cypress{enter}')
    addTodo('Use Cypress')

    // cy.get('.todo-list li:nth-child(2) .toggle').click()
    toggleTodo(1)
  })

  it('should filter "Active" todos', () => {
    // cy.contains('Active').click()
    showOnlyActiveTodos()

    // cy.get('.todo-list li').should('have.length', 2)
    validateNumberOfTodosShown(2)
  })

  it('should filter "Completed" todos', () => {
    // cy.contains('Completed').click()
    showOnlyCompletedTodos()

    // cy.get('.todo-list li').should('have.length', 1)
    validateTodoCompletedState(1)
  })

  it('should filter "All" todos', () => {
    // cy.contains('All').click()
    showAllTodos()

    // cy.get('.todo-list li').should('have.length', 3)
    validateNumberOfTodosShown(3)
  })
})

// interactive mode (made changes to scripts in package.json)
// npm run cypress

// test script
// npm run test or npm test
