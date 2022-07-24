import globe from '../images/globe.png';

export default function Navbar() {
  return (
    <div>
      <nav className='nav'>
        <img src={globe} alt='globe' className='img-globe' />
        <h2>my travel journal.</h2>
      </nav>
    </div>
  );
}
