/**
*
* Navigation
*
*/

import React from 'react';
// import styled from 'styled-components';

function Navigation({ topic }) {
  return (
    <div>
    This is the navigation component, there are {topic.length} topics
    </div>
  );
}

Navigation.propTypes = {
  topic: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
