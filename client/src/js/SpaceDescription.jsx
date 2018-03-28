import React from 'react';
import Summary from './Summary.jsx';


const HiddenSpace = props => (
  <div>
    <Summary summary={props.desc && props.desc.summary}></Summary>
    <div className="div-description-open-fold div-description-separator-margin">
      <a className="a-description-fold" onClick={props.onClick}>Read more about the space </a>
    </div>
  </div>
);


const Space = props => (
  <div>
    <div>
      <Summary summary={props.desc && props.desc.summary}></Summary>
      <div className="div-description-space-header">
        The space
      </div>
      <div>
        {props.desc.space}
      </div>
      <div className="div-description-space-header">
        Guest access
      </div>
      <div>
        {props.desc.access}
      </div>
      <div className="div-description-space-header">
        Interaction with guests
      </div>
      <div>
        {props.desc.interaction}
      </div>
      <div className="div-description-space-header">
        Other things to note
      </div>
      <div>
        {props.desc.notes}
      </div>
      <div className="div-description-space-header">
        License or registration number
      </div>
      <div>
        <div>
          {props.desc.license}
        </div>
        <a className="a-description-fold" href="https://www.airbnb.com/help/article/1634/what-is-the-license-or-registration-number-field">Learn about this number</a>
      </div>
    </div>
    <div className="div-description-hide-fold">
      <p className="div-description-separator-margin">
        <a className="a-description-fold" onClick={props.onClick}>Hide </a>
      </p>
    </div>
  </div>
);

class SpaceDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpace: false
    };
    this.showSpaceClick = this.showSpaceClick.bind(this);
    this.hideSpaceClick = this.hideSpaceClick.bind(this);
  }

  showSpaceClick() {
    this.setState({
      showSpace: true
    });
  }

  hideSpaceClick() {
    this.setState({
      showSpace: false
    });
  }

  render() {
    let space;
    if (this.state.showSpace) {
      space = <Space desc={this.props.desc} onClick={this.hideSpaceClick}></Space>;
    } else {
      space = <HiddenSpace desc={this.props.desc} onClick={this.showSpaceClick}></HiddenSpace>;
    }
    return (
      <div className="div-description-space-description">
        {space}
      </div>
    );
  }
}

export default SpaceDescription;
