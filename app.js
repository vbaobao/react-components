var GroceryList = () => (
  <div>
    <ul>
      <GroceryListItem item='Cucumbers' />
      <GroceryListItem item='Kale' />
    </ul>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  onHover() {
    this.setState({hover: !this.setState.clicked});
  }

  render() {
    var style = {
      fontWeight: this.state.hover
      ? 'bold'
      : 'none'
    };

    return (
      <li 
        style={style}
        onMouseOver={this.onHover.bind(this)}>
        {this.props.item}
      </li>
    );
  }
}

var Cucumbers = () => (
  <li>Cucumbers</li>
);

var Kale = () => (
  <li>Kale</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));