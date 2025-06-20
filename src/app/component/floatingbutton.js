import { RiChat3Line } from 'react-icons/ri';

export default function ChatButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button className="bg-yellow-500 hover:bg-yellow-400 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 transition-all duration-300">
        <RiChat3Line size={28} />
      </button>
    </div>
  );
}
