# component and file name

component name should be start with uppercase letter and its good practice to have file name same as component name but it doesn't have to be start with uppercase letter.

# Props:

just a data passed into the component

# List and Keys

When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its’ children.

Ex:` <li key="uniqueId1" >Item1</li>`
[further reading](https://sentry.io/answers/unique-key-prop/)

# State:

State is data inside the component and it used to keep track of information. Its changeable and when it changes it causes the component to re-render

# UseState one of the react hooks:

- react hooks always start with use. its a convention
- it has one variable and a function
