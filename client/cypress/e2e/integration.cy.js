describe('Integration Tests', () => {
  // TODO: Complete the integration test to check if the quiz starts correctly
  it('Should show the start button on initial page load and successfully start the quiz', () => {
    cy.visit('/');


  });

  // TODO: Complete the integration test to mock a user visiting the site and completing the quiz
  it('Should display the correct questions and show the score at the end', () => {
    // Load the fixture
    cy.fixture('questions.json').then((mockQuestions) => {
      // Intercept the API call and return mockQuestions
      cy.intercept('GET', '/api/questions/random', {
        statusCode: 200,
        body: mockQuestions,
      }).as('getQuestions');

      // Visit the page
      cy.visit('/');

      // Click start quiz
      cy.get('button').contains('Start Quiz').click()

      // Click the first answer
      cy.get('button').contains('1').click()
      // Click the second answer
      cy.get('button').contains('3').should('be.visible').click()
      // Check the score
      cy.get('div').contains('2/2');

    });
  });
});