//App.jsx
//import Calendar from './Components/Calendar/Calendar';
//import Table from './Components/Table/Table';
import './App.css'
import ChsPourHouse from './Components/venueReact/chsPourHouse/chsPourHouse';
import MusicFarm from './Components/venueReact/musicFarm/musicFarm';
import MusicHall from './Components/venueReact/musicHall/musicHall';
import RoyalAmerican from './Components/venueReact/royalAmerican/royalAmerican';
import Theater99 from './Components/venueReact/theater99/theater99';
import WindJammer from './Components/venueReact/windJammer/windJammer';


const App = () => {

  return (
            <body>
                <header>
                    <h1>
                        Welcome to CHS Source!
                    </h1>
                    <h2>Your place for independent venue schedules</h2>
                </header>
                <main>
                    <div className='chs-pour-house'>
                        <ChsPourHouse />
                    </div>
                    <div className='music-farm'>
                        <MusicFarm />
                    </div>
                    <div className='music-hall'>
                    <MusicHall />
                    </div>
                    <div className='royal-american'>
                    <RoyalAmerican />
                    </div>
                    <div className='theater-99'>
                    <Theater99 />
                    </div>
                    <div className='windjammer'>
                    <WindJammer />
                    </div>
                </main>
            </body>
  );
};

export default App;
