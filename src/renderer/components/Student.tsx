import { IStudent } from '../redux/interfaces/studentInterface';

interface StudentProps {
  student: IStudent;
}

export default function Student({ student }: StudentProps) {
  const {
    intelligence,
    personality,
    charm,
    willingness,
    luck,
    sex,
    knowledge,
    happiness,
    credit,
  } = student;

  return (
    <div>
      <p>intelligence: {intelligence}</p>
      <p>personality: {personality}</p>
      <p>charm: {charm}</p>
      <p>willingness: {willingness}</p>
      <p>luck: {luck}</p>
      <p>sex: {sex}</p>
      <p>knowledge: {knowledge}</p>
      <p>happiness: {happiness}</p>
      <p>credit: {credit}</p>
    </div>
  );
}
