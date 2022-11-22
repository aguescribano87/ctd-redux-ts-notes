import { useSelector } from 'react-redux';
import './App.css';
import { CreateNote } from './components/createNote';
import { ListNotes } from './components/listNotes';

function App() {

  const store: any = useSelector<any>(state => state.notitas.notes)

  return (
    <div className="App">
      <CreateNote cant={Number(store.length + 1)} />
      <ListNotes notes={store} />
    </div>
  );
}

export default App;
