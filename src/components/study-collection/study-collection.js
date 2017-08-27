import React from 'react';
import type { Study } from '../../store';
import { StudyCard } from '../study-card';

type Props = {
  +studyList: Array<Study>,
};

const dummyStudies = [ // TODO implement redux
  {
    id: '908209471209421',
    name: 'Heart Test',
    date: '2017-08-23T10:19:28.893Z',
    pictureCount: 40,
    previewImage: 'someLinkOrSomeObject',
  },
  {
    id: '456575676579421',
    name: 'Lung Test',
    date: '2017-07-23T10:19:28.893Z',
    pictureCount: 100,
    previewImage: 'someLinkOrSomeObject',
  },
  {
    id: '124125215125121',
    name: 'Liver Test',
    date: '2017-04-23T10:19:28.893Z',
    pictureCount: 13,
    previewImage: 'someLinkOrSomeObject',
  },
];

class StudyCollection extends React.Component<> {
  constructor(props) {
    super(props);
    this.state = {
      studyList: dummyStudies,
    };
  }
  props:Props
  render() {
    const studies = this.state.studyList.map(study => <StudyCard {...study} key={study.id} />);
    return (
      <div className="study-collection">
        {studies}
      </div>
    );
  }
}

export default StudyCollection;
