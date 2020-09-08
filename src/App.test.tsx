import React from 'react';
import App from './App';
import { renderConnectedComponent } from './testUtils';

test('renders learn react link', () => {
    const { getByText } = renderConnectedComponent(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
