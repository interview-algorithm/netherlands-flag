var sort = require('../netherlands-flag').sort;
var assert = require('assert');

function createArray(len) {
    var ret = [];
    for (var i = 0; i < len; ++i) {
        ret.push({
            isWhite: i % 3 === 0,
            isRed: i % 3 === 1,
            isBlue: i % 3 === 2
        });
    }
    return ret;
}

describe('Netherlands Flag', function () {
    describe('sort', function () {
        it('normal sequence', function () {
            var arr = createArray(10);
            var expected = [{
                isWhite: false,
                isRed: true,
                isBlue: false
            }, {
                isWhite: false,
                isRed: true,
                isBlue: false
            }, {
                isWhite: false,
                isRed: true,
                isBlue: false
            }, {
                isWhite: true,
                isRed: false,
                isBlue: false
            }, {
                isWhite: true,
                isRed: false,
                isBlue: false
            }, {
                isWhite: true,
                isRed: false,
                isBlue: false
            }, {
                isWhite: true,
                isRed: false,
                isBlue: false
            }, {
                isWhite: false,
                isRed: false,
                isBlue: true
            }, {
                isWhite: false,
                isRed: false,
                isBlue: true
            }, {
                isWhite: false,
                isRed: false,
                isBlue: true
            }];
            assert.deepEqual(sort(arr), expected);
        });

        it('should throw error if not an array', function () {
            assert.throws(function () {
                sort({});
            });
        });

        it('should throw error if neither red/white nor blue', function () {
            assert.throws(function () {
                sort([{}, {
                    white: true
                }]);
            });
        });
    });
});