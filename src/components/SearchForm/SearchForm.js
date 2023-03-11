import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {

    const [search, setSearch ] = useState ('');

    const dispatch = useDispatch();

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: search });
        setSearch('');
  };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;