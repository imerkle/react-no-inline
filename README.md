# react-no-inline
Removes ugly Inline styles from React and adds in stylesheet with classnames.


`npm install --save react-no-inline`

### What is it?

`react-no-inline` provides an API to remove all inline styles of react and put them in a style sheet.

### Usage


```js
import noInline from 'react-no-inline';

const Div = () => (
  <div style={{
    backgroundColor: 'lightblue',
    fontSize: '12px'
  }}>
    No Inline Styles
  </div>
);

export default noInline(Div);
```
