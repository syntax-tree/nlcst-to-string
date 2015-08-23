/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module nlcst:to-string
 * @fileoverview Test suite for `nlcst-to-string`.
 */

'use strict';

/* eslint-env node, mocha */

/*
 * Dependencies.
 */

var assert = require('assert');
var toString = require('./');

/*
 * Methods.
 */

var equal = assert.strictEqual;

/**
 * No-op.
 */
function noop() {}

noop();

/*
 * Tests.
 */

describe('toString()', function () {
    it('should return `value` if existing', function () {
        equal(toString({
            'value': 'AT'
        }), 'AT');
    });

    it('should return `value` of `children` when existing', function () {
        equal(toString({
            'children': [
                {
                    'value': 'AT'
                }
            ]
        }), 'AT');
    });

    it('should concatenate `children`', function () {
        equal(toString({
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
        }), 'AT&T');
    });

    it('should concatenate multi-level `children`', function () {
        equal(toString({
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
        }), 'AT&T');
    });

    it('should concatenate a list of nodes', function () {
        equal(toString([
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
        ]), 'AT&T');
    });
});
