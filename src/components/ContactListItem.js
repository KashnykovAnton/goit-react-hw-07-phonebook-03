import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

export default function ContactList({ id, name, number }) {
  const dispatch = useDispatch();

  const onDelete = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        type="button"
        id={id}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
