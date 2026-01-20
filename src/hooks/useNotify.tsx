import { toast, ToastContainer } from 'react-toastify';
const useNotify = () => {

    const notify = {
        success: (text: string) => toast.success(text || ''),
        error: (text: string) => toast.error(text || ''),
        warn: (text: string) => toast.warn(text || ''),
        info: (text: string) => toast.info(text || '')
    }

    return {
        notify,
        ToastContainer
    }
}
export default useNotify