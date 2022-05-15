import axios from "axios";
import React, { useEffect, useState } from "react";
import  './style';
import { ProfileSection, ProfileInf, Span, ParentSpan, ProfileTitle, ProfileList, ProfileItem, Skills, SkillsTitle, SkillsDesc, Bar, BarTitle, BarPerc, BarParent, ItemSpan } from "./style";


const Profile = () => {

    const [ infos, setInfos ] = useState([]);
    const [ skills, setSkills ] = useState([]);

    useEffect( () => {
        axios.get('js/data.json').then(res => {setInfos(res.data.Profile.info)})
        axios.get('js/data.json').then(res => {setSkills(res.data.Profile.skills)})
    }, [] )

    const infosList = infos.map( (infoItem) => {
        return (
            <ProfileItem key={infoItem.id}>
                <ItemSpan>{infoItem.title}</ItemSpan>
                {infoItem.desc}
            </ProfileItem>
        )
    } )
    
    const skillsList = skills.map( (skillItem) => {
        return (
            <Bar key={skillItem.id}>
                <BarTitle>{skillItem.skill}</BarTitle>
                <BarPerc>{skillItem.perc}</BarPerc>
                <BarParent>
                    <ParentSpan sp={skillItem.id}></ParentSpan>
                </BarParent>
            </Bar>
        )
    } )

    return (
        <ProfileSection>
            <div className="container">
                <ProfileInf>
                    <ProfileTitle><Span>My </Span>Profile</ProfileTitle>
                    <ProfileList>

                        {infosList}
                        
                    </ProfileList>
                </ProfileInf>
                
                <Skills>
                    <SkillsTitle>Some <Span>skills</Span></SkillsTitle>
                    <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>

                    {skillsList}
                    
                </Skills>
                
            </div>
        </ProfileSection>
    )
}

export default Profile;