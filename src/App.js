import './App.css';
import Header from './componets/header/Header'
import Footer from './componets/footer/Footer'
import Possibility from './componets/possibility/Possibility'
import Whatgpt from './componets/whatgpt/Whatgpt'
import Article from './componets/article/Article';
import Navbar from './componets/NavBar/Navbar';
import WordFeat from './componets/WordFeat/WordFeat';
import ActionPage from './componets/actionPage/ActionPage';

function App() {
  return (
    <div className="App">
      <div className='gradient-header'>
        <Navbar />
        <Header />
      </div>
      <Whatgpt />
      <WordFeat />
      <Possibility />
      <ActionPage />
      <Article />
      <Footer />
      
    </div>
  );
}

export default App;
