/* بسم الله الرحمن الرحيم */
/* والصلاة والسلام علي اشرف خلق الله وسيد المرسلين سيدنا محمد صلي الله عليه وسلم❤️ */

import './Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='absolute'>
                {data.map(d => (
                    <a href='#'>{d.name}</a>
                ))}

                <div className='icons'>
                    {data.map(d => (
                        <a href='#'><i class={d.icon}></i></a>
                    ))}
                </div>
                <p style={{ color: '#fff' }}>© 2023. Foodera. All rights reserved.</p>
            </div>
        </div>
    )
}

const data = [
    {
        name: 'Register',
        icon: 'fa-brands fa-square-facebook'
    },
    {
        name: 'Forum',
        icon: 'fa-brands fa-twitter'
    },
    {
        name: 'Affiliate',
        icon: 'fa-brands fa-youtube'
    },
    {
        name: 'FAQ',
        icon: 'fa-brands fa-linkedin'
    },
    {
        name: '',
        icon: 'fa-brands fa-instagram'
    },
]

