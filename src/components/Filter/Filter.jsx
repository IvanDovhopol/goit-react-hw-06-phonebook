import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/contactsSlice';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  function changeFilter(e) {
    dispatch(filteredContacts(e.target.value));
  }

  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={changeFilter} />
    </Label>
  );
};
