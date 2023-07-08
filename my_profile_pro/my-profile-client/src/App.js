import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Aboutme from './components/aboutMe';
import MyInterests from './components/myInterests';
import MySkills from './components/mySkills';
import MyProjects from './components/myProjects';
import ContactMe from './components/contactMe';
import Footer from './components/footer';
import Login from './components/login';
import MessageList from './components/messageList';
import MessageDetails from './components/messageDetails';

const App = () => {

  const [showLoginPage, setHomePage] = useState(true);
  const [messageOverlay, messageCards] = useState(false);
  const [FetchedDataFromMDB, passingValuesToComp] = useState([]);
  const [ToShowMessageCards, accessRightsToDB] = useState(false);
  const [toShowLogoutBtn, logout] = useState(false);
  const [showHomePage, homePage] = useState(false);

  useEffect(() => {
    console.log();
    getDataFromMongoDB();
  }, []);

  const authenticationPage = () => {
    setHomePage(false);
    homePage(true);
    if(toShowLogoutBtn){
      homePage(false);
      accessRightsToDB(false);
      setHomePage(true);
      logout(false);
    }
  }; 

  const signedInSucessfully = () => {
    accessRightsToDB(true);
    logout(true);
    homePage(false);
  }

  const getDataFromMongoDB = () => {
    axios.get('http://localhost:8000/contact/read').then((r) => {
      console.log(r.data.response, 'congrulations your have retrieved');
      const response = r.data.response;
      passingValuesToComp(response);
    }).catch((err) => {
      console.log(err);
    })
  }

  const cardClicked = () => {
    // console.log(obj, 'obj');
    messageOverlay ? messageCards(false) : messageCards(true);
  }

  const getObjFromMsgList = (obj) => {
    console.log(obj, 'obj');
  }

  return (
    <div className="App">
      <div>
        {/* <Header/> */}
        <Header 
          showLoginPage={showLoginPage} 
          toShowLogoutBtn={toShowLogoutBtn}
          authenticationPage={authenticationPage} 
        />

       
        {messageOverlay ?
          <MessageDetails cardClicked={cardClicked} />
          : ''}

        {showHomePage ?
          <Login
            showLoginPage={showLoginPage}
            // authenticationPage={authenticationPage}
            getDataFromMongoDB={getDataFromMongoDB}
            signedInSucessfully={signedInSucessfully}
          />
          :
          ToShowMessageCards ?
            <MessageList
              FetchedDataFromMDB={FetchedDataFromMDB}
              getObjFromMsgList={getObjFromMsgList}
              cardClicked={cardClicked} />
            :
            <div>
              <Home />
              <Aboutme />
              <MyInterests />
              <MySkills />
              <MyProjects />
              <ContactMe />
            </div>
        }
        

        <Footer />
      </div>
    </div>
  );
}

export default App;
