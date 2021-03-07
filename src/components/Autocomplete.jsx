import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      matches: [],
      query: "",
      selected: false
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  handleKeyPress(event) {
    const { activeIndex, matches } = this.state;

    switch (event.which) {
      case 13: // Enter key
        if (matches.length) {
          this.setState({
            activeIndex: 0,
            matches: [],
            query: matches[activeIndex],
            selected: true
          });
        }

        break;
      case 38: // Up arrow
        this.setState({
          activeIndex: activeIndex >= 1 ? activeIndex - 1 : 0
        });
        break;
      case 40: // Down arrow
        this.setState({
          activeIndex:
            activeIndex < matches.length - 1
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
      this.props.parentCallback(this.state.query);
    });

  }

  updateQuery(e) {
    const { data } = this.props;

    if (!this.state.selected) {
      const query = e.target.value;
      this.setState({
        matches:
          query.length >= 1
            ? data.filter(
                item => item.toUpperCase().indexOf(query.toUpperCase()) >= 0
              )
            : [],
        query
      });
    } else {
      if (e.nativeEvent.inputType === "deleteContentBackward") {
        this.setState({
          matches: [],
          query: "",
          selected: false
        });
      }
    }
  }

  handleSearchClick(event){
    this.handleSelection(event, this.state.query)
  }

  render() {
    const { label, name, placeholder } = this.props;
    const { activeIndex, matches, query } = this.state;

    return (
      <div className="field">
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
      </div>
    );
  }
}

export default Autocomplete;
