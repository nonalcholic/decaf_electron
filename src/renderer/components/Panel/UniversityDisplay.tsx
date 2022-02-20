// import './UniversityDisplay.scss';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IReducer } from 'renderer/redux';

interface Props {}
const UniversityPanel: React.FC<Props> = (props) => {
  const university = useSelector((state: IReducer) => state.university);

  return (
    <div>
      {`[Weeks: ${university.weeks}]`}
      {`[Reputation: ${university.reputation}]`}
    </div>
  );
};

export default UniversityPanel;
