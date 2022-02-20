import './StudentPanel.scss';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IReducer } from 'renderer/redux';
import StudentDisplay from '../ObjectDisplay/StudentDisplay';

interface Props {}
const StudentPanel: React.FC<Props> = (props) => {
  const student = useSelector((state: IReducer) => state.student);

  console.log(student);
  return (
    <div className="student-panel">
      {student.studentList.map((student) => (
        <StudentDisplay studentData={student} />
      ))}
    </div>
  );
};

export default StudentPanel;
