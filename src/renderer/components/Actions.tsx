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
  const dispatch = useDispatch();

  return (
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
      Restraunt
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
      Dormitory
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
      Cafe
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
      Library
    </div>
  );
}
