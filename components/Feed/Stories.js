import React, { useState } from 'react'
import Story from './Story'
import { useSession, signIn, signOut } from 'next-auth/react'

function Stories() {
  const { data: session } = useSession()

  const [suggestions, setSuggestions] = useState([
    {
      username: 'johndoe',
    },
    {
      username: 'keyshawn_weber',
    },
    {
      username: 'gracie.grant',
    },
    {
      username: 'john.roberts',
    },
    {
      username: 'dorthy_mohr',
    },
    {
      username: 'norris_powlowski85',
    },
    {
      username: 'kaela.stiedemann',
    },
    {
      username: 'delbert_schmeler',
    },
    {
      username: 'jaquan_klein54',
    },
    {
      username: 'jedediah.shields4',
    },
    {
      username: 'emmett_moen',
    },
    {
      username: 'rodrick_mayert',
    },
    {
      username: 'belle47',
    },
    {
      username: 'kelly.gutkowski',
    },
    {
      username: 'ilene.corkery',
    },
  ])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          img={session?.user?.image}
          username={session.user.username}
          index={-1}
        />
      )}

      {suggestions.map((profile, index) => (
        <Story
          key={index}
          img={`/images/storiesAvatars/avatar-${index}.png`}
          username={profile.username}
          index={index}
        />
      ))}
    </div>
  )
}

export default Stories
