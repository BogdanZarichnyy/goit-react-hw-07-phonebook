import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectContacts, selectFilter, selectFilteredContacts } from 'redux/selectors';
import { getContactsThunk, deleteContactsThunk } from 'redux/thunks/operations';

import css from './ContactList.module.css'

export const ContactList = () => {

    const contactsAll = useSelector(selectContacts);
    const findName = useSelector(selectFilter);
    const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContactsThunk());
    }, [dispatch]);

    const handleDeleteName = (id) => {
        dispatch(deleteContactsThunk(id));
    }

    return (
        <ul className={css.list}>
            {!!findName ?
                filteredContacts.map(contact => (
                    <li key={contact.id}>{contact.name}: {contact.phone}
                        <button className={css.btndel} onClick={() => handleDeleteName(contact.id)} type="button">delete</button>
                    </li>
                )) :
                contactsAll.map(contact => (
                    <li key={contact.id}>{contact.name}: {contact.phone}
                        <button className={css.btndel} onClick={() => handleDeleteName(contact.id)} type="button">delete</button>
                    </li>
                ))
            }
        </ul>
    )
}