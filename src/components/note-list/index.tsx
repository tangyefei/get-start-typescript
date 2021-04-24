import React, { useState, useEffect } from 'react';

import './index.less';
import NoteItem from '../note-item';
import NoteDao from '../../database/note';
import Note from '../../model/note';

function NoteList() {
  const [ noteList, setNoteList ] = useState<Note[]>([]);

  const handleNoteDeleted = (id: number) => {
    const index = noteList.findIndex(d => d.id === id);
    noteList.splice(index, 1)
    setNoteList([...noteList])
  }

  useEffect(() => {
    setTimeout(() => {
      NoteDao.getAll().then(res => {
        setNoteList(res);
      });
    }, 2000);

    window.mb.addListener('noteAdded', (note: Note) => {
      setNoteList((prevList) => [ note, ...prevList ])
    });
  }, [])

  return (
    <div className="note-list">
      { noteList.map(d => {
        return <NoteItem data={d} key={d.createAt.toString()} handleNoteDeleted={handleNoteDeleted}/>
      }) }
    </div>
  )
}

export default NoteList;