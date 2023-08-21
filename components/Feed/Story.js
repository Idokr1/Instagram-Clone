import { storyState } from '../../atoms/storyAtom'
import { useRecoilState } from 'recoil'
import { setGlobalState, useGlobalState } from '../StoryState'

function Story({ img, username, index }) {
  const [openStory, setOpenStory] = useRecoilState(storyState)

  return (
    <div>
      <img
        src={img}
        alt="story"
        className="h-14 w-14 transform cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] transition duration-200 ease-out hover:scale-110"
        onClick={() => {
          setGlobalState('clickedUsername', username)
          setGlobalState('usernameIndex', index)
          setOpenStory(true)
        }}
      />
      <p className="w-14 truncate text-center text-sm">{username}</p>
    </div>
  )
}

export default Story
