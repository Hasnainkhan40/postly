import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button, buttonVariants } from '@/components/ui/button'
import type { VariantProps } from 'class-variance-authority'

interface ModalProps {
  children: React.ReactNode
  title: string
  description?: string
  isOpen: boolean
  onClose: () => void
  onSubmit?: () => void
  submitText?: string
  submitVariant?: VariantProps<typeof buttonVariants>["variant"]
  cancelText?: string
  showFooter?: boolean
  size?: string
  className?: string
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  description,
  isOpen,
  onClose,
  onSubmit,
  submitText = 'Submit',
  submitVariant,
  cancelText = 'Cancel',
  showFooter = true,
  size,
  className = ''
}) => {
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${size} ${className}`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <DialogDescription>
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        
        <div className="py-4">
          {children}
        </div>

        {showFooter && (
          <DialogFooter>
            <Button
              variant="outline"
              onClick={onClose}
            >
              {cancelText}
            </Button>
            {onSubmit && (
              <Button
                variant={submitVariant}
                className='bg-indigo-400 hover:bg-indigo-500 text-white'
                onClick={handleSubmit}
              >
                {submitText}
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default Modal