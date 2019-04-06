import React, { Component } from 'react';
import './App.css';

const data = {
	"Ivel Z3": {
		manufacturer: "Ivasim",
		year: 1969,
		origin: "Croatia"
	},
	"Bally Astrocade": {
		manufacturer: "Bally Consumer Products",
		year: 1977,
		origin: "USA"
	},
	"Sord M200 Smart Home Computer": {
		manufacturer: "Sord Computer Corporation",
		year: 1971,
		origin: "Japan"
	},
	"Commodore 64": {
		manufacturer: "Commodore",
		year: 1982,
		origin: "USA"
	}
}

class App extends Component {
  state = {

  }

  updateSelection = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  renderOptions = (data) => {
  	const models = Object.keys(data)
  	return models.map(model => {
  		return (
  			<option value={model} key={model}>
  				{model} ({data[model].year})
  			</option>
  		)
  	})
  }

  render() {
  	return (
  		<div className="App">
  			<select onChange={this.updateSelection} value={this.state.value}>
  				<option value="">-- Pick a model --</option>
  				{this.renderOptions(data)}
  			</select>
  		</div>
  	);
  }
}

export default App;
