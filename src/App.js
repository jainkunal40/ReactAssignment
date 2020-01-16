import React, { useState, Fragment } from 'react'
import AddcontactForm from './forms/AddcontactForm'
import EditcontactForm from './forms/EditcontactForm'
import contactTable from './tables/contactTable'

const App = () => {
	// Data
	const contactsData = [
		{ id: 1, name: 'Tania', contactname: 'floppydiskette', email: 'Tania@floppydiskette.com', phone: '123456789' },
		{ id: 2, name: 'Craig', contactname: 'siliconeidolon', email: 'Craig@siliconeidolon.com', phone: '123456789' },
		{ id: 3, name: 'Ben', contactname: 'benisphere', email: 'Ben@benisphere.com', phone: '123456789' },
	]

	const initialFormState = { id: null, name: '', contactname: '', email: '', phone: '' }

	// Setting state
	const [contacts, setcontacts] = useState(contactsData)
	const [currentcontact, setCurrentcontact] = useState(initialFormState)
	const [editing, setEditing] = useState(false)

	// CRUD operations
	const addcontact = contact => {
		contact.id = contacts.length + 1
		setcontacts([...contacts, contact])
	}

	const deletecontact = id => {
		setEditing(false)

		setcontacts(contacts.filter(contact => contact.id !== id))
	}

	const updatecontact = (id, updatedcontact) => {
		setEditing(false)

		setcontacts(contacts.map(contact => (contact.id === id ? updatedcontact : contact)))
	}

	const editRow = contact => {
		setEditing(true)

		setCurrentcontact({ id: contact.id, name: contact.name, contactname: contact.contactname })
	}

	return (
		<div className="container">
			<h1>React App</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit contact</h2>
							<EditcontactForm
								editing={editing}
								setEditing={setEditing}
								currentcontact={currentcontact}
								updatecontact={updatecontact}
							/>
						</Fragment>
					) : (
							<Fragment>
								<h2>Add contact</h2>
								<AddcontactForm addcontact={addcontact} />
							</Fragment>
						)}
				</div>
				<div className="flex-large">
					<h2>View contacts</h2>
					<contactTable contacts={contacts} editRow={editRow} deletecontact={deletecontact} />
				</div>
			</div>
		</div>
	)
}

export default App
