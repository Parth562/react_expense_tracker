import './Card.css';

function Card(props) {
   const Class = 'card ' + props.className;
   return <div className={Class}>{props.children}</div>;
}

export default Card;
