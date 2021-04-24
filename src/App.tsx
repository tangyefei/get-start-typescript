import React from 'react';
import AppSider from './components/sider';
import AppBody from './components/body';
import AppHeader from './components/header';
import AppEditor from './components/editor';
import AppNoteList from './components/note-list';

import './App.less';

import './utils/message-bus';
// import DB from './database/indexed-db2'
// import NoteDao from './database/note';
// NoteDao.getAll();

function App () {
  return <div className="app">
    <AppSider/>
    <AppBody>
      <AppHeader/>
        <main>
          <AppEditor />
          <AppNoteList />
        </main>
    </AppBody>
  </div>;
}

export default App;