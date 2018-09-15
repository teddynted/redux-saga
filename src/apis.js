import axios from 'axios';

const posts = async () => await axios.get('/posts');
const getPost = async id => await axios.get('/post/:id', { params : { id: id } } );
const addPost = async data => await axios.post('/create', data);
const editPost = async data => await axios.put('/update', data);
const deletePost = async id => await axios.delete('/delete', { params : { id: id } });

export default { posts, getPost, addPost, editPost, deletePost };