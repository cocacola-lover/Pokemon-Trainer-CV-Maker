import './Badges.css';
import React from "react";

import img1 from './../images/badges/1.png';
import img2 from './../images/badges/2.png';
import img3 from './../images/badges/3.png';
import img4 from './../images/badges/4.png';
import img5 from './../images/badges/5.png';
import img6 from './../images/badges/6.png';
import img7 from './../images/badges/7.png';
import img8 from './../images/badges/8.png';

const active = 'activatedBadge';
const deactive = 'deactivatedBadge';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default class Badges extends React.Component {

    render() {
        return this.props.edit ? <div>
            {images.map((image, ind) => {
                return <img 
                src={image} 
                alt='' 
                key={ind}
                width='60px'
                height='60px'
                className={this.props.whichActive[ind] ? active : deactive}
                onClick={() => this.props.toggleBadge(ind)}>
                </img>
            })}
        </div> : <div>
            {images.filter((val, ind) => this.props.whichActive[ind]).map((image, ind) => {
                return <img 
                src={image} 
                alt='' 
                key={ind}
                width='60px'
                height='60px'>
                </img>
            })}
        </div>
    }
}