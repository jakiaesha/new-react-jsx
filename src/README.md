 NAME ==> DevStack 

DevStack is a small React app where you browse a list of popular web development technologies, add the ones you like to a personal "stack," and remove them whenever you change your mind. It was built as a practice project to get comfortable with React state, hooks, and working with local JSON data instead of hardcoded arrays.

Tech Used

. React
. TypeScript
. Tailwind CSS
. react-toastify

Features

 .Browse technologies — React, Node.js, PostgreSQL, Docker, and more, each with a rating, difficulty level, and short description.
 .Build your stack — click "Add to Stack" and the technology shows up in the sidebar instantly. Try adding the same one twice and you'll get a warning toast instead of a duplicate.
 .Remove with one click — take a single item out with the X button, or wipe the whole stack with "Remove All."


QUES ==> ANS:
i. What is JSX, and why is it used in React?
  -->JSX let me write HTML-like syntax inside JavaScript. It's used because it makes components easier to read and write than calling `React.createElement()` manually.

ii. What is the difference between props and state?
 -->Props are data passed into a component from its parent and can't be changed by that component. State is data a component manages itself and can update over time.

iii. What does the `useState` hook do, and where did you use it in this project?
 --.It lets a component store a value that can change and re-render the UI when it does. I used it for the technology list, the selected stack, and the loading status.

iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
 -->It runs code after render, usually for side effects like fetching data. I needed it to load the JSON file once when the page first loads.

v. Why does every item in a `.map()` list need a unique `key` prop?
 -->React uses the key to track which item is which between renders, so it can update the right element instead of the wrong one. I used `tech.id` as the key.

vi. What is conditional rendering? Show one place you used it.
 -->Showing different UI based on a condition. I used it in the sidebar — it shows "Your stack is empty" when there's nothing added, or the list of items when there is.

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
 -->The parent passes data down as props. To send something back up, the parent passes a function as a prop, and the child calls it — like `onAdd` and `onRemove` in this project.