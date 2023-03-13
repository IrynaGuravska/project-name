import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString, getSearchString } from '../../redux/store';

const SearchForm = () => {

    const searchString = useSelector(getSearchString);

    const [search, setSearch] = useState(searchString);

    const dispatch = useDispatch();

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(updateSearchString(search));
      
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