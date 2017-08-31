// @flow
import React from 'react';
import { TitledSection } from '../titled-section';
import { Graph } from '../chart';

const graphs = ['Accuracy', 'Loss', 'Test Accuracy'];
const legend = ['Horizontal Axis', 'Vertical Axis', 'Continuous Objective', 'Final Goal'];

const PerformancePage = () => (
  <div className="performance">
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
);

export default PerformancePage;
