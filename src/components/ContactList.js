import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import ContactListItem from './ContactListItem';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const loader = useSelector(contactsSelectors.getLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(contactsOperations.fetchContact());
  }, [dispatch]);

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }, [filter, contacts]);

  return (
    <>
      {loader && <h1>Loading...</h1>}
      <ul>
        {!loader &&
          filteredContacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
      </ul>
      {filteredContacts.length === 0 && !loader && (
        <h1>There are no contacts in phonebook!</h1>
      )}
    </>
  );
}
