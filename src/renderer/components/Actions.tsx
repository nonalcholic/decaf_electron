import { useDispatch, useSelector } from 'react-redux';
import {
  buildRestraunt,
  buildLibrary,
  buildDormitory,
  buildCafe,
} from '../redux/actions';
import { IReducer } from '../redux';

export default function Actions() {
  const actions = useSelector((state: IReducer) => state.actions);
  const universitiy = useSelector((state: IReducer) => state.university);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p>
          Restraunt: {universitiy?.buildings?.restaurant as number}
          {actions?.buildings?.restaurant ? ' (+1) ' : ''}
        </p>
        <p>
          Library: {universitiy?.buildings?.library as number}
          {actions?.buildings?.library ? ' (+1) ' : ''}
        </p>
        <p>
          Dormitory: {universitiy?.buildings?.dormintory as number}
          {actions?.buildings?.dormintory ? ' (+1) ' : ''}
        </p>
        <p>
          Cafe: {universitiy?.buildings?.cafe as number}
          {actions?.buildings?.cafe ? ' (+1) ' : ''}
        </p>
      </div>
      <div>
        <input
          type="checkbox"
          name="building"
          value="restraunt"
          checked={
            actions?.buildings?.restaurant
              ? (actions?.buildings?.restaurant as boolean)
              : false
          }
          onChange={(e) => buildRestraunt(e.target.checked)(dispatch)}
        />{' '}
        Add Restraunt
      </div>
      <div>
        <input
          type="checkbox"
          name="building"
          value="dormitory"
          checked={
            actions?.buildings?.dormintory
              ? (actions?.buildings?.dormintory as boolean)
              : false
          }
          onChange={(e) => buildDormitory(e.target.checked)(dispatch)}
        />{' '}
        Add Dormitory
      </div>
      <div>
        <input
          type="checkbox"
          name="building"
          value="cafe"
          checked={
            actions?.buildings?.cafe
              ? (actions?.buildings?.cafe as boolean)
              : false
          }
          onChange={(e) => buildCafe(e.target.checked)(dispatch)}
        />{' '}
        Add Cafe
      </div>
      <div>
        <input
          type="checkbox"
          name="building"
          value="library"
          checked={
            actions?.buildings?.library
              ? (actions?.buildings?.library as boolean)
              : false
          }
          onChange={(e) => buildLibrary(e.target.checked)(dispatch)}
        />{' '}
        Add Library
      </div>
    </>
  );
}
