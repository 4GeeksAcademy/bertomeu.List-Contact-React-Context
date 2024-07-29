import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard";
import { Context } from "../store/appContext";


export const Home = () => {
    
    const {store, actions} = useContext(Context);

    
    return(
    <div className="text-center mt-5">
        {store.contacts && store.contacts.map( (contact) => {
            return  <ContactCard contact = {contact} key = {contact.id} />

        })}       
    </div>
);}
