import {createContext, useContext, useState} from 'react';

export const DateContext = createContext({
  date: new Date(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDate: (date: Date) => {},
});

function DateContextProvider({children}: any) {
  const [theSelectedDate, setTheSelectedDate] = useState(new Date());

  function setDate(date: Date) {
    setTheSelectedDate(date);
  }

  const value = {
    date: theSelectedDate,
    setDate: setDate,
  };

  // eslint-disable-next-line react/react-in-jsx-scope
  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
}

export default DateContextProvider;
export const useDate = () => useContext(DateContext);
