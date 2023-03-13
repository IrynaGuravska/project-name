import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TexInput from '../TextInput/TextInput';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = (props) => {

   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');

   const dispatch = useDispatch();

   const handleSubmit = e => {
      e.preventDefault();
      dispatch(addList({ title, description, listId: props.listId }));
      setTitle('');
      setDescription('');
   }

	return (
      <form className={styles.listForm} onSubmit={handleSubmit}>            
            <span>Title:</span> <TexInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span>Description:</span>  <TexInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
      </form>
	);
};

export default ListForm;