var GroceryList = () => (
  <div>
    <ul>
      <Cucumbers />
      <Kale />
    </ul>
  </div>
);

var Cucumbers = () => (
  <li>Cucumbers</li>
);

var Kale = () => (
  <li>Kale</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));