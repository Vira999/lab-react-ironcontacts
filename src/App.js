import './App.css';
import listContacts from "./contacts.json";
import { useState } from "react"


function App() {
  
  const contacts = listContacts.slice(0,5)
  const [popular, setPopular] = useState(contacts)


  function randomPopular() {
    let random = listContacts[Math.floor(Math.random() * listContacts.length)]
    let exists = false

    for(let i=0; i < popular.length; i++) {
      if(popular.includes(random)) {
      exists = true
      }
    }
    if(!exists) {
      setPopular(popular.concat([random]))
    }
  }

  const sortName = () => {
    const isPopular = [...popular]
    const sortedPopular = isPopular.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    setPopular(sortedPopular)
  }

  const sortPopularity = () => {
    const isPopular = [...popular]
    const sortedPopularity = isPopular.sort((a, b) => 
    b.popularity - a.popularity
    )
    setPopular(sortedPopularity)
  }

  const deletePopular = (id) => {
    const deletedPopular = popular.filter(a => a.id !== id)
    setPopular(deletedPopular)
  }

  return (
    <div className="App">
    <button onClick={randomPopular}>Add Random Contact</button>
    <button onClick={sortPopularity}>Sort by popularity</button>
    <button onClick={sortName}>Sort by name</button>
     <table>
            <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
            </thead>
            <tbody>
      {popular.map(contact => {
      
        return(
          <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt="#" width="100px" height="150px"/></td>
             <td><h3>{contact.name}</h3></td>
             

             <td><button className="delete-btn" onClick={() => deletePopular(contact.id)}>Delete</button></td>
            </tr>
        )
      })}
            </tbody>
    </table>
    </div>
  );
  
}

export default App;