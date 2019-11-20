# eslint-plugin-latin-variable-names

Helps to keep non latin characters from your code base

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-latin-variable-names`:

```
$ npm install eslint-plugin-latin-variable-names --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-latin-variable-names` globally.

## Usage

Add `latin-variable-names` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "latin-variable-names"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "latin-variable-names/latin-name-only": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





