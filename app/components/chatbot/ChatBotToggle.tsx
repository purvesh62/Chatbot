import React from 'react'
import Image from 'next/image';

export default function ChatBotToggle(props: any) {
    return (
        <div className='fixed z-50 bottom-6 right-6 h-[60px] w-[60px] flex flex-row'>
            <Image
                src={'img/bot-img/chatbot-toggle.svg'}
                alt="ChatBot"
                priority={true}
                unoptimized={true}
                className='cursor-pointer shadow-lg rounded-full bg-gray-50 shadow-gray-400 p-3 w-full'
                width={0}
                height={0}
                onClick={props.handleToggle}
            />
        </div>
    )
}
