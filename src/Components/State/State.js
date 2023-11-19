/* بسم الله الرحمن الرحيم */

import './State.css';
const data = [
    {
        number: 1287,
        description: 'SAVINGS',
    },
    {
        number: 5786,
        description: 'PHOTOS',
    },
    {
        number: 1440,
        description: 'ROCKETS',
    },
    {
        number: 7110,
        description: 'GLOBES',
    },
]
export default function State() {
    return (
        <div className='state' >
            <div className="container">
                <div className="row">
                    {data.map(d => (
                        <div className="col-md-3">
                            <h2>{d.number}+</h2>
                            <p>{d.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}