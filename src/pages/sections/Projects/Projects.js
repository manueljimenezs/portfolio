import React from 'react';
import styled from 'styled-components';

import Card from '../../../components/UI/Card/Card';
import projects from './ProjectData';


export const ProjectsStyle = styled.section`
    padding: 0 2em;
    max-width: 1000px;
    margin: 0 auto;
    font-family: 'Inter';

    .cardtainer {
        /*border: 1px solid red;*/
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media (min-width: 792px) {
        .cardtainer { 
            flex-wrap: wrap;
            flex-direction: row;
        }
    }
`

const Projects = () => {
    return (     
    <ProjectsStyle id="projects">
        <h1>Projects</h1>
        <div className="cardtainer">
            {projects.data.map((data) => (
            <Card key={data.title} title={data.title} href={data.url}>
                {data.description}
            </Card>))}
        </div>
    </ProjectsStyle>
    );
};

export default Projects;