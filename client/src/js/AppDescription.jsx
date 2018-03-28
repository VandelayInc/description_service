import React from 'react';
import axios from 'axios';
import Description from './Description.jsx';
import descriptionSample from '../../../db/data/description_sample.js';
// import '../../css/style.scss';

class AppDescription extends React.Component {
  constructor(props) {
    super(props);
    this.desc = {description: props.description};
    this.state = {
      description: {}
    };
  }

  componentDidMount() {
    // console.log(window.location.href.split('/')[4])
    // this.setState({
    //   roomId: window.location.href.split('/')[4] || '1111'
    // })
    // if (this.state.roomId) {
    //   this.getDescriptionForRoom(this.state.roomId);
    // }

    this.getDescriptionForRoom(window.location.href.split('/')[4])
  }

  getDescriptionForRoom(roomId) {
    axios.get(`/api/rooms/${roomId}/description`, { crossdomain: true })
      .then((desc) => {
        this.desc = {description: desc.data};
        this.setState({
          description: desc.data
        });
      })
      .catch(err => {
        let debug = err;
        console.log('Error retrieving room ', roomId);
      });
  }

  render() {
    return (
      <div className="div-description-app">
        <Description desc={this.desc}></Description>
      </div>
    );
  }
}

// window.AppDescription = AppDescription;
export default AppDescription;
