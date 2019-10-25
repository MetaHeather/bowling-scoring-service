import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import scoreCalc from './index.js';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');


describe('My bowling scorer', () => {
  
  it('calculates correct score given partial game ending in a strike', () => {
    let score = scoreCalc([[0, 1], [0, 8], [8, 1],[10,0],[10,0],[1,9],[10,0]]);
    expect(score).to.be.eql(18);
  });



});
