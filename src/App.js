import axios from "axios";
import { useState, useEffect } from "react";
import Print from "./Components/print";
import "./App.css";

const App = () => {
  const [names, setNames] = useState([]);
  const [newEntry, setNewEntry] = useState({ name: "", role: "Jr.Engineer" });
  useEffect(() => {
    getData();
  }, [names]);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/");
    const namesData = response.data;
    setNames(namesData);
  };

  const postNewData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/user", newEntry)
      .then((response) => {
        console.log("yes");
      })

      .catch(function (error) {
        console.log(error);
      });
    setNewEntry({ name: "", role: "Jr.Engineer" });
  };

  const updateName = (e) => {
    setNewEntry({ ...newEntry, name: e.target.value });
  };

  const updateRole = (e) => {
    setNewEntry({ ...newEntry, role: e.target.value });
  };

  return (
    <div className="app-container">
      <h1 className="heading">List of Employees</h1>
      <form className="inputs-container" onSubmit={postNewData}>
        <div className="name-input-container">
          <label htmlFor="name" className="label-text">
            Name
          </label>
          <input
            onChange={updateName}
            type="text"
            className="input-text"
            placeholder="Enter Name"
            id="name"
            value={newEntry.name}
          />
        </div>
        <div className="name-input-container">
          <label htmlFor="role" className="label-text">
            Role
          </label>
          <select className="drop-down" id="role" onClick={updateRole}>
            <option selected="selected" className="options" value="Jr.Engineer">
              Jr.Engineer
            </option>
            <option className="options" value="Sr.Engineer">
              Sr.Engineer
            </option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <table>
        <tr>
          <th>ID</th>
          <th>Name of the employee</th>
          <th>Role</th>
        </tr>
        <tbody>
          {names.map((each) => (
            <Print info={each} key={each.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
