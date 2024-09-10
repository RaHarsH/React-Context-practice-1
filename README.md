# React Context API Practice - 1

This project is a simple implementation of the **React Context API** to understand how and why context is used in React applications. By practicing with a basic user authentication flow, I learned how to manage global state without the need for prop drilling.

## What I Learned

### Why Context is Used:
In React, when managing state across multiple components, especially deeply nested ones, `prop drilling` can become cumbersome. This is where **React Context API** comes in handy. It allows us to create a global state that can be accessed by any component, regardless of its depth in the component tree. This makes managing shared state simpler and more efficient.

### Context API Features Practiced:
- **Creating a Context**: I created a `UserContext` to hold and provide user data across components.
- **Providing Context**: Used the `UserContextProvider` component to wrap parts of the app that need access to the global state.
- **Consuming Context**: In components like `Login` and `Profile`, I used `useContext` to access and update the user data.

## Project Components

### 1. **Login Component**
- Allows users to input their username and password.
- When the user submits the form, it updates the global `UserContext` with the user details.

### 2. **Profile Component**
- Displays a welcome message with the user's username once they are logged in.
- If the user is not logged in, it prompts the user to log in first.

### 3. **UserContext and UserContextProvider**
- Manages the global state for user authentication.
- Provides the `setUser` and `user` state to all components within the app.

### 4. **App Component**
- The main component that ties everything together.
- Displays the `Login` and `Profile` components and wraps them in the `UserContextProvider` for access to the global state.

## Conclusion

Through this practice project, I gained hands-on experience with the **React Context API** and learned how to manage global state effectively in React applications. By applying context, I was able to avoid prop drilling and simplify the management of user data across multiple components.