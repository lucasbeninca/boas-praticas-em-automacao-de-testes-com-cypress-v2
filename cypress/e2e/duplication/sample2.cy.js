describe('Code duplication bad practice - repetitive tests', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'redux')
      .as('searchField')
      .clear()

      


})
// criando um Array e interando sobre ele com uma função
const termosToSeachFor = ['reactjs', 'vuejs']

termosToSeachFor.forEach(term => {
  it('"searches for "reactjs"', () => {
    cy.search(term)      
    cy.wait('@getStories')
    cy.get('.table-row')
      .should('have.length', 100)
  })
})

})
