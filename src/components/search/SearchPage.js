import PreviewPage from './../preview/PreviewPage';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as inputActions from '../../actions/inputActions';
import * as locationActions from '../../actions/locationActions';
/* eslint-disable no-console */

class SearchPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onInputChange = this.onInputChange.bind(this);
    this.onWebScraper = this.onWebScraper.bind(this);
  }

  //Showing weather data for two cities.
  componentDidMount(){
    //making sure not to add the two cities more than once.
    if(this.props.locations.length === 0 ){
      this.props.locationActions.webScraper('Tel-Aviv Israel');
      this.props.locationActions.webScraper('Marbella Spain');
    }
  }

  // componentWillUnmount(){
  //   this.props.locationActions.clearAll();
  // }

  onInputChange(event) {
    this.props.inputActions.updateInput(event.target.value);
  }
  //Adding another location to gather info using a web spider.
  onWebScraper() {
    //making sure that scraping happnes only when an input is provided.
    if(this.props.userInput.length > 0){
      this.props.locationActions.webScraper(this.props.userInput);
    }
    else{
      console.error('ERROR: No Input');
    }
  }

  render() {
     return (
      <div className="searchInputContainer">
        <div>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                onChange={this.onInputChange}
                placeholder="e.g. 'Paris France'"/>
            </div>
            <div className="control">
                <input
                  type="submit"
                  className="button is-success is-outlined is-fullwidth"
                  value="Search Weather"
                  onClick={this.onWebScraper}
                   />
            </div>
          </div>
        </div><br/>
        <PreviewPage data={this.props.locations}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {userInput: state.userInput, locations: state.locations};
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    inputActions: bindActionCreators(inputActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
