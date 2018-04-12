import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fakeAction, addHouses } from '../../actions';
import { fetchApi } from '../../helper/helper';
import wolf from '../../wolf.gif';
import CardContainer from '../CardContainer/CardContainer'
class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }

  componentDidMount = async () => {
    const houses = await fetchApi();
    this.props.addHouses(houses)
    this.setState({loading: false})
  }

  toDisplay = () => {
    if (this.state.loading) {
        return <img src ={wolf} />
    } else {
      return <CardContainer />
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          {this.toDisplay()}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => ({ 
  fakeAction: () => dispatch(fakeAction()),
  addHouses: (houses) => dispatch(addHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
