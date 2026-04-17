import { createContext, useContext, useState, useEffect } from 'react';

const AuthUnlockContext = createContext({
  isUnlocked: false,
  setIsUnlocked: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const useAuthUnlock = () => useContext(AuthUnlockContext);

export const AuthUnlockProvider = ({ children }) => {
  const [isUnlocked, setIsUnlocked] = useState(
    () => sessionStorage.getItem('isUnlocked') === 'true'
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => sessionStorage.getItem('isLoggedIn') === 'true'
  );

  useEffect(() => {
    sessionStorage.setItem('isUnlocked', isUnlocked);
  }, [isUnlocked]);

  useEffect(() => {
    sessionStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthUnlockContext.Provider value={{ isUnlocked, setIsUnlocked, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthUnlockContext.Provider>
  );
};
