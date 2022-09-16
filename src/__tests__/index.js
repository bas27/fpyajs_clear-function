import health from '../index';

test.each([
  ['Nik', 5, 'critical'],
  ['Mag', 40, 'wounded'],
  ['Boo', 80, 'healthy'],
])('testing health level %s is %i - %s', (_, number, returned) => {
  const result = health({ name: _, health: number });
  expect(result).toBe(returned);
});
