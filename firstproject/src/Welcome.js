import './styles.css';
import lizard from './images/lizard';


let college="SVECW";
let location="bvrm";
  const msg=<h1>Hello</h1>
function Welcome(){
  return ( 
    <>
  <center><img src={lizard}/>
  <h1>Lizard</h1>
  <p>Lizards are widespread group of squamate reptiles,with over 6000 species,<br></br> raging across all continents except Antartica</p><br></br>
  <a href="#" className='A'>Share</a><a href="#" className='B'>Learn More</a>
  </center>
  </>
    )
}
export default Welcome;