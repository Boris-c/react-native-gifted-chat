import Color from '../Color_';

it('should compare Color with snapshot', () => {
  expect(Color).toMatchSnapshot();
});
