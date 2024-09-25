import React, { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const nordic_content_api = 'https://script.googleusercontent.com/macros/echo?user_content_key=iMaP22sxo-fsjXG0ba3mnFCrt7ontuDzufJOhz5ol0J_vQbP6TZAfMRIZaxmE4UaY48cfdLLhwoldTZIzhI-KBe6OCV9DeKHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJzLwGfuhkCNqxQa9kuEv3KJLVSb5oJb9uStqIjVpJWjdqo622vA5aoWsxtf9QFCcXSGjRPE9HUoFQsyqWWoEiiq5pVper52aNz9Jw9Md8uu&lib=MSRFmy_XI3TEf9lVBxVUpUJtpwB-YuBiL';

  useEffect(() => {
    // Only fetch data if it hasn't been fetched before
    if (!data) {
      const fetchData = async () => {
        try {
          const response = await fetch(nordic_content_api);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result.data);
          // Store the fetched data in local storage
          // localStorage.setItem('nordicData', JSON.stringify(result.data));
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } else {
      // If data is already present, set loading to false
      setLoading(false);
    }
  }, [data, nordic_content_api]); // Run effect if data changes

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};