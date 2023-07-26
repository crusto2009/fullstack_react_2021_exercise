import React from 'react'
import { Note } from '../Note/Note'

describe('<Note />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Note />)
  })

  describe('Visite all notes', () => {
    it('Visits the Kitchen Sink', () => {
      cy.mount(<Note />)
      cy.visit({
        url: 'http://localhost:3001/notes',
        method: 'POST',
        body: {
          content: "Hola",
          date: new Date().toISOString(),
          important: Math.random() < 0.5
        }
      })
     
    })
  })
})