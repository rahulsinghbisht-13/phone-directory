import Header from "./Header";
import './App.css';

function App() {
  let subscribers = [
    {
      id: 1,
      name: "Rahul Singh Bisht",
      phone: "8888888888"
    },
    {
      id: 2,
      name: "John Green",
      phone: "9999999999"
    }
  ]
  return (
    <div id="parentDiv">
      <Header heading="Phone Directory" />
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>

        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {
          subscribers.map(sub => {
            return <div key={sub.id} className="grid-container">
            <span className="grid-item">{sub.name}</span>
            <span className="grid-item">{sub.phone}</span>
            <button id="delete">Delete</button>
            </div>
          })
        }
      </div>
    </div>
  );
}
export default App;
