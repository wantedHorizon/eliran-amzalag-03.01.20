import { useState, useEffect } from 'react';
import weatherAPI from '../api/weatherAPI';

const useLocations = (defaultSearchTerm) => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    try {

      if (!term) {
        return;
      }


      const response = await weatherAPI.get('/locations/v1/cities/autocomplete', {
        params: {
          q: term,
        },
      });

      if (response.status !== 200) {
        throw new Error('Data is not available');
      }
      if (response.data.length < 1) {
        throw new Error('location not found');
      }


      setLocation(response.data[0]);
    } catch (e) {
      alert(e)
    }
  };

  return [location, search];
};

export default useLocations;
