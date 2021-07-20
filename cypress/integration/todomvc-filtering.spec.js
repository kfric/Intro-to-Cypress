/// <reference types="cypress" />

describe('filtering', () =>{
  beforeEach(() =>{
    cy.visit('http://todomvc-app-for-testing.surge.sh')
    // check the todo-list element...delay for 6secs...type 'clean room'....press enter
    cy.get('.new-todo').type('Clean room{enter}')
    cy.get('.new-todo').type('Learn JavaScript{enter}')
    cy.get('.new-todo').type('Use Cypress{enter}')

    cy.get('.todo-list li:nth-child(2) .toggle').click()
  })

  it('should filter "Active" todos', () => {
    cy.contains('Active').click()

    cy.get('.todo-list li').should('have.length', 2)
  })

  it('should filter "Completed" todos', () => {
    cy.contains('Completed').click()

    cy.get('.todo-list li').should('have.length', 1)
  })

  it('should filter "All" todos', () => {
    cy.contains('All').click()

    cy.get('.todo-list li').should('have.length', 3)
  })
})

// interactive mode (made changes to scripts in package.json)
// npm run cypress

// test script
// npm run test or npm test
