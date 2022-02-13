import { useSelector } from 'react-redux';
import { IReducer } from '../redux';
import Student from './Student';
import Actions from './Actions';

export default function University() {
  const university = useSelector((state: IReducer) => state.university);
  const student = useSelector((state: IReducer) => state.students);

  return (
    <div>
      <p>weeks: {university?.weeks}</p>
      <Student student={student} />
      <Actions />
    </div>
  );
}
