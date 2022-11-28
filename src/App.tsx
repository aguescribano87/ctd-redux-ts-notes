import { useSelector } from 'react-redux';
import './App.css';
import { CreateNote } from './components/createNote';
import { ListNotes } from './components/listNotes';
import { Pokemon } from './components/pokemon';
import { Nota } from './type';

function App() {

  const store = useSelector<{ notitas: { notes: Nota[] } }, Nota[]>(state => state.notitas.notes)

  return (
    <div className="App">
      <CreateNote cant={Number(store.length + 1)} />
      <ListNotes notes={store} />
      <Pokemon />
    </div>
  );
}

export default App;
