# Example Carousel
Example Carousel is made with React Native.
Not require environment variables.

### Table of Contents

1. [Install](#install)
1. [Project structure](#project-structure)
1. [Tech stack](#tech-stack)
1. [Testing](#testing)
1. [Actions Naming](#actions)
1. [Code Review](#code-review)
1. [Commits](#commit-messages)

## Install

After clone this project you should install the npm packages and bower packages.

    npm install
    react-native run-android (for android)

To run the app you should use this command.

    npm start

### Project structure

These are the most important folders that you'll need to familiarise:
```
src/ -> root directory
 components/ -> Here are the components that are shared between whole application (e.g. Header and Footer)
 pages/ -> A page is a React Component that is imported into the routes
 services/ -> Here are the services to call the API
 store/
    entity/
        __tests__/
            actions.test.js
            reducer.test.js
            sagas.test.js
            selectors.test.js
            types.test.js
        actions.js
        initialState.js
        reducer.js
        sagas.js
        selectors.js
        types.js
    index.js -> In this file is the store config.
    reducers.js -> In this file is the combine reducers.
    sagas.js -> In this file is the combine sagas.
```

### Tech stack

These are the core dependencies you'll need to familiarise yourself with:

- [React Native](https://https://reactnative.dev)
- [Redux](https://redux.js.org) (handles state management)
- [redux-saga](https://redux-saga.js.org) (handles side-effects in Redux, such as API calls)
- [Styled Components](https://styled-components.com/) (for writing styles)
- [Jest](https://jestjs.io) (testing framework)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) (DOM interface for testing)

### Testing

Run tests:

```sh
npm run test
npm run test:watch # Run in watch mode
```

Lint the code with [ESLint](https://eslint.org):

```sh
npm run lint
npm run lint:fix # Fix issues
```

When writing tests, make sure to use the following format to keep the tests clean and consistent:
```jsx
import { getByText } from "@testing-library/react";

import Button from "./Button";

describe("<Button>", () => {
  let props;
  const getComponent = () => render(Button, props);

  beforeEach(() => {
    props = {
      children: "Label"
    };
  });
  afterEach(tearDown);

  it("should render `props.children`", () => {
    const { container } = getComponent();
    expect(getByText(container, props.children)).toBeInTheDocument();
  });

  describe("when `props.plus` is `true`", () => {
    beforeEach(() => {
      props.plus = true;
    });

    it("renders a plus character", () => {
      const { container } = getComponent();
      expect(getByText(container, `+ ${props.children}`)).toBeInTheDocument();
    });
  });
});
```

### Actions

#### Request actions example

For requests, we use the following format:

```js
export const signInRequest = (username, password) => ({type: types.SIGN_IN_REQUEST, username, password});
export const signInSuccess = token => ({type: types.SIGN_IN_SUCCESS, token});
export const signInError = error => ({type: types.SIGN_IN_ERROR, error});
```

In the UI, `signInRequest` is what's actually called. The rest of the actions, such as success and error are called by the saga.

##### Action types example

A `types.js` file is also created for the action types. This is for use in `actions.js` and its respective test file:

```js
const PREFIX = "session/";

export const SIGN_IN_REQUEST = `${PREFIX}SIGN_IN_REQUEST`;
export const SIGN_IN_SUCCESS = `${PREFIX}SIGN_IN_SUCCESS`;
export const SIGN_IN_ERROR = `${PREFIX}SIGN_IN_ERROR`;
```

A `types.js` file should also have its own tests, to double-check no typos were made (which can happen).

### Code review

Create a pull request for any changes in the following format:

```md
# Overview

Basic overview of the changes made.

## Changes

- A more detailed list
- Of things that have changed

## How to test

1. List instructions for how to test
2. Make sure it's detailed and includes the exact steps
```

## Contribution guidelines

### Git guidelines

The repository has one branch:

1. `master` (production)

When you work, create one of the following branches:

#### `feat/...`

#### `fix/...`

### commit messages

The commit message should has the following format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Example:
```
fix(middleware): ensure Range headers adhere more closely to RFC 2616
```
