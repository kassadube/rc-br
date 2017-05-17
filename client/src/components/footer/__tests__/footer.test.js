/* eslint-disable react/react-in-jsx-scope */

import Footer from '../index';

test('# Footer', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});


describe('rendering testing', () => {
  it('#footer  RENDER', () => {
    const component = (<Footer />);
    const wrapper = render(component);
    expect(wrapper).toMatchSnapshot();
  });
  it('#navbar not loged in user RENDER', () => {
    const component = (<Footer />);
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });
});
