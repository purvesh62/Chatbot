import Image from 'next/image'
import ChatBot from "./components/chatbot/ChatBot";

export default function Home() {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-gray-200'>
      <p className='font-sans text-6xl text-sky-500'>Personal Chatbot</p>
      <ChatBot />
    </div>
  )
}
