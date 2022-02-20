// import './StudentPanel.scss';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IReducer } from 'renderer/redux';

interface Props {}
const StudentPanel: React.FC<Props> = (props) => {
  const student = useSelector((state: IReducer) => state.student);

  return <>{`total students number: ${student.studentList.length}`}</>;
};

export default StudentPanel;
