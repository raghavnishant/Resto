import  {useState, useEffect} from 'react';
import yelp from '../api/yelp';


export default () => {

  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState('')

  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params:{
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses)

    } catch (err) {
        setErrMessage('something Went wrong')
    }
  }

  useEffect(() => {
    searchAPI('pasta');
  }, []);

  return [results, searchAPI, errMessage];

}