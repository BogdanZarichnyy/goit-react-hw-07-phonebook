import { useSelector, useDispatch } from "react-redux";

import { selectContacts } from 'redux/selectors';
import { addContactsThunk } from 'redux/thunks/operations';

import css from './ContactForm.module.css'

export const ContactForm = () => {

    const contactsStore = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleAddName = event => {
        event.preventDefault();

        const { value: name } = event.target.elements.name;
        const { value: phone } = event.target.elements.number;

        const contact = {
            name,
            phone,
        };

        if (contactsStore.map(contact => contact.name).includes(name)) {
            alert(`${name} is already in contacts`);
            return;
        }

        dispatch(addContactsThunk(contact));
        event.target.reset();
    }

    return (
        <form className={css.form} onSubmit={handleAddName} >

            <label className={css.label} htmlFor="name" >Name</label>
            <input className={css.input} id="name" type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" placeholder="Enter name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required />
            
            <label className={css.label} htmlFor="phone" >Number</label>
            <input className={css.input} id="phone" type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" placeholder="000-000-0000" required />

            <button className={css.button} type="submit">Add contact</button>

        </form>
    )
}