export default function health(someObj) {
  if (someObj.health >= 50) {
    return 'healthy';
  }
  if (someObj.health >= 15) {
    return 'wounded';
  }

  return 'critical';
}
