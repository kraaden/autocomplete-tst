import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import autocomplete, { AutocompleteSettings, AutocompleteItem, AutocompleteResult } from 'autocompleter';

class App extends Component {

    componentDidMount() {
        var countries = [
            { label: 'United Kingdom (UK)', value: 'UK' },
            { label: 'United States (US)', value: 'US' }
        ];

        autocomplete({
            input: document.getElementById("testautocomplete"),
            fetch: function(text, update) {
                text = text.toLowerCase();
                // you can also use AJAX requests instead of preloaded data
                var suggestions = countries.filter(n => n.label.toLowerCase().indexOf(text) !== -1);
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
          <span>Test:</span>
                    <input id="testautocomplete" />
                </header>
            </div>
        );
    }
}

export default App;
