export type ChatCover = {
  profile: string
  driver: string
  latestMessage: {
    text: string
    timestamp: Date
  }
}

export const dumbChats: ChatCover[] = [
  {
    driver: 'Jane Dee',
    profile: 'https://cdn2.thecatapi.com/images/4lp.gif/',
    latestMessage: {
      text: 'Hello, how are you?',
      timestamp: new Date(),
    },
  }, {
    driver: 'Jane Dee',
    profile: 'https://cdn2.thecatapi.com/images/35a.gif',
    latestMessage: {
      text: 'I am hungry!',
      timestamp: new Date(),
    },
  }, {
    driver: 'Jane Dee',
    profile: 'https://cdn2.thecatapi.com/images/186.gif',
    latestMessage: {
      text: '🦕🦖🦈🐬🐬🐬',
      timestamp: new Date(),
    },
  },
]

export default dumbChats
