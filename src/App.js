import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useEffect, useState } from 'react';

function App() {
  const [allStores, setAllStores] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [formData, setFormData] = useState({ name: "", image: "", season: "", episode: ""})

  useEffect(() => {
    fetch("http://localhost:8085/stores")
    .then(r => r.json())
    .then(data => setAllStores(data))
  },[])

  function handleFormSubmit(e){
    e.preventDefault()
    fetch("http://localhost:8085/stores", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => setAllStores([...allStores, data]))
  }
  function handleFormChange(e){
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }


  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search setSearchData={setSearchData}/>
      <NewStoreForm formData={formData} handleFormSubmit={handleFormSubmit} handleFormChange={handleFormChange}/>
      <StoreList allStores={allStores} searchData={searchData}/>
    </div>
  );
}

export default App;
