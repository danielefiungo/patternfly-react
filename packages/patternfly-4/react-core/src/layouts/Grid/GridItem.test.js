import React from 'react';
import GridItem from './GridItem';
import { shallow } from 'enzyme';
import { DeviceSizes } from '../../styles/sizes';
import { getOffsetKey, getRowSpanKey } from './gridUtils';

test('adds span class', () => {
  const view = shallow(<GridItem span={4} />);
  expect(view.props().className).toMatchSnapshot();
});

test('adds offset class', () => {
  const view = shallow(<GridItem offset={4} />);
  expect(view.props().className).toMatchSnapshot();
});

test('adds row class', () => {
  const view = shallow(<GridItem rowSpan={4} />);
  expect(view.props().className).toMatchSnapshot();
});

Object.values(DeviceSizes).forEach(size => {
  test(`adds ${size} span class`, () => {
    const props = { [size]: 4 };
    const view = shallow(<GridItem {...props} />);
    expect(view.props().className).toMatchSnapshot();
  });

  test(`adds ${size} offset classes`, () => {
    const props = { [getOffsetKey(size)]: 1 };
    const view = shallow(<GridItem {...props} />);
    expect(view.props().className).toMatchSnapshot();
  });

  test(`adds ${size} row classes`, () => {
    const props = { [getRowSpanKey(size)]: 1 };
    const view = shallow(<GridItem {...props} />);
    expect(view.props().className).toMatchSnapshot();
  });
});
