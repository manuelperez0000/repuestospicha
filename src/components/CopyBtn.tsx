import { Copy } from 'lucide-react';

interface CopyBtnProps {
  text: string;
  title?: string;
}

const CopyBtn = ({ text, title }: CopyBtnProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-red-500 cursor-pointer hover:text-red-700 p-1 transition-colors"
      title={title || `Copiar ${text}`}
    >
      <Copy size={16} />
    </button>
  );
};

export default CopyBtn;
