'use strict';

/**
 * Dependencies.
 */

var nlcstToString,
    assert;

nlcstToString = require('./');
assert = require('assert');

describe('nlcstToString(nlcst)', function () {
    it('should be a `function`', function () {
        assert(typeof nlcstToString === 'function');
    });

    it('should return `value` if existing on `nlcst`', function () {
        assert(nlcstToString({
            'value': 'AT'
        }) === 'AT');
    });

    it('should return the value of `children`', function () {
        assert(nlcstToString({
            'children': [
                {
                    'value': 'AT'
                }
            ]
        }) === 'AT');
    });

    it('should return the concat of `children[n].value`', function () {
        assert(nlcstToString({
            'children': [
                {
                    'value': 'AT'
                },
                {
                    'value': '&'
                },
                {
                    'value': 'T'
                }
            ]
        }) === 'AT&T');
    });

    it('should return the concat of multi-level `children`', function () {
        assert(nlcstToString({
            'children': [
                {
                    'value': 'AT'
                },
                {
                    'children': [
                        {
                            'value': '&'
                        }
                    ]
                },
                {
                    'value': 'T'
                }
            ]
        }) === 'AT&T');
    });
});
