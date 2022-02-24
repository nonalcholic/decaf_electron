import { useState } from 'react';
import Modal from 'renderer/components/modal/Modal';

const useModal = (modal: JSX.Element) => {
  const [opened, setOpened] = useState<boolean>(false);

  return [
    opened ? (
      <Modal
        className="action-modal"
        visible={opened}
        closable
        maskClosable
        onClose={() => setOpened(false)}
      >
        {modal}
      </Modal>
    ) : null,
    () => setOpened(true),
    () => setOpened(false),
  ] as const;
};

export default useModal;
