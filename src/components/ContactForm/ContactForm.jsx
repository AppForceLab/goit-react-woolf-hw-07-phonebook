import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import { toast } from 'react-toastify';
import './ContactForm.css';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Zа-яА-Я]+([' -]?[a-zA-Zа-яА-Я ]+)*$/;
    return nameRegex.test(name);
  };

  const validatePhone = (phone) => {
    const phoneRegex =
      /^\+?\d{1,4}?([-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}){1,2}([-.\s]?\d{1,9})?$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateName(name)) {
      toast.error('Please enter a valid name. Name may contain only letters, apostrophe, dash and spaces.');
      return;
    }
    if (!validatePhone(phone)) {
      toast.error('Please enter a valid phone number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +');
      return;
    }
    const duplicate = contacts.find((contact) => contact.name === name);
    if (duplicate) {
      toast.warn(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
