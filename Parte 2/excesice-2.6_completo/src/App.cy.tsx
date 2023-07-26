import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)   
  })

 /*  it('when click button save, show text input',()=>{
    cy.mount(<App />) 
    cy.get('[data-cy=newNoteinput').type("Manzana")  
    cy.get('[data-cy=save]').click()
    //cy.get('[data-cy=title]').should('have.text', 'a new note...')
    cy.get('li').should('have.text', 'a new note...Manzana')
  }) */

  /* it('when change input end click save, show text input in window',()=>{
    cy.mount(<App />) 
    cy.get('[data-cy=newNoteinput').type("Manzana")  
    cy.get('[data-cy=save]').click()
    //cy.get('[data-cy=title]').should('have.text', 'a new note...')
    cy.get('li').should('have.text', 'a new note...Manzana')
  }) */

 /*  it('when click show important, show only notes important',()=>{
    cy.mount(<App />) 
    cy.get('[data-cy=newNoteinput').type("Manzana")  
    cy.get('[data-cy=save]').click()
    cy.get('[data-cy=newNoteinput').type("Peras")  
    cy.get('[data-cy=save]').click()
    cy.get('[data-cy=show]').click()
    //cy.get('[data-cy=title]').should('have.text', 'a new note...')
    cy.get('li').should('have.text', 'a new note...Manzana')
    cy.get('li').should('have.text', 'Peras')
    
  }) */
})

