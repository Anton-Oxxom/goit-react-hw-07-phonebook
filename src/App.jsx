import { ContactForm } from './components/contactForm';
import { ContactsList } from './components/contactList';
import { ContactsFilter } from './components/contactFilter/contactFilter';

export const App = () => {
  return (
     <div className="container">
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactsFilter />
      <ContactsList />
      </>
      </div>
  );
};