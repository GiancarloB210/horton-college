import { createContext, useContext, useState, useEffect } from 'react';
import Visit from '../classes/Visit'; // Path to your class file

const VisitsContext = createContext();

export function VisitsProvider({ children }) {
  const [visits, setVisits] = useState(() => {
    const saved = localStorage.getItem('scheduled_visits');
    if (!saved) return [];
    
    try {
      const rawArray = JSON.parse(saved);
      return rawArray.map(v => new Visit(v._full_name, v._date, v._time, v._meeting_host));
    } catch (e) {
      console.error("Failed to parse visits from localStorage", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('scheduled_visits', JSON.stringify(visits));
  }, [visits]);

  const addVisit = (visitInstance) => {
    setVisits((prev) => [...prev, visitInstance]);
  };

  const deleteVisit = (indexToDelete) => {
    setVisits((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <VisitsContext.Provider value={{ visits, addVisit, deleteVisit }}>
      {children}
    </VisitsContext.Provider>
  );
}

export const useVisits = () => useContext(VisitsContext);