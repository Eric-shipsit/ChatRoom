import './App.css';

import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import {auth} from './firebase/firebase';

import {useAuthState} from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

// function SignIn() {

//   return (
//     <button onClick = {signInWithGoogle}>Sign in with Google</button>
//   )
// }

// function ChatRoom() {
//   const messageRef = collection(db, 'messages');
//   const query = messageRef.orderBy('createdAt').limit(25);

//   const [messages] = useCollectionData(query, {idField: 'id'});
// }


export default App;
