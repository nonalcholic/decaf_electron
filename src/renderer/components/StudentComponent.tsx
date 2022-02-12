// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IReducer } from '../redux';
import { randomStudent } from '../redux/students';

export default function StudentComponent() {
  const progress = useSelector((state: IReducer) => state.students);
  const dispatch = useDispatch();

  const onRandomStudentClick = () => {
    randomStudent()(dispatch);
  };

  return (
    <div>
      <p>intelligence: {progress?.intelligence}</p>
      <p>personality: {progress?.personality}</p>
      <p>charm: {progress?.charm}</p>
      <p>willingness: {progress?.willingness}</p>
      <p>luck: {progress?.luck}</p>
      <p>sex: {progress?.sex}</p>
      <p>knowledge: {progress?.charm}</p>
      <p>happiness: {progress?.charm}</p>
      <p>credit: {progress?.charm}</p>
      <button type="button" onClick={onRandomStudentClick}>
        Random
      </button>
    </div>
  );
}
