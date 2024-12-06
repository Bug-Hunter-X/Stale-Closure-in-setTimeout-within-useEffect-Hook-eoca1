# Stale Closure Bug in React useEffect Hook
This repository demonstrates a common error in React functional components when using `setTimeout` inside the `useEffect` hook.  The problem arises from the closure over the `count` variable.  The `setTimeout` callback uses the value of `count` at the time the `useEffect` runs, not the updated value.

## Bug Description
The `bug.js` file contains a React functional component that attempts to increment a state variable (`count`) every second using `setTimeout` within a `useEffect` hook. However, due to the closure over the initial `count` value, the component does not update correctly, and the count remains stuck at 0 or 1.

## Solution
The solution (`bugSolution.js`) utilizes the functional update pattern with `setCount`. This approach ensures that `setCount` uses the latest value of `count` before updating it.