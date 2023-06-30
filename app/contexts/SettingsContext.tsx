import React, { createContext, useState } from 'react';

interface SettingsContextProps {
  dyslexiaFriendly: boolean;
  toggleDyslexiaFriendly: () => void;
}

export const SettingsContext = createContext<SettingsContextProps>({
  dyslexiaFriendly: false,
  toggleDyslexiaFriendly: () => {},

});

export const SettingsProvider = ({ children } : {
  children: React.ReactNode;
}) => {
  const [dyslexiaFriendly, setDyslexiaFriendly] = useState<boolean>(false);

  const toggleDyslexiaFriendly = () => {
    setDyslexiaFriendly((prev) => !prev);
  };

  return (
    <SettingsContext.Provider
      value={{
        dyslexiaFriendly,
        toggleDyslexiaFriendly,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}