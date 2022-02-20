import './StudentDisplay.scss';
import React, { useEffect, useState } from 'react';
import { Student } from 'renderer/objects/Student';

interface Props {
  studentData: Student;
}
const StudentDisplay: React.FC<Props> = (props) => {
  const { studentData } = props;

  if (!studentData) return null;
  return (
    <div>
      <p>age: {studentData.age}</p>
      <p>charm: {studentData.charm}</p>
      <p>intel: {studentData.intelligence}</p>
      <p>personality: {studentData.personality}</p>
      <p>sex: {studentData.sex}</p>
      <p>willingness: {studentData.willingness}</p>
    </div>
  );
};

export default StudentDisplay;
