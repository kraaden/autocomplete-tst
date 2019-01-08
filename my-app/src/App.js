import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import autocomplete from 'autocompleter';

class App extends Component {

    componentDidMount() {
        var countries = [
            { label: 'United Kingdom', value: 'UK' },
            { label: 'United States', value: 'US' }
        ];

        autocomplete({
            input: document.getElementById("testautocomplete"),
            fetch: function(text, update) {
                text = text.toLowerCase();
                // you can also use AJAX requests instead of preloaded data
                var suggestions = countries.filter(n => n.label.toLowerCase().startsWith(text))
                update(suggestions);
            },
            onSelect: function(item) {
                alert(item.value); // will display 'US' or 'UK'
            }
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
          </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
          </a>
                    <input id="testautocomplete" />
                </header>
            </div>
        );
    }
}

export default App;
