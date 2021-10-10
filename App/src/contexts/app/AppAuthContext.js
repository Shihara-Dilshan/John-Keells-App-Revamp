import React, {createContext, useState} from 'react';

export const AppAuthContext = createContext();

export const AppAuthProvider = props => {
  const [AppAuthState, setAppAuthState] = useState({
    isLoading: true,
    isLoggedIn: false,
    authToken: '',
    primaryMobile: '',
    isFirstTime: true
  });

  return (
    <AppAuthContext.Provider value={[AppAuthState, setAppAuthState]}>
      {props.children}
    </AppAuthContext.Provider>
  );
};
