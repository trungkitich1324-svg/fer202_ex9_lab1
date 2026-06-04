import { Component } from 'react';

class Image extends Component {
  render() {
    const { url } = this.props;
    return <img src={url} alt="Card Preview" className="card-img" />;
  }
}

export default Image;