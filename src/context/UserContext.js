import React, { createContext } from 'react'

const UserContext = createContext();

export default UserContext;


// if createContext is not imported then use this syntax

// const UserContext = React.createContext()