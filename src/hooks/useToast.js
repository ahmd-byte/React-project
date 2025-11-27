import toast from 'react-hot-toast'

export function useToast() {
    const success = (msg) => toast.success(msg)
    const error = (msg) => toast.error(msg)
    const info = (msg) => toast(msg)
    return { success, error, info }
}
