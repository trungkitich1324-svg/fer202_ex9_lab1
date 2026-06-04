import { Component } from 'react';
import Title from './components/Title.jsx';
import Description from './components/Description.jsx';
import Image from './components/Image.jsx';

class SimpleCard extends Component {
  render() {
    // Nhận object item từ props truyền xuống
    const { item } = this.props;

    return (
      <div className="simple-card">
        {/* Component hiển thị ảnh */}
        <div className="card-image-wrapper">
          <Image url={item.imageUrl} />
        </div>
        
        {/* Khối hiển thị thông tin chữ */}
        <div className="card-content-wrapper">
          <Title text={item.title} />
          <Description text={item.description} />
        </div>
      </div>
    );
  }
}

export default SimpleCard;