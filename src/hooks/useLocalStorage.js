import { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  localStorage.setItem(key, JSON.stringify(initialValue));
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [name, setName] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(name))
  }, [name])
  
  return [name, setName];
}
