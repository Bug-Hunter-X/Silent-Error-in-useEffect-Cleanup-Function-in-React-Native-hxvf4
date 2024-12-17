# Silent Error in useEffect Cleanup Function

This repository demonstrates a common, yet subtle, bug in React Native applications involving the `useEffect` hook and its cleanup function.  The issue arises when the cleanup function throws an error after the component has unmounted.  This often leads to silent failures, making debugging challenging.

## The Problem
The provided `useEffectBug.js` file showcases the problem.  A cleanup function attempts to interact with the component's state after the component is unmounted, resulting in a silent error.  This error is not immediately apparent and can lead to unexpected application behavior.

## The Solution
The solution, in `useEffectBugSolution.js`, addresses this issue by adding a check to determine if the component is still mounted before executing any operations within the cleanup function.

## How to Run
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npx react-native run-android` or `npx react-native run-ios` to run the app on your device or emulator.