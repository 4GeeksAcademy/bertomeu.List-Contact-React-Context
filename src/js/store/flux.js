const getState = ({ getStore, getActions, setStore }) => {

    return {
        store: {
            contacts: [],
            showModal: false,
            selectedContactId: null,
            
        },
        actions: {

            setShowModal: (value) => {
                setStore({ showModal: value });
            },
            
            setSelectedContactId: (id) => {
                setStore({ selectedContactId: id });
            },
         

            getContacts: () => {
                fetch("https://playground.4geeks.com/contact/agendas/bertomeu/contacts", {
                    method: "GET"
                })
                    .then(response => response.json())
                    .then((data) => {
                        setStore({ contacts: data.contacts });
                    })
                    .catch((err) => { console.error(err) })
            },
            createAgenda: () => {
                fetch("https://playground.4geeks.com/contact/agendas/bertomeu/", {
                    method: "GET"
                })
                    .then(response =>
                        response.status === 404
                            ? fetch("https://playground.4geeks.com/contact/agendas/bertomeu/", { method: "POST" })
                            : response.ok
                                ? response.json()
                                : null
                    )
                    .then((data) => {
                        setStore(data.store);
                    })
                    .catch((err) => { console.error(err) })
            },  
            createContact: (contact) => {
                fetch("https://playground.4geeks.com/contact/agendas/bertomeu/contacts", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(contact)
                })
                .then(response => response.json())
                .then(() => {
                    getActions().getContacts();
                })
                .catch((err) => {
                    console.error(err);
                });
            },  
            editContact: (id, contactData) => {
                fetch(`https://playground.4geeks.com/contact/agendas/bertomeu/contacts/${id}`, {
                    method: "PUT",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(contactData),
                })
                .then(response => response.json())
                .then(() => {
                    getActions().getContacts();
                })
                .catch((err) => {
                    console.error(err);
                });
            },
            deleteContact: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/bertomeu/contacts/${id}`, {
                    method: "DELETE",
                })
                    .then(response => {
						console.log(response);
						if (response.ok === true) {
							getActions().getContacts();
						}
												
						})
                   
                    .catch((error) => console.error("deleting contact failed:", error));
            },
        }
    };
};

export default getState;
