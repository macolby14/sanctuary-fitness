import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../footer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Footer></Footer>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});