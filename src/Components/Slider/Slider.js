/* بسم الله الرحمن الرحيم */
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import young from './2.jpg';

export default function Slider() {
    return (
        <div id='Slider' className='slider'>
            <h2 style={{ fontSize: '55px', lineHeight: ' 69px', color: '#fff', padding: '71px 0' }}>Testimonials</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <Carousel>
                            <Carousel.Item>
                                <img src={young} alt="First slide" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={young} alt="Second slide" />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={young} alt="Third slide" />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

        </div>
    )
}