import React, { createContext, useContext, useEffect, useState} from "react";
import firebase from './index'
const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ value = null, ...props }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => setUser(user))
  },[])
  return <Provider value={[user, setUser]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
