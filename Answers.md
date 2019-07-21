1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? 
Which method do we use to create a new object while extending the properties of another object?

We use .map, .filter. .reduce all of which will create a new array and not change our current array. We can use Object.create with a spread operator to copy and extends properties to another object. 

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions our the objects that contain both our types and payloads, the reducer will take in an action and add some logic to it. And the store is our source of state. This is great because now any component can connect to it, which I guess this is why it would also be called the  'single source of truth' in a redux. 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

I think the main difference between the two is that Application state is like our ‘global state’ and would be the same across all components and accessible by all components. While Component state would be the state that lives on one particular component. 

4.  What is middleware?

Middleware will intercept every action before it flows through to the Reducers. Giving us the ability to stop actions, forward, dispatch and change(intercept and dispatch a different action). 

5.  Describe `redux-thunk`, what does it allow us to do? How does it 
change our `action-creators`?

Thunk gives us the ability to change up the action creators to perform async calls.



6.  Which `react-redux` method links up our `components` with our `redux store`?

Connect and mapStateToProps both link up our components with our store. 
