import React, { useEffect, useState } from 'react';
import Users from './Users';
import Transcripts from './Transcripts';
import "../App.css"
// import Sidebar from './Sidebar';
const Dashboard = ({ isLoggedIn , menu, setMenu}) => {
  // const [menu, setMenu] = useState('');
  const [selectedSession, setSelectedSession] = useState(null);
  useEffect(() => {
    if (isLoggedIn) {
      setMenu('transcripts');
    } else {
      window.location.href = '/login';
    }
  }, [isLoggedIn]);

  return (
    <div>
      {/* <Sidebar selectedMenu={menu} setMenu={setMenu} setSelectedSession={setSelectedSession} /> */}
      <div className="content">
        {menu === 'users' && <Users />}
        {menu === 'transcripts' && <Transcripts selectedSession={selectedSession} setSelectedSession={setSelectedSession} selectedMenu={menu} setMenu={setMenu}/>}
      </div>
    </div>
  );
};

export default Dashboard;
