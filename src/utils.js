export function getRandomArray (array) {
  return array.sort(() => 0.5 - Math.random())
}