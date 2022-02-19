import { useSelector } from 'react-redux';
import { IReducer } from '../redux';
import Student from './Student';
import Actions from './Actions';

import Modal from './Modal';

interface IUniversity {
  modalVisible: boolean;
  closeModal: React.MouseEventHandler<HTMLDivElement>;
}

export default function University({ modalVisible, closeModal }: IUniversity) {
  const university = useSelector((state: IReducer) => state.university);
  const student = useSelector((state: IReducer) => state.students);

  return (
    <div>
      <p>weeks: {university?.weeks}</p>
      <Student student={student} />
      {modalVisible && (
        <Modal
          className="action-modal"
          visible={modalVisible}
          closable
          maskClosable
          onClose={closeModal}
        >
          <Actions />
        </Modal>
      )}
    </div>
  );
}
