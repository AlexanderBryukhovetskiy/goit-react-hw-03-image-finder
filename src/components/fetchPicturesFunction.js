import axios from 'axios';

const KEY = "30822963-d0fd13470d1d847e8cb7d7e51";

const requestParams = `https://pixabay.com/api/?q=${searchName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export default fetchPictures = async (searchName) => {
    const response = await axios.get(requestParams);
    console.log(response);
    return response;
}