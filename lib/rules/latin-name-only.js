'use strict';

const RUSSIAN = /[а-я,ё]/i;

module.exports = {
  create(context) {
    return {
      Identifier(node) {
        const {name} = node;

        if (!RUSSIAN.test(name)) return;

        context.report({
          node,
          message: 'variable name contains non Latin characters',
        });
      }
    };
  }
};
