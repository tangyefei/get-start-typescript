import React from 'react';

import './index.less';

import utils from '../../utils';
import Note from '../../model/note';
import NoteDao from '../../database/note';

interface Props  {
  data: Note,
  handleNoteDeleted: (id: number) => void
}

function delNote(id: number, handler: (id: number) => void) {
  NoteDao.delete(id, handler);
}

function  generateContent(str: string) {
  const reg = /(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?/g;
  const res = [];
  let match;
  let pos = 0;
  let index = 0;

  while(!!(match = reg.exec(str))) {
    let url = match[0];
    let index = match.index;
    if(index > pos) {
      res.push(<span key={index++}>{str.substring(pos, index)}</span>)
    }
    res.push(<a key={index++} target="_blank" rel="noreferrer" href={url}>{url}</a>)
    pos = index + url.length;
  }
  if(pos<str.length) res.push(<span key={index++}>{str.substring(pos, str.length)}</span>);
  return res
}

function NoteItem(props: Props) {
  // console.log('data', data)
  const { data, handleNoteDeleted } = props;
  console.log("data passed in", data);
    // TODO
    // 1. 为什么hover会导致日期都移动
    // 2. 解决删除后的震动问题
    // , handleNoteDeleted
    return (
      <div className="note-item" key={data.createAt}>
        <p className="desc-row">
          <span className="create-date">创建于 {utils.formatDate(Number(data.createAt))}</span>
          <span className="operation">
            <span href="#" className="btn del" onClick={() => { delNote(data.id, handleNoteDeleted)} }>❌ </span>
            {/* , handleNoteDeleted */}
          </span>
        </p>
        <p className={data.done ? 'content-row deleted' : 'content-row'}>
          {data.category && data.category[0] === 'n/a' ? '' : <span className="tag">{data.category}</span>}
          {generateContent(data.content)}
        </p>
      </div>
    );
}

export default NoteItem;