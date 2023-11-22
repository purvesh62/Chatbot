import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import ChatBotConfigurations from "../configurations/ChatBotConfigurations";

type Message = {
    type: string;
    message: string | string[];
};

const MessageStore = (set: any) => ({
    messages: [],

    userSessionID: "",

    addSessionID: (sessionID: string) => set((state: any) => ({ userSessionID: sessionID })),

    addMessage: (message: Message) => {
        console.log("message: ", message);
        if (typeof message.message == "object") {
            message.message.forEach((msg) => {
                set((state: any) => ({
                    messages: [
                        ...state.messages,
                        {
                            type: message.type,
                            message: msg,
                        },
                    ],
                }));
            });
        } else {
            set((state: any) => ({
                messages: [...state.messages, message],
            }));
        }
    },

    deleteTypingMessage: () =>
        set((state:any) => ({
            messages: state.messages.filter((message:Message) => message.type != "typing"),
        })),

    clearMessages: () =>
        set({
            messages: [
                {
                    type: "bot",
                    message: ChatBotConfigurations.initialMessage,
                },
            ],
        }),
});

const useMessageStore = create(
    devtools(
        persist(MessageStore, {
            name: "messages",
            storage: createJSONStorage(() => localStorage),
        })
    )
);

export default useMessageStore;
