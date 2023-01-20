import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilters } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { Btn } from 'components/App/App.styled';
import { Table, Heading, Row, Body, Notification } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();

  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
    );
  }

  function handleDelete(id) {
    dispatch(deleteContact(id));
  }

  const visibleContacts = getVisibleContacts();

  return visibleContacts.length ? (
    <Table>
      <thead>
        <tr>
          <Heading>Name</Heading>
          <Heading>Number</Heading>
        </tr>
      </thead>

      <tbody>
        {visibleContacts.map(({ id, name, number }) => (
          <Row key={id}>
            <Body>{name}</Body>
            <Body>{number}</Body>
            <Body>
              <Btn type="button" onClick={() => handleDelete(id)}>
                Delete
              </Btn>
            </Body>
          </Row>
        ))}
      </tbody>
    </Table>
  ) : (
    <Notification>Contact not found 😢</Notification>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
