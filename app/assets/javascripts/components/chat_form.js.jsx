var ChatForm = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    };
  },

  hundleChangeText: function(e) {
    this.setState({ text: e.target.value });
  },

  hundleSubmit: function(e) {
    e.preventDefault();
    this.props.onSubmitForm({
      message: this.state
    });
  },

  render: function() {
    return (
      <form onSubmit={this.hundleSubmit}>
        <div className="form-group">
          <label htmlFor="inputText">Text</label>
          <input
            type="text"
            className="form-control"
            id="inputText"
            value={this.text}
            onChange={this.hundleChangeText}
          />
        </div>
      </form>
    );
  }
});
