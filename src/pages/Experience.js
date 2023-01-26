import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules';
import 'react-vertical-timeline-component/style.min.css';
import { School } from '@material-ui/icons';
import { Work } from '@material-ui/icons';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2017 - 2022'
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<School />}>
          <h3 className='vertical-timeline-element-title'>National University of Colombia</h3>
          <p>
            Systems Engineering Diploma
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work'
          date='12/2021 - 02/2022'
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<Work />}>
          <h3 className='vertical-timeline-element-title'>National University of Colombia</h3>
          <p>
            I worked in the creation of the non relational data model of the Horus system made by the National University of Colombia to manage projects.
            I participated in the design of the views (mockups) for the development of the Horus system extension module.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work'
          date='03/2022 - 09/2022'
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<Work />}>
          <h3 className='vertical-timeline-element-title'>Webs314</h3>
          <p>
            I participated in several projects of this company such as flunt (project with the aim 
            of allowing companies to automate their processes efficient) and mintarts (project 
            with the objective to create a marketplace that allows artists to offer NFTs, and 
            thus minimize the presence of plagiarism), working on the frontend development 
            with React, with the development strategy of monorepo (having one package for 
            the components and one for the application). This strategy was applied with tools 
            such as lerna, rollup and webpack Finally, the development of unit tests was done 
            with the jest library
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;