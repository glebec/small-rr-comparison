# React & Redux vs. React-Redux

[![Greenkeeper badge](https://badges.greenkeeper.io/glebec/small-rr-comparison.svg)](https://greenkeeper.io/)

A tiny example demonstrating wiring react and redux together manually, vs. using the `react-redux` library's `connect` method. There is no backend.

## Setup

```sh
yarn # or npm install
```

## Running it

```sh
yarn start # simply opens index.html and starts webpack in watch mode
```

## The point

Compare and contrast all the files in `js/react`.

React-Redux's `connect` method simplifies marrying React components to a Redux store. Specifically, it removes the following:

* No need to `import store` in each component; the store is passed down by the `Provider`.
* No need to manually `subscribe` to the store or `getState`.
* No need to remember to `unsubscribe` from the store when a component unmounts.

React-Redux makes it possible to get state from the store, or dispatch actions to the store, by:

* Letting you map Redux state data to React component props
* Letting you map functions that use Redux dispatch to React component props

A side effect of using React-Redux's `connect` function is that your presentational components *might* become so simple they no longer need to be stateful classes (since all their interaction with Redux occurs solely through `props`).
