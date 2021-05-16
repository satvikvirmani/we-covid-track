import React from "react";
import Data from "./Countries"

const Countries = Data.map((item) => {
    return item.label
})
const Codes = Data.map((item) => {
    return item.alpha3
})

class CountryInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            matches: [],
            query: "",
            selected: false
        };

        this.handleKeyPress = this
            .handleKeyPress
            .bind(this);
        this.handleSelection = this
            .handleSelection
            .bind(this);
        this.updateQuery = this
            .updateQuery
            .bind(this);
    }

    handleKeyPress(event) {
        const {activeIndex, matches} = this.state;

        switch (event.which) {
            case 13: // Enter key
                if (matches.length) {
                    this.setState({activeIndex: 0, matches: [], query: matches[activeIndex], selected: true});
                }

                break;
            case 38: // Up arrow
                this.setState({
                    activeIndex: activeIndex >= 1
                        ? activeIndex - 1
                        : 0
                });
                break;
            case 40: // Down arrow
                this.setState({
                    activeIndex: activeIndex < matches.length - 1
                        ? activeIndex + 1
                        : matches.length - 1
                });
                break;
            default:
                break;
        }
    }

    handleSelection(event, selection) {
        event.preventDefault();

        this.input.value = selection

        this.setState({
            activeIndex: 0,
            query: selection,
            matches: [],
            selected: true
        }, () => {
            //Callback for Parent > Send Data to Parent
            this
                .props
                .parentCallback(Codes[Countries.indexOf(selection)], this.state.query);
        });

    }

    updateQuery(e) {
        if (!this.state.selected) {
            const query = e.target.value;
            this.setState({
                matches: query.length >= 1
                    ? Countries.filter(item => item.toUpperCase().indexOf(query.toUpperCase()) >= 0)
                    : [],
                query
            });
        } else {
            if (e.nativeEvent.inputType === "deleteContentBackward") {
                this.setState({matches: [], query: "", selected: false});
            }
        }
    }

    render() {
        const {activeIndex, matches, query} = this.state;

        return (
            <div className="w-64 h-8 relative mx-2 flex flex-row items-center">
                <input
                    type="text"
                    className="flex-grow p-2 rounded-md dark:bg-gray-800 dark:text-gray-400 ring-2 ring-purple-400 focus:ring-4 focus:ring-purple-500 focus:outline-none dark:focus:ring-4 dark:focus:ring-purple-500 dark:focus:outline-none border-0"
                    name="country-search"
                    onChange={this.updateQuery}
                    onKeyDown={this.handleKeyPress}
                    placeholder="Search Your Country"
                    id="input"
                    ref={el => this.input = el}
                    autocomplete="off"/> {matches.length > 0 && (
                    <div
                        className="ring-2 ring-purple-400 h-64 overflow-y-scroll absolute grid grid-cols-1 auto-rows-min items-start w-full top-8 py-2 dark:bg-gray-800 bg-gray-50">
                        {matches.map((match, index) => (
                            <a
                                className={`truncate px-2 h-8 dark:hover:bg-gray-700 hover:bg-gray-200 hover:font-bold dark:hover:font-bold hover:text-purple-500 dark:hover:text-purple-500 dark:text-gray-400 ${index === activeIndex
                                ? "text-purple-500"
                                : ""}`}
                                href="/"
                                key={match}
                                onClick={event => this.handleSelection(event, match)}>
                                {match}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        /*       <div className="field">
        <div className="control">
          <div className={`dropdown ${matches.length > 0 ? "is-active" : ""}`}>
            <div className="dropdown-trigger">
                <form>
                 <div className="field has-addons">
                <div className="control">
                  <input
                  type="text"
                  className="input"
                  name={name}
                  onChange={this.updateQuery}
                  onKeyDown={this.handleKeyPress}
                  placeholder={placeholder}
                  id="input"
                  ref={el => this.input = el}
                />
                </div>
                <div className="control">
                  <button type='submit' className="button" onClick={event => this.handleSearchClick(event)}>
                    <span className="icon">
                      <FontAwesomeIcon icon={faSearch} />
                    </span>
                  </button>
                </div>
            </div>
              </form>
            </div>
            <div className="dropdown-menu">
              {matches.length > 0 && (
                <div className="dropdown-content">
                  {matches.map((match, index) => (
                    <a
                      className={`dropdown-item ${
                        index === activeIndex ? "is-active" : ""
                      }`}
                      href="/"
                      key={match}
                      onClick={event => this.handleSelection(event, match)}
                    >
                      {match}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */
        );
    }
}

export default CountryInput;