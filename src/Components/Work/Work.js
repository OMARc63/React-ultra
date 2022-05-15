import React, { Component } from "react";
import { Icon, Line, Part, PartDesc, PartTitle, WorkSection, WorkTitle } from './style';
import axios from "axios";

class Work extends Component {

    state = {
        works: [],
    }

    componentDidMount() {
        axios.get("js/data.json")
            .then( res => {this.setState({works : res.data.works})})
    }

    render () {

        const {works} = this.state;

        const workList = works.map( workItem => {
            return (
                <Part first={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line />
                    <PartDesc>
                        {workItem.body}
                    </PartDesc>
                </Part>
            )
        } )

        return (
            <WorkSection>
                <div className="container">
    
                    <WorkTitle><span>My</span> Work</WorkTitle>
    
                    {workList}
                    
                </div>
            </WorkSection>
        )
    }
}

export default Work;