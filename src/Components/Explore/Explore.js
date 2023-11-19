/* بسم الله الرحمن الرحيم */

import img1 from './01.jpg';
import img2 from './02.jpg';
import img3 from './03.jpg';


import './Explore.css';
import './../../index.css';

export default function Explore() {
    return (
        <div className='explore' id='Explore'>
            <div className='container'>
                <div className='row'>
                    <h2 className='h2 head'>Explore Our Foods</h2>
                    <p className='p' style={{ margin: '0 0 55px 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus  bibendum in sit amet leo.<br /> Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries <br />Vokalia and Consonantia, there live the blind texts.<br /> Separated they live in Bookmarksgrove.</p>
                    {data.map(d => (
                        <div className='col-md-4'>
                            <div className='cart' key={d.head}>
                                <img src={d.img} alt={d.head} title={d.head} />
                                <h2 style={{ fontSize: '25px', color: '#a82c48' }}>{d.head}</h2>
                                <p>{d.time}</p>
                                <h3>${d.price} <del>${d.oldPrice}</del></h3>
                                <hr />
                                <button className='red-btn'>order now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}


const data = [
    {
        img: img1,
        head: 'Rainbow Vegetable Sandwich',
        time: 'Time: 10 - 15 Minutes | Serves: 1',
        price: 10.50,
        oldPrice: 11.70,
    },
    {
        img: img2,
        head: 'Vegetarian Burger',
        time: 'Time: 15 - 20 Minutes | Serves: 1',
        price: 9.20,
        oldPrice: 10.50,
    },
    {
        img: img3,
        head: 'Raspberry Stuffed French Toast',
        time: 'Time: 30 - 45 Minutes | Serves: 1',
        price: 12.50,
        oldPrice: 13.20,
    },
]