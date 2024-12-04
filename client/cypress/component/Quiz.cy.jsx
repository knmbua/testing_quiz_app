import React from 'react';
import { mount } from 'cypress/react18';
import Quiz from '../../src/components/Quiz';

describe('<Quiz />', () => {
  it('should display questions and handle answers correctly', () => {
    // Intercept the API call and return mockQuestions
    cy.fixture('questions.json').then((mockQuestions) => {
      // Intercept the API call and return mockQuestions
      cy.intercept('GET', '/api/questions/random', {
        statusCode: 200,
        body: mockQuestions,
      }).as('getQuestions');

      // Mount the Quiz component
      mount(<Quiz />);

      // Start the quiz
      cy.get('button').contains('Start Quiz').click();

      // Wait for the API call to complete
      cy.wait('@getQuestions');

      // TODO: Complete the test code to answer both mock questions and ensure the score is correct at the end of the quiz

      // Answer to question 1
      cy.get('button').contains('1').click();
  
      // Answer question 2  
      cy.get('button').contains('3').click();

      // Check the score
      cy.get('div').contains('2');

      // Take new quiz
      cy.get('button').contains('Take New Quiz').click();
    });
  });
});