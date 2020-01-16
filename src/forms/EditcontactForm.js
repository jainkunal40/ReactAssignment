import React, { useState, useEffect } from 'react'

const EditcontactForm = props => {
  const [contact, setcontact] = useState(props.currentcontact)

  useEffect(
    () => {
      setcontact(props.currentcontact)
    },
    [props]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setcontact({ ...contact, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updatecontact(contact.id, contact)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={contact.name} onChange={handleInputChange} />
      <label>contactname</label>
      <input type="text" name="contactname" value={contact.contactname} onChange={handleInputChange} />
      <label>Email</label>
      <input type="text" name="email" value={contact.email} onChange={handleInputChange} />
      <label>Phone</label>
      <input type="number" name="phone" value={contact.phone} onChange={handleInputChange} />
      <button>Update contact</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditcontactForm
