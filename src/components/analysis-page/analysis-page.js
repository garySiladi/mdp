// @flow
import React from 'react';
import AnalysisHeader from './analysis-header';
import { SectionHeader, PatientInfo, SectionTitle, StudyInfo } from '../section-header';
import { TitledSection } from '../titled-section';
import { Graph } from '../chart';

const Analysis = () => (
  <div className="analysis">
    <SectionHeader>
      <PatientInfo />
      <SectionTitle title="Analysis" />
      <StudyInfo name="Testing" sliceCount="20" date="2017-08-23T10:19:28.893Z" />
    </SectionHeader>
    <div className="section-body">
      <AnalysisHeader />
      <div className="analysis-body">
        <div>
          <TitledSection title="Accuracy">
            <div>
              <Graph />
            </div>
          </TitledSection>
          <TitledSection title="3D preview">
            <img className="image" src="http://via.placeholder.com/600x400" alt="..." />
          </TitledSection>
        </div>
        <div>
          {['Horizontal Axis', 'Vertical Axis', 'Continuous Objective', 'Final Goal'].map(title => (
            <TitledSection title={title} key={title}>
              <div>
                Sed posuere consectetur est at lobortis.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Etiam porta sem malesuada magna mollis euismod.
              </div>
            </TitledSection>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Analysis;
