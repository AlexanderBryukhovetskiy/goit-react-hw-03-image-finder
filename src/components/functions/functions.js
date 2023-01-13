import axios from 'axios';

const KEY = "30822963-d0fd13470d1d847e8cb7d7e51";

const fetchPictures = async (searchName) => {

  const response = await axios.get(`https://pixabay.com/api/?q=${searchName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);

  return response;
}

export default fetchPictures;