var ChatMessage = React.createClass({

  render: function() {
    return (
      <div className="media">
        <div className="media-body">
          <div className="media-heading">
            <h4>{this.props.message.user.email}</h4>
          </div>
          <div>{this.props.message.text}</div>
        </div>
      </div>
    );
  }
});
