import Head from 'next/head'
import Header from '../components/Header/Header.js'
import Feed from '../components/Feed/Feed.js'
import Modal from '../components/Modal.js'
import ModalStory from '../components/ModalStory.js'

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
      <Modal />
      <ModalStory />
    </div>
  )
}

export default Home
