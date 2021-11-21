import { v4 as uuidv4 } from 'uuid';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { contactsActions } from 'redux/contacts';

export default function Component() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const changeFilter = useCallback(
    e => {
      dispatch(contactsActions.filterContact(e.target.value));
    },
    [dispatch],
  );

  return (
    <div>
      <label htmlFor={uuidv4()}>Find contacts by name</label>
      <input type="text" value={filter} id={uuidv4()} onChange={changeFilter} />
    </div>
  );
}
