# Component Lifecycle Methods Cheat Sheet

### `constructor()`

We first saw the constructor when we were introduced to `state`. Like any JavaScript class, the `constructor` method is called when a component is instantiated.

In a class constructor, you must call `super` before you do anything else. So a React component constructor in its most basic form looks like this:

```javascript
constructor(props) {
  super(props)
}
```

You don't need to define a constructor if that's all it does, though. This happens automatically when your component is invoked. A common use of the constructor is to initialize state using the props passed to the component - as we have been doing!

```javascript
constructor(props) {
  super(props)

  this.state = {
     flashcards: [],
     currentIndex: 0,
     show: false
  }
}
```

> This constructor sets the initial `flashcards` state of the component to an empty array. Then, using `setState`, you can add flashcards, delete them, or whatever else your component allows. We also set the `currentIndex` to 0. This will be the index of the card we are currently on. `show` will represent whether the definition of the card is visible or not.

### `UNSAFE_componentWillMount()`

This method is called immediately before a component is rendered to the DOM. You generally won't need to use this method. Advanced use-cases like server-rendering are usually the only ones in which `componentWillMount` is needed.

### `componentDidMount()` and `componentWillUnmount()`

The `componentDidMount` method is called once, immediately after your component is rendered to the DOM. If you want to make an AJAX request when your component first renders, this is where to do it (_not_ in the constructor, or in `componentWillMount`). `componentWillMount` should not be used for server requests because it may be invoked multiple times before render in future versions of React. [Side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) should be avoided in the `constructor`, and so server requests shouldn't be made there. The accepted answer on [this Stack Overflow](http://stackoverflow.com/questions/41612200/in-react-js-should-i-make-my-initial-network-request-in-componentwillmount-or-co) from a member of the React team at Facebook gives more detail.

Another common use for `componentDidMount` is to bind event listeners to your component. You can then remove the event listeners in `componentWillUnmount`. For example, you could bind and unbind an event listener for a drag-drop component.

### `render()`

This is the one method that every React class component **must** have. In render, you return JSX using the component's props and state. You should never set state in render - render should only react to changes in state or props, not create those changes.

### `UNSAFE_componentWillReceiveProps(newProps)`

This method is called any time your component receives new props. It is _not_ called with the initial props when your component initially mounts. If you need to change the state of your component based on changes in the props, this is where you do it. In a simple app, you generally won't need `componentWillReceiveProps`.

### `shouldComponentUpdate`, `UNSAFE_componentWillUpdate`, `componentDidUpdate`

These methods are called when a component's props or state change, and are generally used for performance optimizations. React is quite fast by itself, and you usually don't need to concern yourself with these methods outside of a large app with many dynamic components.
