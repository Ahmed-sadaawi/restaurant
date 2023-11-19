/* بسم الله الرحمن الرحيم */

import img1 from './1.png';
import img2 from './2.png';
import './Pride.css';
import './../../index.css';
export default function Pride() {
    return (
        <>
            <div id='Pride' className='pride'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img1} title="Pride-img" alt="img" />
                        </div>
                        <div className="col-md-6">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button className='red-btn'>learn more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pride2'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            {data.map(d => (
                                <p className="p">{d.icon} <span>{d.description}</span> </p>
                            ))}
                            <button className='red-btn'>learn more</button>
                        </div>
                        <div className="col-md-6">
                            <img src={img2} title="Pride-img" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const data = [
    {
        icon: '✅',
        description: 'Etiam sed dolor ac diam volutpat.'
    },
    {
        icon: '✅',
        description: 'Erat volutpat aliquet imperdiet.'
    },
    {
        icon: '✅',
        description: 'purus a odio finibus bibendum.'
    },
]