import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
  
export default class Content extends Component {
    render() {
        return (
          <>
          <Carousel showThumbs={false}>
      {Object.values(this.props.gallery).map(({ id, p }) => ( 
          <div key={id}>
           <Image src={p[p.length - 1].u.replace(/&amp;/g, '&')} loading="lazy" className={`${this.props.filltype} object-center w-full h-56"`} alt="Post-Image" width={this.props.width} height={this.props.height} layout="responsive" />
          </div>
          ))}
    </Carousel>
    </>
        );
    }
};