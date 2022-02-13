import { IStudent } from '../redux/interfaces/studentInterface';

interface StudentProps {
  student: IStudent;
}

export default function Student({ student }: StudentProps) {
  return (
    <div>
      <p>intelligence: {student?.intelligence}</p>
      <p>personality: {student?.personality}</p>
      <p>charm: {student?.charm}</p>
      <p>willingness: {student?.willingness}</p>
      <p>luck: {student?.luck}</p>
      <p>sex: {student?.sex}</p>
      <p>knowledge: {student?.knowledge}</p>
      <p>happiness: {student?.happiness}</p>
      <p>credit: {student?.credit}</p>
    </div>
  );
}
