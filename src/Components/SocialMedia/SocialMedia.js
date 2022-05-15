import axios from "axios";
import React, { useEffect, useState } from "react";
import { Icon, Social, SocialDesc, Span, SocialMediaSection } from './style';

const SocialMedia = () => {

    const [ sms, setSms ] = useState([]);

    useEffect ( () => {
        axios.get('js/data.json')
            .then( res => {setSms(res.data.social)})
    } , [] ) 

    const smList = sms.map( (sm) => {
        return (
            <Social key={sm.id} item= {sm.id}>
                <Icon className={sm.icon}></Icon>
                <SocialDesc>
                    <Span info1>{sm.title}</Span>
                    <Span info2>{sm.body}</Span>
                </SocialDesc>
            </Social>
        )
    } )

    return (
        <SocialMediaSection>
            
            {smList}
            
        </SocialMediaSection>
    )
}

export default SocialMedia;