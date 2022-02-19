import { useMemo } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  children: JSX.Element | JSX.Element[];
  elementId: string;
}

function Portal({ children, elementId }: IPortal) {
  const rootElement = useMemo(
    () => document.getElementById(elementId),
    [elementId]
  ) as HTMLElement;

  return createPortal(children, rootElement);
}

export default Portal;
