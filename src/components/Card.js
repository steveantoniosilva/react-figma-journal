import marker from '../images/marker.jpg';

export default function Card(props) {
  return (
    <div className='card'>
      <div>
        <img
          className='main-image'
          src={props.item.imageUrl}
          alt='Mount Fuji'
        />
      </div>
      <div className='info-section'>
        <div className='location-info'>
          <img src={marker} alt='' />
          <h1>{props.item.location}</h1>
          <a href={props.item.googleMapsUrl} target='_blank' rel='noreferrer'>
            <h2>View on Google Maps</h2>
          </a>
        </div>
        <h1 className='title'>{props.item.title}</h1>
        <div className='dates'>
          <h1>{props.item.startDate}-</h1>
          <h1>{props.item.endDate}</h1>
        </div>
        <p className='description'>{props.item.description}</p>
        <p className="end"></p>
          </div>
    </div>
  );
}
