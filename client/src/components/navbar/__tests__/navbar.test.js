/* eslint-disable react/react-in-jsx-scope */

import Navbar from '../index';

test('# Navbar at home', () => {
  const wrapperRoot = shallow(<Navbar current="/" />);
  expect(wrapperRoot).toMatchSnapshot();
});

test('# Navbar at create', () => {
  const wrapperCreate = shallow(<Navbar current="/create" />);
  expect(wrapperCreate).toMatchSnapshot();
});

test('# Navbar at with user loged in', () => {
  const wrapperUser = shallow(<Navbar user={{login: 'test'}} current="/profile/me" />);
  expect(wrapperUser).toMatchSnapshot();
});

describe('mount testing', () => {
  it('#navbar loged in user', () => {
    const component = (<Navbar user={{login: 'test'}} current="/profile/me" />);
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });
  it('#navbar not loged in user', () => {
    const component = (<Navbar current="/profile/me" />);
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });
});
describe('rendering testing', () => {
  it('#navbar loged in user RENDER', () => {
    const component = (<Navbar user={{login: 'test'}} current="/profile/me" />);
    const wrapper = render(component);
    expect(wrapper).toMatchSnapshot();
  });
  it('#navbar not loged in user RENDER', () => {
    const component = (<Navbar current="/profile/me" />);
    const wrapper = render(component);
    expect(wrapper).toMatchSnapshot();
  });
});
