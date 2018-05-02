var React = require('react');
var ReacDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
	render() {
		return (
			<div>
        Hello Bryan!
      </div>
		)
	}
}

ReacDOM.render(
  <App />,
  document.getElementById('app')
);
