import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header/Header'

function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="-mt-56 flex min-h-screen flex-col items-center justify-center px-14 py-2 text-center">
        <img className="w-80" src="/images/instagram.png" alt="" />
        <p className="font-xs italic">
          This is not a REAL app, it is built for educational purposes only
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="login-with-google-btn"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default SignIn
