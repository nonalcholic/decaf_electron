// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Portal from './Portal';

interface IModal {
  visible: boolean;
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props: IModal) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props: IModal) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
  color: black;
`;

const ModalClose = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 0;
  right: 0;
  padding-right: 8px;
  padding-top: 4px;
  color: black;
  cursor: pointer;
`;

interface Props {
  className: string;
  onClose: React.MouseEventHandler<HTMLDivElement>;
  maskClosable: boolean;
  closable: boolean;
  visible: boolean;
  children: JSX.Element;
}
const Modal: React.FC<Props> = (props: Props) => {
  const { className, onClose, maskClosable, closable, visible, children } =
    props;
  const onMaskClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (onClose) {
      onClose(e);
    }
  };
  return (
    <>
      <Portal elementId="modal-root">
        <ModalOverlay visible={visible} />
        <ModalWrapper
          className={className}
          onClick={maskClosable ? onMaskClick : () => {}}
          tabIndex={-1}
          visible={visible}
        >
          <ModalInner tabIndex={0} className="modal-inner">
            {closable && (
              <ModalClose
                className="modal-close"
                onClick={close}
                style={{
                  position: 'absolute',
                  right: '0',
                  top: '0',
                }}
              >
                x
              </ModalClose>
            )}
            {children}
          </ModalInner>
        </ModalWrapper>
      </Portal>
    </>
  );
};

export default Modal;
