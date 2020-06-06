import React from 'react';

const useFetch = (url, options) => {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(url, options);
        const items = await res.json();
        setItems(items);
      } catch (error) {
        setError(error);
      }
    };
    fetchItems();
  }, [url, options]);

  return {items, error};
}

export default useFetch;
