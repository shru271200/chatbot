import { ChatEngine } from 'react-chat-engine';
import LoginForm from './Components/LoginForm';
import ChatFeeds from './Components/ChatFeeds.jsx';
import './App.css';

const projectID = "fa87a416-d8e7-49fa-817a-95128efc941d";

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeeds {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;
