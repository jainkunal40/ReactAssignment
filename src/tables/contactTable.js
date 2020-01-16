import React from 'react'

const contactTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>contactname</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.contacts.length > 0 ? (
        props.contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.contactname}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(contact)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deletecontact(contact.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No contacts</td>
          </tr>
        )}
    </tbody>
  </table>
)

export default contactTable
