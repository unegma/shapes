import chai from "chai";
const expect = chai.expect;
import * as shapes from '../lib';

describe('Tests', () => {

  it('should return 1 or -1', async () => {
    let result = shapes.getRandomOneOrNegativeOne();
    console.log(result);
    expect(result).to.be.oneOf([1, -1]);
  });

  it('should return a cluster from an index', async () => {
    let result = shapes.createCluster(1);
    console.log(result);
    expect(result).to.be.a('object');
  });
  it('should return a spiral from an index', async () => {
    let result = shapes.createSpiral(1);
    console.log(result);
    expect(result).to.be.a('object');
  });
  it('should return a golden spiral from an index', async () => {
    let result = shapes.createGoldenSpiral(1);
    console.log(result);
    expect(result).to.be.a('object');
  });
  it('should return a swirl from an index', async () => {
    let result = shapes.createSwirl(1);
    console.log(result);
    expect(result).to.be.a('object');
  });
});
