import React from 'react'
import { Dialog } from '@headlessui/react'
import Button from '../UI/Button'

interface ModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  description: string
  buttonLabel: string
}

const Modal: React.FC<ModalProps> = ({
  open,
  setOpen,
  title,
  description,
  buttonLabel,
}) => {
  return (
    <Dialog
      open={open}
      onClose={(): void => setOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-4">
          <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-500">
            {description}
          </Dialog.Description>
          <div className="mt-4 flex gap-4 w-full justify-center">
            <Button
              type="primary"
              size="sm"
              action={(): void => setOpen(false)}
            >
              {buttonLabel}
            </Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default Modal
