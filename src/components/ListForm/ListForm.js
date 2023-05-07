import styles from './ListForm.module.scss';
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useState } from "react";
import { addList } from '../../redux/listsRedux';



const ListForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description}));
        setTitle('');
        setDescription('');
    }

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <label>Title: </label>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <label>Description: </label>
            <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
    );
};

export default ListForm;