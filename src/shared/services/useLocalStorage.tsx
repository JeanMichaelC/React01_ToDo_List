import React from "react";

type Todo = {
	text: string,
	completed: boolean
}

function useLocalStorage(itemName: string, initialValue: Todo[]) {
    const [loading, setLoading] = React.useState(true);
    const [myError, setMyError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem =  initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItem(parsedItem);
          setLoading(false);
          
        } catch (error) {
          setMyError(true);
					console.log(error);
        }
      }, 1000);
    });
  
    const saveItem = (newItem: Todo[]) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setMyError(true);
				console.log(error);
      }
    };
  
    return { item, saveItem, loading, myError };
  }

  export { useLocalStorage };
