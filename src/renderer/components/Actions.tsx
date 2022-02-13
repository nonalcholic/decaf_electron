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
        checked={actions?.buildings.restaurant as boolean}
        onChange={(e) => buildRestraunt(e.target.checked)(dispatch)}
      />{' '}
      Restraunt
      <input
        type="checkbox"
        name="building"
        value="dormitory"
        checked={actions?.buildings.dormintory as boolean}
        onChange={(e) => buildDormitory(e.target.checked)(dispatch)}
      />{' '}
      Dormitory
      <input
        type="checkbox"
        name="building"
        value="cafe"
        checked={actions?.buildings.cafe as boolean}
        onChange={(e) => buildCafe(e.target.checked)(dispatch)}
      />{' '}
      Cafe
      <input
        type="checkbox"
        name="building"
        value="library"
        checked={actions?.buildings.library as boolean}
        onChange={(e) => buildLibrary(e.target.checked)(dispatch)}
      />{' '}
      Library
    </div>
  );
}
