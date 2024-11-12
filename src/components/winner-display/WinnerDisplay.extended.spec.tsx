// Import testing utilities from React Testing Library
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// Import the component we're testing
import { WinnerDisplay } from './WinnerDisplay.extended';
import React from 'react';

// TODO complete tests
describe('WinnerDisplayExtended', () => {
  // Test case to verify the winner text is displayed correctly
  it('renders the winner text correctly', () => {
    // Set up test data
    const winnerName = 'Dead Unicorn';

    // Render the WinnerDisplay component with the test text
    render(<WinnerDisplay text={`${winnerName} wins!`} />);

    // Assert that the text appears in the document
    // getByText will throw an error if the text isn't found
    // toBeInTheDocument is a custom matcher from jest-dom
    expect(screen.getByTestId('winner-display')).toHaveTextContent(
      `${winnerName} wins!`,
    );
  });
});
