var Chat = React.createClass({
  getInitialState: function() {
    return {
      messages: []
    }
  },

  componentDidMount: function() {
    this.fetchMessages();
  },

  hundleSubmitForm: function(message) {
    this.createMessage(message);
  },

  createMessage(message) {
    $.ajax({
      method: 'POST',
      url: this.props.create_message_path,
      dataType: 'json',
      data: message,
      cache: false,
      success: (data) => {
        this.fetchMessages();
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      },
      complete: () => {
        this.setState({disabled: false});
      }
    });
  },

  fetchMessages() {
    $.ajax({
      method: 'GET',
      url: this.props.messages_path,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({ messages: data.messages });
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      },
      complete: () => {
        this.setState({disabled: false});
      }
    });
  },

  renderCahtMessages: function() {
    return this.state.messages.map((message) => {
      return (
        <ChatMessage key={message.id} message={message} />
      );
    });
  },

  render: function() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <ChatForm onSubmitForm={this.hundleSubmitForm} />
          </div>
        </div>
        {this.renderCahtMessages()}
      </div>
    );
  }
});
