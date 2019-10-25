import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import scoreCalc from './index.js';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');


describe('My bowling scorer', () => {
  
  it('calculates correct score given perfect game of full strikes', () => {
    let score = scoreCalc([[10,0], [10,0], [10,0], [10,0], [10,0], [10,0], [10,0], [10,0], [10,0], [10,0], [10,10]]);
    expect(score).to.be.eql(300);
  });

  it('calculates correct score given worst game of full 0s', () => {
    let score = scoreCalc([[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]);
    expect(score).to.be.eql(0);
  });

  it('calculates correct score given partial game ending in a strike', () => {
    let score = scoreCalc([[0,1], [0,8], [8,1], [10,0], [10,0], [1,9], [10,0]]);
    expect(score).to.be.eql(89);
  });

  it('calculates correct score given partial game ending in a spare', () => {
    let score = scoreCalc([[3, 6], [1, 8], [8, 2], [10,0], [10,0], [1,9], [3,7]]);
    expect(score).to.be.eql(102);
  });

  it('calculates correct score given full game ending in strike', () => {
    let score = scoreCalc([[1,6], [3,5], [10,0], [3,6], [4,3], [1,4], [5,1], [6,3], [1,4], [10,0], [4,0]]);
    expect(score).to.be.eql(89);
  });

  it('calculates correct score given full game ending in spare', () => {
    let score = scoreCalc([[0,5], [2,4], [10,0], [3,3], [4,6], [1,5], [5,1], [6,3], [1,4], [7,3], [4,0]]);
    expect(score).to.be.eql(84);
  });


});
