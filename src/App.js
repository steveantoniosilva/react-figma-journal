import './index';
import Navbar from './components/Navbar';
import data from './data';
import Card from './components/Card';
import Footer from './components/Footer';

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className='App'>
      <div>
        <Navbar />
        <section>{cards}</section>
        <Footer />
      </div>
    </div>
  );
}
