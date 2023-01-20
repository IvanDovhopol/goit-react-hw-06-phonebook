import { Box } from 'components/Box';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <Box bg="primary" p={5}>
      <ContactForm />
      <Filter />
      <ContactList />
      <Toaster />
    </Box>
  );
};
