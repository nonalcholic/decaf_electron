import './MainScreen.scss';
import React, { useEffect, useState } from 'react';
import StudentPanel from 'renderer/components/Panel/StudentPanel';
import UniversityPanel from 'renderer/components/Panel/UniversityDisplay';

interface Props {}
const MainScreen: React.FC<Props> = (props) => {
  return (
    <div className="main-screen">
      <UniversityPanel />
      <StudentPanel />
    </div>
  );
};

export default MainScreen;
