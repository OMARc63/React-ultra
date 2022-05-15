import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, ImageWrapper, Overlay, OverlaySpan, PortfolioItem, PortfolioList, PortfolioSection, PortfolioTitle, Span } from './style';

const Portfolio = () => {

    const [ images, setImages ] = useState([]);

    useEffect ( () => {
        axios.get('js/data.json')
            .then( res => {setImages(res.data.portfolio)})
    } , [] ) 

    const imgList = images.map( (img) => {
        return (
            <ImageWrapper key={img.id}>
                <Image src={img.image} alt="image" />
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )
    } )

    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                
                {imgList}
                
            </div>
        </PortfolioSection>
    )
}

export default Portfolio;