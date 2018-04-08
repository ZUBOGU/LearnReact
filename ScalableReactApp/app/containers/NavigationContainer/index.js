/**
 *
 * NavigationContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNavigationContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import Navigation from '../../components/Navigation';

export class NavigationContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    topics: [
      {
        name: 'libraries',
        description: 'links to useful open source libraries',
      },
      {
        name: 'apps',
        description: 'links to new and exciting apps',
      },
      {
        name: 'news',
        description: 'links to programming related news articles',
      },
    ],
  };

  render() {
    return (
      <Navigation topic={this.state.topics} />
    );
  }
}

NavigationContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navigationcontainer: makeSelectNavigationContainer(),
});

const withConnect = connect(mapStateToProps, this.dispatch);

const withReducer = injectReducer({ key: 'navigationContainer', reducer });
const withSaga = injectSaga({ key: 'navigationContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NavigationContainer);
