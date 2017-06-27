/**
 * Form Input React Component
 * React Component Docs - https://facebook.github.io/react/docs/react-component.html
 */

import '../../styles/components/Camera.scss';
import React from 'react';
import PropTypes from 'prop-types';

class Camera extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('IMAGE', this.props.image);
    return (
      <div className='camera'>
        <div className='camera__image owl-lazy' data-src={this.props.image}></div>
        {name &&
          <h3 className='camera__title'>
            <span>{this.props.name}</span>
          </h3>
        }
      </div>
    );
  }
}

export default Camera;
