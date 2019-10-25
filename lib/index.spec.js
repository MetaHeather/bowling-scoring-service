'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _sinonStubPromise = require('sinon-stub-promise');

var _sinonStubPromise2 = _interopRequireDefault(_sinonStubPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_sinonChai2.default);
(0, _sinonStubPromise2.default)(_sinon2.default);

global.fetch = require('node-fetch');

describe('My bowling scorer', function () {

  beforeEach(function () {
    // This example test suite is for a nudge in the right direction but feel free
    // change the shape of the specs or even move in a completely different direction that you feel best for
    // the assignment. Make sure to break down the issue and keep things organized.

  });

  var myScoringAlgorithm = function myScoringAlgorithm(frames) {};

  it('calculates correct score provided a game', function () {
    var frames = [[0, 1], [0, 8], [8, 1]];

    var score = myScoringAlgorithm(frames);

    (0, _chai.expect)(score).to.be.eql(18);
  });
});