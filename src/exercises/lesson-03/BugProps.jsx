// src/exercises/lesson-03/BugProps.jsx

import { useEffect, useState } from 'react';

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState(`Hello, ${name}`);

  // Run once on mount *and* whenever the prop `name` changes.
  useEffect(() => {
    setMessage(`Hello,  ${name}`);
  }, [name]);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// Updating the message variable works in plain JS because it was intantiated with `let`.
// However React won't see the changes to it because it isn't tracking it for changes.
// My proposed fix is to use a `useState` to set the initial state.
// then use it's setter method to update the value when the function `handleChange` is called.
// I also added a `useEffect` in case the name prop is changed upstream in the parent.
