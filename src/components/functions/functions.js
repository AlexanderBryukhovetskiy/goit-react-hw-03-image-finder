import axios from 'axios';

const fetchPictures = async (searchName, page) => {

  console.log('Это searchName в fetchPictures : ', searchName);

  console.log('Это page в fetchPictures : ', page);


  const KEY = "30822963-d0fd13470d1d847e8cb7d7e51";
  
  const response = await axios.get(`https://pixabay.com/api/?q=${searchName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);

  return response;
}

export default fetchPictures;