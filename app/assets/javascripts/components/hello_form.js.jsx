var HelloForm = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    }
  },

  hundleChange: function(e) {
    this.props.onChangeForm(e.target.value);
  },

  render: function() {
    return (
      <input type="text" onChange={this.hundleChange} />
    );
  }
});
