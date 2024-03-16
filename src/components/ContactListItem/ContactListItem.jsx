import React from 'react';

const ContactListItem = ({ contact, onDelete }) => {
  return (
    <li>
      {contact.name}: {contact.phone}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default ContactListItem;
