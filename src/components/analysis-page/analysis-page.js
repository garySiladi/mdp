// @flow
import React from 'react';
import AnalysisHeader from './analysis-header';
import { SectionHeader, PatientInfo, SectionTitle, StudyInfo } from '../section-header';
import { TitledSection } from '../titled-section';
import { Graph } from '../chart';

const graphs = ['Accuracy', 'Loss', 'Test Accuracy'];
const legend = ['Horizontal Axis', 'Vertical Axis', 'Continuous Objective', 'Final Goal'];

const Analysis = () => (
  <div className="analysis">
    <SectionHeader>
      <PatientInfo />
      <SectionTitle title="Analysis" />
      <StudyInfo />
    </SectionHeader>
    <div className="section-body">
      <AnalysisHeader />
      <div className="analysis-body">
        {graphs.map(graphTitle => (
          <div key={graphTitle}>
            <TitledSection title={graphTitle}>
              <Graph />
            </TitledSection>
            {legend.map(title => (
              <TitledSection title={title} key={title}>
                <div>
                  Sed posuere consectetur est at lobortis.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                  Etiam porta sem malesuada magna mollis euismod.
                </div>
              </TitledSection>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Analysis;
