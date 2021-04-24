// import IndexedDB from './indexed-db';
import DB from './indexed-db2';
import Note from '../model/note';
// // IndexedDB.openDB('kaizen', 'notes', 1);
// const db = new IndexedDB2('kaizen');
// db.createObjectStore(['biubiubiu']);
// // import Note from '../model/note';
const db = new DB('test')
const tableName = 't1';

db.createObjectStore([tableName]);


const DataBase  = {
  // callback
  getAll: function() {
  //   // 延迟2s 因为还没打开
  //   setTimeout(() => {
  //     // const result =
  //     console.log('invoke getAllValue');
  //     db.getAllValue('biubiubiu')
  //     // result.then(res => {})
  //     // console.log(result);
  // //     IndexedDB.searchAll('notes', result => {
  // //       result.sort((a,b) => b.createAt - a.createAt)
  // // //       callback(result);
  // //     })
  //   }, 2000)
      // db.putValue('t1', {content: 'is is strange!'})
      return db.getAllValue(tableName)
      // const res:any =
      // return (res as NoteWrap[]).map(d => d.data);;
      // const res: NoteWrap[] =
      // return res.map(d => d.data);
  },

  add(item: Note) {
    return db.putValue(tableName, item);
  },
  // // update(item, callback) {
  // //   IndexedDB.update('notes', item, callback);
  // // },
  delete(id: number, callback: (id: number) => void) {
    db.deleteValue(tableName, id);
    callback(id);
  },
}

export default DataBase;