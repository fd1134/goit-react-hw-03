import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState(() => {
    // Anahtar ile değeri okuyoruz
    const savedContacts = window.localStorage.getItem("contacts");

    // Eğer burada bir değer varsa, ayrıştırıyor ve
    // bunu durumun başlangıç değeri olarak döndürüyoruz
    if (savedContacts !== null) {
      try {
        return JSON.parse(savedContacts); // JSON parse hatası için try-catch kullanıyoruz
      } catch (error) {
        console.error("localStorage verisi geçersiz:", error);
        return [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ]; // Hata durumunda varsayılan değer döner
      }
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]; // Varsayılan değer
  });

  useEffect(() => {
    // contacts durumu değiştiğinde localStorage'a kaydediyoruz
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]); // contacts'a bağlı olarak tetiklenir
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      //    window.localStorage.setItem("contacts",JSON.stringify([newContact, ...prevContacts]));
      //useEffect kullandım sana gerek yok ama burada kal sen
      return [newContact, ...prevContacts];
    });
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      //  window.localStorage.setItem("contacts",JSON.stringify(prevContacts.filter((contact) => contact.id !== id)));
      //useEffect kullandım sana gerek yok ama burada kal sen
      // setContats asenkron bir işlem bundan dolayı önceki değerni alıp locale kaydettik unutma
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filterContact={setFilter} />
      <ContactList contactList={visibleContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
