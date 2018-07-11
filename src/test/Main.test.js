import React from 'react';
import Main from '../Main';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Main page="http://localhost:3000">Simple SPA</Main>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
