import styles from './SearchForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { searchCard } from '../../redux/store.js';
import { useDispatch } from 'react-redux';

const SearchForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(searchCard(title));
        setTitle('');
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={title} onChange={e => setTitle(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;