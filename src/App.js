import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"
import Mouse from './components/Mouse.jsx';
import MainRoute from './components/Route/Router';
import Nav from "./components/Base_element/Nav";
function App() {
  const isDesktop = window.innerWidth > 840;
  return (
    <div className="App">
      <Router>
        <Nav />
        <MainRoute />
        <Mouse />
        {isDesktop ? <AnimatedCursor
          className="cursor-image"
          innerSize={10}
          outerSize={10}
          outerScale={1}
          outerStyle={{
            border: 'none',
            backgroundColor: 'none',
            backgroundImage: 'none',
            backgroundSize: '20% 20%',
            color: 'white',
          }}
          innerStyle={{
            border: 'none',
            backgroundColor: 'white',
            backgroundSize: '20% 20%',
          }}
        /> : null}
      </Router>
    </div>
  );
}

export default App;


/* 
PROBLEMI:
-about page - const non usata,
-aboutme/link - padding e posizione logolink
-skills img- come metto il nome del file nell'alt?
bottone del mouse in mobile
il cazzo di luna destra perche si sposta?
*/


/* TO ADD:
bottone che manda ad un altra pagina da mobile
soluzione per lo scroll delle pagine
contact
?footer
^^^^^^^^^^^meta e altre merde
*/

/* TO MODIFY:
img e png
logo link piu grandi e curius piu piccolo
project da fare responsive
project  dettagli da fare responsive
openclassroom evidenziato
 */


/* NEXT STUFF:


*/








//mention to the autor and site:
/* <a href="https://www.freepik.com/free-vector/green-smoke-background_25756384.htm#query=neon%20green&position=35&from_view=search&track=ais">Image by pikisuperstar</a> on Freepik */


/*
Photo by stein egil liland: https://www.pexels.com/photo/landscape-photography-of-mountain-3384692/

*/

//fotoohmyfood
/*
Photo by Pixelme Stock Photography: https://www.pexels.com/photo/plate-of-pasta-2773940/

*/


/*
luna btn

<a href='https://pngtree.com/freepng/cartoon-moon-crescent-element_5555091.html'>png image from pngtree.com/</a>
*/

//logo
/* <a href="https://iconscout.com/3d-illustrations/linkedin-logo" class="text-underline font-size-sm" target="_blank">Linkedin Logo</a> by <a href="https://iconscout.com/contributors/3q" class="text-underline font-size-sm" target="_blank">3Q World</a> */


/* 
<a href="https://iconscout.com/3d-illustrations/whatsapp" class="text-underline font-size-sm" target="_blank">Whatsapp</a> by <a href="https://iconscout.com/contributors/fahrulsaputra7" class="text-underline font-size-sm">Fahrul Saputra</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>


<a href="https://iconscout.com/3d-illustrations/gmail" class="text-underline font-size-sm" target="_blank">Gmail</a> by <a href="https://iconscout.com/contributors/dwiprasetyoganoll" class="text-underline font-size-sm">DWIP</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>


<a href="https://iconscout.com/3d-illustrations/github" class="text-underline font-size-sm" target="_blank">Github</a> by <a href="https://iconscout.com/contributors/dwianggaicon" class="text-underline font-size-sm" target="_blank">Dwiangga Design</a>


<a href="https://iconscout.com/3d-illustrations/pencil" class="text-underline font-size-sm" target="_blank">Pencil</a> by <a href="https://iconscout.com/contributors/rizkiahmadfauzi28" class="text-underline font-size-sm">Rizki Ahmad Fauzi</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>

<a href="https://www.freepik.com/free-vector/writting-pencil-design_850418.htm#query=3d%20pen&position=3&from_view=keyword&track=ais">Image by yurlick</a> on Freepik
*/