import { Component } from 'react';
import Title from './Title.jsx';
import Description from './Description.jsx';
import Image from './Image.jsx';

class SimpleCard extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="simple-card">
        <div className="card-image-wrapper">
          <Image url={item.imageUrl} />
        </div>
        <div className="card-content-wrapper">
          <Title text={item.title} />
          <Description text={item.description} />
        </div>
      </div>
    );
  }
}

export default SimpleCard;
