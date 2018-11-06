import React, { Component } from 'react';

class Selector extends Component {

  state = {
    open: false,
    elemSelected: false,
  };

  handleOpen = event => {
    event.preventDefault();
    this.setState({ open: true });
  }

  handleClose = event => {
    event.preventDefault();
    this.setState({ open: false });
  }

  handleSelect = (event, selected) => {
    event.preventDefault();
    this.setState({ elemSelected: selected });
  }

  render() {
    const { open, elemSelected } = this.state;
    const { title, elements } = this.props;

    return (
      <div className='Selector' onClick={this.handleOpen} onMouseLeave={this.handleClose}>
        <div className='Selector-selected'>
          <span>{elemSelected ? elemSelected : title }</span>
          {open ? <i className='fas fa-angle-up' /> : <i className='fas fa-angle-down' /> }
        </div>
        {open ?
          (
            <div className='Selector-list'>
              {elements.map((elem, index) => (
                <span
                  className='Selector-list-elem'
                  key={`Selector-${elem}-${index}`}
                  onClick={evt => this.handleSelect(evt, elem)}
                >
                  {elem}
                </span>
              ))}
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default Selector;
