import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState } = createGlobalState({
  clickedUsername: 'noUsername',
  usernameIndex: 0,
})

export { useGlobalState, setGlobalState }
