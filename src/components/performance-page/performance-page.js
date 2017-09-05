// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TitledSection } from '../titled-section';
import { Graph } from '../chart';
import { SectionHeader, SectionTitle } from '../section-header';
import { fetchPerformanceData, receivedPerformanceData } from '../../api';
import { PerformanceDataType } from '../../store';

const legend = ['Horizontal Axis', 'Vertical Axis', 'Continuous Objective', 'Final Goal'];

type Props = {
  +actions: {
    +dispatchReceivedPerformanceData: Function,
  },
  +performance: Array<PerformanceDataType>,
}

class PerformancePage extends React.Component<{}> {
  componentWillMount() {
    fetchPerformanceData(this.props.actions.dispatchReceivedPerformanceData);
  }
  props: Props;
  render() {
    return (
      <div className="performance">
        <SectionHeader>
          <Link to="/">
            <SectionTitle title="Patients" />
          </Link>
          <SectionTitle title="Analysis Performance / Details" />
        </SectionHeader>
        <div className="graph-section">
          {this.props.performance.map(entry => (
            <div key={entry.title}>
              <TitledSection title={entry.title}>
                <Graph values={entry.values} medianValues={entry.medianValues} />
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
    );
  }
}

PerformancePage.defaultProps = {
  performance: [],
};

const mapStateToProps = ({ performance }) => ({
  performance,
});

const mapDispatchToProps = dispatch => ({
  actions:
    bindActionCreators({
      dispatchReceivedPerformanceData: receivedPerformanceData,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PerformancePage);
