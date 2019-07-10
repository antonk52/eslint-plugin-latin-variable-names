'use strict'

const RuleTester = require('eslint').RuleTester

const rule = require('../../../lib/rules/latin-name-only');

const ruleTester = new RuleTester()

ruleTester.run('latin-name-only', rule, {
    valid: [
        'var validVariable = true',
    ],

    invalid: [
        {
            code: 'var invalidVariableРусскиеСимоволы = true',
            errors: [ { message: 'variable name contains non Latin characters' } ]
        },
        {
            code: 'var РусскиеВНачалеinvalidVariable = true',
            errors: [ { message: 'variable name contains non Latin characters' } ]
        },
        {
            code: 'var РУССКИЕ_БОЛЬШИЕ = true',
            errors: [ { message: 'variable name contains non Latin characters' } ]
        },
        {
            code: 'var русские_маленькие = true',
            errors: [ { message: 'variable name contains non Latin characters' } ]
        }
    ]
});
