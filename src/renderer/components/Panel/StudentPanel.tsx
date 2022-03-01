import './StudentPanel.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { IReducer } from 'renderer/redux';
import StudentDisplay from '../objectDisplay/StudentDisplay';

interface Props {
  [key: string]: never;
}

const StudentPanel: React.FC<Props> = () => {
  const student = useSelector((state: IReducer) => state.student);

  return (
    <div className="student-panel">
      {student.studentList.map((s) => (
        <StudentDisplay key={s.id} studentData={s} />
      ))}
    </div>
  );
};

export default StudentPanel;
