import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h5 className="text-white">Hi, {session.user?.name}</h5> <br />
        <button className="text-white" onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

//   return (
//     <>
//       <button onClick={() => signIn("google")} className="text-white">Sign In With Google</button>
//       <button onClick={() => signIn("facebook")} className="text-white">Sign In With Facebook</button>
//     </>
//   );
}
