import { Fragment, MutableRefObject } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import CloseIcon from '@/public/close.svg';
import { IconButton } from './IconButton';

export interface DrawerProps {
  open: boolean;
  handleClose: () => void;
  title: string | JSX.Element;
  Footer?: JSX.Element;
  initialFocus?: MutableRefObject<HTMLElement | null> | undefined;
  children: JSX.Element | JSX.Element[];
}

export const Drawer = ({
  open,
  handleClose,
  title,
  Footer,
  initialFocus,
  children,
}: DrawerProps): JSX.Element => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        initialFocus={initialFocus}
        static
        className="fixed inset-0 z-10 overflow-hidden"
        open={open}
        onClose={handleClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 z-20 transition-opacity bg-bgPaperSecondary bg-opacity-95" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 z-30 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300 sm:duration-500"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300 sm:duration-500"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <div className="flex flex-col h-full overflow-y-auto shadow-xl bg-bgDefault">
                  <div className="flex items-center justify-between px-4 py-6 sm:px-6 bg-bgPaper">
                    <Dialog.Title className="text-lg font-medium text-textPrimary ">
                      {title}
                    </Dialog.Title>
                    <IconButton onClick={handleClose} srName="Close panel">
                      <CloseIcon />
                    </IconButton>
                  </div>
                  <div className="relative flex-1 px-4 py-4 overflow-y-auto sm:px-6">
                    {children}
                  </div>
                  {Footer ? Footer : null}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
