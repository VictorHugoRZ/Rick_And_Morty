import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {
            characters.map(({id ,name, status, species, gender, origin, image}, index) => {
               return <Card 
               id = {id}
               key = {index}
               name = {name}
               status = {status}
               species = {species}
               gender = {gender}
               origin = {origin}
               image = {image}
               onClose = {props.onClose}
               />
            })
         }
      </div>
   )
}
 