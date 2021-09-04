import {randFloat} from "three/src/math/MathUtils";

/**
 * Shapes
 * @param index
 */

/**
 * createCluster
 * @param {number} index
 * @returns {{pos1: number, pos2: number, pos3: number}}
 */
export function createCluster(index) {
  // create co-ordinates based on the a number between 0 and the index of the item (higher index = older item)
  // the second part randomly creates 1 or negative 1 to add depth along each axis
  let pos1 = randFloat(0, index) * getRandomOneOrNegativeOne();
  let pos2 = randFloat(0, index) * getRandomOneOrNegativeOne();
  let pos3 = randFloat(0, index) * getRandomOneOrNegativeOne();

  return { pos1: pos1, pos2: pos2, pos3: pos3 };
}

/**
 * createSpiral
 * @param {number} index
 * @returns {{pos1: number, pos2: number, pos3: number}}
 */
export function createSpiral(index) {
  // create co-ordinates based on the a number between 0 and the index of the item (higher index = older item)
  // the second part randomly creates 1 or negative 1 to add depth along each axis
  let pos1 = 7*Math.sin(index) *-1;
  let pos2 = 7*Math.cos(index) *-1;
  let pos3 = 7*index *-1;

  return { pos1: pos1, pos2: pos2, pos3: pos3 };
}

/**
 * createGoldenSpiral
 * @param {number} index
 * @returns {{pos1: number, pos2: number, pos3: number}}
 */
export function createGoldenSpiral(index) {
  // // https://www.reddit.com/r/theydidthemath/comments/286tqb/3d_golden_spiral_equation/
  const exponent = 0.306349; // growth factor in Radians: `ln(phi)/(pi/2)` OR in Degrees: `ln(phi)/90`
  const angle = index;// theta
  // const angle = (index + 0.1) * (Math.round(Math.random()) * 2 - 1) ;// theta
  const slope = 0.2;
  const t = index - index / 2; // todo what is t?

  let pos1 = ((Math.exp(exponent) * angle) * Math.sin(angle));
  let pos2 = ((Math.exp(exponent) * angle) * Math.cos(angle));
  let pos3 = ((index * (slope * angle))) / (index * Math.sqrt(index));

  return { pos1: pos1, pos2: pos2, pos3: pos3 };
}

/**
 * createSwirl
 *
 * @param {number} index
 * @returns {{pos1: number, pos2: number, pos3: number}}
 */
export function createSwirl(index) {
  // // https://www.reddit.com/r/theydidthemath/comments/286tqb/3d_golden_spiral_equation/
  // const exponent2 = 0.306349; // growth factor in Radians: `ln(phi)/(pi/2)` OR in Degrees: `ln(phi)/90`
  const exponent2 = 0.1; // growth factor in Radians: `ln(phi)/(pi/2)` OR in Degrees: `ln(phi)/90`
  // const angle = index ;// theta
  const angle2 = 0.5 * index;// theta
  // const angle2 = (index + 0.1) * (Math.round(Math.random()) * 2 - 1) ;// theta
  const slope2 = 3;
  // const t2 = index - index/2; // todo what is t?

  let pos1 = ((Math.exp(exponent2) * angle2) * Math.sin(angle2));
  let pos2 = ((Math.exp(exponent2) * angle2) * Math.cos(angle2));
  let pos3 = index + (slope2 * exponent2);
  // let pos3dm4 = ((index*(slope2 * angle2))) / (index * Math.sqrt(index));
  // let pos3dm4 = ((Math.tan(slope) * ((Math.sqrt(1+exponent) )*Math.exp(exponent * t))/exponent ));

  return { pos1: pos1, pos2: pos2, pos3: pos3 };
}

/**
 * Low Level functions
 */

/**
 * getRandomOneOrNegativeOne
 * @returns {number}
 */
export function getRandomOneOrNegativeOne () {
  return (Math.round(Math.random()) * 2 - 1);
}

/**
 * testMe
 * @returns {string}
 */
export function testMe () {
  return "Hi";
}
