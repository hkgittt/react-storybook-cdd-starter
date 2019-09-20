import React from 'react';
import Button from './';
import renderer from 'react-test-renderer';

describe('Sample test', () => {
  it('confirms the obvious', () => {
    expect(true).toEqual(true);
  });

  it('renders google button correctly', () => {
    const tree = renderer
      .create(<Button label="Google" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders facebook button correctly', () => {
    const tree = renderer
      .create(<Button label="Facebook" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
