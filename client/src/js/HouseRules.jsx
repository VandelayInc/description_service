import React from 'react';
import reactBootstrap from 'react-bootstrap'


function Rules(props) {
  return (
    <div>
      <div className="div-description-separator-margin">
        <div className="div-description-separator-short-separator">
        </div>
      </div>
      <div className="div-description-additional-house-rules">
        {props.desc && props.desc.additional_house_rules}
      </div>
      <div className="div-description-house-rules-acknowledge">
        You must also acknowledge
      </div>
      <div className="div-description-deposit">
        <p>
          {props.desc && props.desc.amenities.includes('Pets live on this property') ? 'Some pet(s) live in the house' : ''}
        </p>
        <p>
          {props.desc && (props.desc.listing_security_deposit_native > 0 ?
            'Security Deposit - if you damage the home, you may be charged up to ' + props.desc.security_deposit_formatted :
            '')
          }
        </p>
      </div>
      <div className="div-description-hide-rules-fold">
        <p className="div-description-separator-margin">
          <a className="a-description-fold" onClick={props.onClick}>Hide rules </a>
        </p>
      </div>
    </div>
  );
}

function RulesHidden(props) {
  return (
    <div className="div-description-read-rules-fold">
      <p className="div-description-separator-margin">
        <a className="a-description-fold" onClick={props.onClick}>Read all rules </a>
      </p>
    </div>
  );
}

class HouseRules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRules: false
    };
    this.hideRulesClick = this.hideRulesClick.bind(this);
    this.showRulesClick = this.showRulesClick.bind(this);
  }

  showRulesClick() {
    this.setState({
      showRules: true
    });
  }

  hideRulesClick() {
    this.setState({
      showRules: false
    });
  }

  render() {
    let rules;
    if (this.state.showRules) {
      rules = <Rules desc={this.props.desc} onClick={this.hideRulesClick}></Rules>;
    } else {
      rules = <RulesHidden onClick={this.showRulesClick}></RulesHidden>
    }

    return (
      <div className="div-description-house-rules">
        <div className="div-description-section-header">
          House Rules
        </div>
        <div className="div-description-house-rules-details">
          <div className="div-description-checkin-time">
            <p>
              Check-in is {this.props.desc && this.props.desc.localized_check_in_time_window}
            </p>
          </div>
          <div className="div-description-checkout-time">
            <p>
              Check out by {this.props.desc && this.props.desc.localized_check_out_time}
            </p>
          </div>
          {rules}
        </div>
      </div>
    );
  }

}

export default HouseRules;
