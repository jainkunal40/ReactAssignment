import React, { useState } from 'react'

const AddcontactForm = props => {
	const initialFormState = { id: null, name: '', contactname: '', email: '', phone: '' }
	const [contact, setcontact] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setcontact({ ...contact, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!contact.name || !contact.contactname || !contact.email || !contact.phone) return

				props.addcontact(contact)
				setcontact(initialFormState)
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
			<button>Add new contact</button>
		</form>
	)
}

export default AddcontactForm
