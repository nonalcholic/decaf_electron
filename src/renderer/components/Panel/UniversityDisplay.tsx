// import './UniversityDisplay.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { IReducer } from 'renderer/redux';

interface Props {
  [key: string]: never;
}
const UniversityPanel: React.FC<Props> = () => {
  const university = useSelector((state: IReducer) => state.university);

  return (
    <div>
      {`[Weeks: ${university.weeks}]`}
      {`[Reputation: ${university.reputation}]`}
    </div>
  );
};

export default UniversityPanel;
