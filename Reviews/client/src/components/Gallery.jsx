import React from 'react';
import Pic from './Pic.jsx';
import { connect } from 'react-redux'
import leftChevBlue from '../../../public/images/left-chevron-blue.png'
import leftChevGrey from '../../../public/images/left-chevron-grey.png'


const mapStateToProps = state => {
  return { ...state }
}

class Gallery extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            margin: 0
        }
        this.scrollRight = this.scrollRight.bind(this)
        this.scrollLeft = this.scrollLeft.bind(this)
    }

    scrollRight() {
        this.setState({
            margin: this.state.margin - 648
        })
    }
    scrollLeft() {
        this.setState({
            margin: this.state.margin + 648
        })
    }
    render() {
        return (
            <div className="gallery-wrapper  bottom-border-line">
                <h3 className="gallery-title">Customer images</h3>
                <div className="image-carousel">
                    <div className="carousel-wrapper">
                        {
                            this.state.margin
                                ?
                                <img className="left-caret" src={leftChevBlue} onClick={this.scrollLeft} />
                                :
                                <img className="left-caret-grey" src={leftChevGrey} />
                        }
                        <ul className="image-list">
                            <li className="img-list-item" style={{ marginLeft: `${this.state.margin}px` }}></li>
                            {this.props.reviews.map((review, index) => {
                                if (review.pics.length > 0) {
                                    return review.pics.map((pic) => (
                                        <Pic key={pic._id} id={review._id} url={pic.url} />
                                    ))
                                }
                            })}
                        </ul>
                        {
                            this.state.margin <= -648
                                ?
                                <img className="right-caret-grey" src="https://bby-reviews-images.s3-us-west-1.amazonaws.com/right-chevron-grey.png" />
                                :
                                <img className="right-caret" src="https://bby-reviews-images.s3-us-west-1.amazonaws.com/right-chevron-blue.png" onClick={this.scrollRight} />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
  mapStateToProps
)(Gallery)