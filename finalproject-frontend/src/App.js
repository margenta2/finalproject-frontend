import './App.css';
import React from "react";
import{Link, Route} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import PostBoard from './components/PostBoard';
import OnePost from './components/OnePost';
import CreatePost from './components/CreatePost';
import MentalHealth from './components/MentalHealth';
import SocialSupport from './components/SocialSupport';
import Beliefs from './components/Beliefs';
import DeProgram from './components/DeProgram';
import Glossary from './components/Glossary';
import Humor from './components/Humor';
import About from './components/About';
import SocialFollow from './components/SocialFollow';


function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Home /> } />
      <Route path="/signup" render={(props) => <SignUp {...props} /> } />
      <Route path="/login" render={(props) => <Login {...props} /> } />
      <Route path="/profile/:id" render={(props) => <UserProfile {...props} /> } />
      <Route path="/posts" exact render={() => <PostBoard /> } />
      <Route path="/posts/post/:id" render={(props) => <OnePost {...props} /> } />
      <Route path="/posts/create" exact render={(props) => <CreatePost {...props} /> } />
      <Route path="/beliefs" render={() => <Beliefs /> } />
      <Route path="/deprogram" render={() => <DeProgram /> } />
      <Route path="/glossary" render={() => <Glossary /> } />
      <Route path="/humor" render={() => <Humor/> } />
      <Route path="/mentalhealth" render={() => <MentalHealth /> } />
      <Route path="/socialsupport" render={() => <SocialSupport /> } />
      <Route path="/about" render={() => <About /> } />
      <SocialFollow />
    </div>
  );
}

export default App;
