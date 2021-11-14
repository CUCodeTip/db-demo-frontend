export type ChatCover = {
  profile: string
  driver: string
  latestMessage: {
    text: string
    timestamp: Date
  }
  startDate: Date
  maxPassengers: number
  passengers: number
}

export const dumbChats: ChatCover[] = [
  {
    driver: 'Jane Dee',
    profile: 'https://i.pinimg.com/originals/98/70/bb/9870bb35ba3e9c8edc023d94e039217c.gif',
    latestMessage: {
      text: 'Hello, how are you?',
      timestamp: new Date(),
    },
    startDate: new Date(),
    maxPassengers: 5,
    passengers: 2,

  }, {
    driver: 'Jane Dee',
    profile: 'https://49.media.tumblr.com/1af5628311b430fe731ba8eaa0286165/tumblr_nzwm5xmTbJ1v1vw2lo1_500.gif',
    latestMessage: {
      text: `Aliqua quis aute elit aliqua magna duis est sint sint voluptate aute. In laborum cillum nulla mollit deserunt consectetur. Occaecat amet ut ea eiusmod nulla do nisi sint anim ut do quis aliquip sint. Eu eiusmod id nostrud est ullamco officia irure occaecat quis esse ipsum ut amet eu. Adipisicing ullamco incididunt cupidatat aliquip.

Amet reprehenderit eu quis laborum consectetur sunt magna dolore. Minim ipsum ipsum id laborum labore fugiat aliqua in aliqua ad. Ipsum sint consequat aliqua cillum labore enim consectetur tempor minim velit quis quis dolore elit. Sunt ipsum qui dolor do ut cillum do sit. Magna commodo non id nostrud aute ullamco. Consequat amet nulla aute ut incididunt amet est Lorem. Velit ex amet sunt culpa enim Lorem.

Do culpa nulla consequat pariatur exercitation excepteur esse et elit eiusmod. Adipisicing aliquip culpa sit ad aliquip dolor ipsum. Dolore commodo est sit ex. Tempor exercitation culpa laborum excepteur aliquip magna reprehenderit deserunt.`,
      timestamp: new Date(),
    },
    startDate: new Date(),
    maxPassengers: 10,
    passengers: 8,

  }, {
    driver: 'Jane Dee',
    profile: 'https://c.tenor.com/ER_xl0H9FaUAAAAd/distorted-cat-meme-distortion.gif',
    latestMessage: {
      text: '🦕🦖🦈🐬🐬🐬',
      timestamp: new Date(),
    },
    startDate: new Date(),
    maxPassengers: 4,
    passengers: 4,

  },
]

export default dumbChats
