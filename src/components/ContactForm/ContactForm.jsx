import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import toast from 'react-hot-toast';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  TextError,
  StyledForm,
  Input,
  Label,
  Button,
} from './ContactForm.styled';

const schema = Yup.object({
  name: Yup.string().required(),
  number: Yup.number().required(),
});

const initialValues = {
  name: '',
  number: '+' + 380,
};

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (contacts.some(e => e.name === name)) {
      resetForm();
      return errorToast();
    }

    dispatch(addContact(name, number));
    resetForm();
    addToast(name);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <>
        <h1>Phonebook</h1>
        <StyledForm>
          <Label>
            Name
            <Input type="text" name="name" />
            <TextError name="name" component="div" />
          </Label>

          <Label>
            Number
            <Input type="tel" name="number" />
            <TextError name="number" component="div" />
          </Label>

          <Button type="sumbit">Add contact</Button>
        </StyledForm>
      </>
    </Formik>
  );
};

function addToast(name) {
  return toast.success(`Contact ${name} successfully added!`, {
    style: {
      border: '1px solid green',
      padding: '16px',
      color: 'green',
    },
  });
}

function errorToast() {
  return toast.error('A contact with the same name already exists!', {
    style: {
      border: '1px solid red',
      padding: '16px',
      color: 'red',
    },
  });
}
