import React, { useState } from 'react'

function Suggestions() {
  const [following, setFollowing] = useState([false, false, true, true, false])

  const [suggestions, setSuggestions] = useState([
    {
      username: 'weber2',
      company: 'Donnelly - Heller',
    },
    {
      username: 'bridie12',
      company: 'McGlynn Group',
    },
    {
      username: 'lee_wisozk',
      company: 'Johns - Haley',
    },
    {
      username: 'aliza_boyle60',
      company: 'Wilderman - Lang',
    },
    {
      username: 'libbie_tremblay67',
      company: 'Stamm & Gottlieb',
    },
  ])

  const onFollowHandler = (state, index) => {
    const arr = [...following]
    arr[index] = state
    setFollowing(arr)
  }

  return (
    <div className="ml-10 mt-4">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">
          Suggestions for you.
        </h3>
        <button className="font-semibold text-black">See All</button>
      </div>

      {suggestions.map((profile, index) => (
        <div key={index} className="mt-3 flex items-center justify-between">
          <img
            className="h-10 w-10 rounded-full border p-[2px]"
            src={`/images/suggestionsAvatars/avatar-${index}.png`}
            alt="suggestion"
          />
          <div className="ml-4 flex-1">
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="text-sm text-gray-400">
              Works at {profile.company}
            </h3>
          </div>

          {following[index] ? (
            <button
              onClick={() => onFollowHandler(false, index)}
              className="pl-8 text-sm font-bold text-blue-400"
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                onFollowHandler(true, index)
                alert(`You are now following ${profile.username}`)
              }}
              className="pl-10 text-sm font-bold text-blue-400"
            >
              Follow
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Suggestions
