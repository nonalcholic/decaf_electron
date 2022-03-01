import './StudentDisplay.scss';
import React from 'react';
import { IStudent } from 'renderer/objects/Student';

interface Props {
  studentData: IStudent;
}
const StudentDisplay: React.FC<Props> = (props) => {
  const { studentData } = props;

  if (!studentData) return null;
  return (
    <div className="student-display">
      <div>id: {studentData.id}</div>
      <div>department: {studentData.departmentId}</div>
      <div>sex: {studentData.sex}</div>
      <div>charm: {Math.round(studentData.charm)}</div>
      <div>intel: {Math.round(studentData.intelligence)}</div>
      <div>personality: {Math.round(studentData.personality)}</div>
      <div>willingness: {Math.round(studentData.willingness)}</div>
    </div>
  );
};

export default StudentDisplay;
