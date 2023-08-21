import React from 'react'
import { storyState } from '../atoms/storyAtom'
import { useRecoilState } from 'recoil'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { setGlobalState, useGlobalState } from './StoryState'
import { useSession } from 'next-auth/react'

function ModalStory() {
  const { data: session } = useSession()
  const [openStory, setOpenStory] = useRecoilState(storyState)
  const [clickedUsername] = useGlobalState('clickedUsername')
  const [usernameIndex] = useGlobalState('usernameIndex')

  return (
    <Transition.Root show={openStory} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setOpenStory}
      >
        <div className="flex min-h-[800px] items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:min-h-screen sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="card inline-block transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
              <div className="progress_bar_wrap mb-3 h-1 w-full rounded-lg">
                <div className="progress_bar h-1 w-10 rounded-lg"></div>
              </div>
              <div className="mb-3 mt-3 flex items-center justify-start">
                <div className="mr-2 flex	items-center gap-1">
                  {usernameIndex == -1 ? (
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={session?.user?.image}
                      alt="profile"
                    />
                  ) : (
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={`/images/storiesAvatars/avatar-${usernameIndex}.png`}
                      alt="profile"
                    />
                  )}
                </div>
                <span className="username-name mr-2 text-sm">
                  {clickedUsername}
                </span>
                <span className="time text-sm">2h</span>
              </div>
              <div>
                {usernameIndex == -1 ? (
                  <img
                    className="w-15 h-30"
                    src="/images/storiesImages/story-1000.png"
                  />
                ) : (
                  <img
                    className="w-15 h-30"
                    src={`/images/storiesImages/story-${usernameIndex}.png`}
                  />
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ModalStory
