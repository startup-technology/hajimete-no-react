var Hello = React.createClass({
  getInitialState: function() {
    return {
      hello: [
        {id: 1, text: 'hoge'},
        {id: 2, text: 'fuga'}
      ],
      value: 'React!'
    }
  },

  hundleChangeForm: function(value) {
    this.setState({ value: value });
  },

  render: function() {
    var helloList = this.state.hello.map(hello => {
      return <HelloList key={hello.id} hello={hello.text} />;
    });

    return (
      <div>
        <h1>Hello {this.state.value}!</h1>
        <HelloForm onChangeForm={this.hundleChangeForm} />
        <ul>
          {helloList}
        </ul>
      </div>
    );
  }
});
