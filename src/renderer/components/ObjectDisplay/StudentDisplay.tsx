import './StudentDisplay.scss';
import React from 'react';
import { IPerson } from 'renderer/objects/Person';

interface Props {
  studentData: IPerson;
}
const StudentDisplay: React.FC<Props> = (props) => {
  const { studentData } = props;

  if (!studentData) return null;
  return (
    <div className="student-display">
      <div>age: {studentData.age}</div>
      <div>sex: {studentData.sex}</div>
      <div>charm: {Math.round(studentData.charm)}</div>
      <div>intel: {Math.round(studentData.intelligence)}</div>
      <div>personality: {Math.round(studentData.personality)}</div>
      <div>willingness: {Math.round(studentData.willingness)}</div>
    </div>
  );
};

export default StudentDisplay;
