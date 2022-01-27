import { useEffect, useState } from 'react';
import { Student } from '../scripts/Student';

export default function StudentComponent() {
  const [state, setState] = useState<Student>();

  useEffect(() => {
    const s = new Student();
    setState(s);
  }, []);
  return (
    <div>
      <p>intelligence: {state?.intelligence}</p>
      <p>personality: {state?.personality}</p>
      <p>charm: {state?.charm}</p>
      <p>willingness: {state?.willingness}</p>
      <p>luck: {state?.luck}</p>
      <p>sex: {state?.sex}</p>
      <p>knowledge: {state?.charm}</p>
      <p>happiness: {state?.charm}</p>
      <p>credit: {state?.charm}</p>
    </div>
  );
}
