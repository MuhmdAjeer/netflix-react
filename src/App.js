import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPosts/RowPost';
import {action,adventure,comedy,history,horror,mystery,originals, science_fiction} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' smallPoster/>
      <RowPost url={comedy} title='Comedy' smallPoster/>
      <RowPost url={adventure} title='Adventure' smallPoster/>
      <RowPost url={horror} title='Horror' smallPoster/>
      <RowPost url={science_fiction} title='Science-Fiction' smallPoster/>
      <RowPost url={mystery} title='Mystery' smallPoster/>
      <RowPost url={history} title='History' smallPoster/>


    </div>
  );
}

export default App;
