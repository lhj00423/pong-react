import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/aplurl';
import './SpecialOffer.css';

function SpecialList({list}){
    return (
        <li>
            <div className='imgdiv'>
                <img src={`${API_URL}/upload/event/${list.e_img1}`} alt=""/>
            </div>
            <div className='textdiv'>
                <h3>{list.e_title}</h3>
                <p>
                    {list.e_titledesc}
                </p>
                <div>
                    <Link to={`/special/${list.e_no}`}>
                    +<br/>
                    READ
                    </Link>
                </div>
            </div>
        </li>
    )
}
const SpecialOffer = ({ data }) => {
    return (
        <div className='special'>
            <div className='inner'>
                <h2><span id="best">Best</span> <span id="item">금주의 베스트 아이템</span></h2>
                <ul>
                    {data.map(d=><SpecialList list={d} key={d.e_no}/>)}
                </ul>
            </div>
        </div>
    );
};

export default SpecialOffer;