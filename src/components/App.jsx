import { useSelector } from "react-redux";
import { selectIsLoading, selectError } from 'redux/selectors';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export const App = () => {
    const isLoadingStore = useSelector(selectIsLoading);
    const errorStore = useSelector(selectError);

    return (
        <div className={css.data}>

            <h1>Phonebook</h1>

            <ContactForm />

            <h2>Contacts</h2>

            <Filter />

            {isLoadingStore && <p>Loading data</p>}

            {errorStore && <p>Error: {errorStore}</p>}

            <ContactList />

        </div>
    )
}