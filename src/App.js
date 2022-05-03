import './App.css';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import BodyCard from './components/BodyCard';
import Switch from './components/Switches';
import Checkbox from './components/Checkbox';
import Radiobutton from './components/Radiobutton';
import Divider from './components/Divider';
import Progress from './components/Progress';
import Snackbar from './components/Snackbar';
import Accordion from './components/Accordion';
import Appbar from './components/Appbar';
import Bottomnavigation from './components/Bottomnavigation';
import Temporarydrawer from './components/Temporarydrawer';
import Menu from './components/Menu';
import Maxheigthmenu from './components/Maxheigthmenu';
import Stepper from './components/Stepper';
import Textstepper from './components/Textstepper';
import Errorstep from './components/Errorstep';
import Sizebutton from './components/Sizesbutton';
import Complexbutton from './components/Complexbutton';
import NestedModal from './components/Nestedmodal';
import Wovenimagelist from './components/Wovenimagelist';
import Positionedpopper from './components/Positionedpopper';
import Labelsandhelpertext from './components/Labelsandhelpertext';
import Basictable from './components/Basictable';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';


function App() {
  return (
    <Grid >
      <Grid className={"back"} >
        <Grid item>
          <Header />
        </Grid>
        <Grid className={"weigth"}>
          <Grid>
            <p className={"p-margin-s"}></p>
          </Grid>
          <Grid item>
              <h1 className={"title"}>Basic Table</h1>
              <Grid className={"left-margin-l"}>        
                <Basictable />
              </Grid>
              <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
              <h1 className={"title"}>Labels and helpertext</h1>
              <Grid className={"left-margin-l"}>        
                <Labelsandhelpertext  />
              </Grid>
              <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
              <h1 className={"title"}>Positioned popper</h1>
              <Grid className={"left-margin-l"}>        
                <Positionedpopper  />
              </Grid>
              <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
              <h1 className={"title"}>Woven image list</h1>
              <Grid className={"left-margin-l"}>        
                <Wovenimagelist  />
              </Grid>
              <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
              <h1 className={"title"}>BodyCard</h1>
              <Grid className={"left-margin-l"}>        
                <BodyCard  />
              </Grid>
              <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Switch</h1>
            <Grid className={"left-margin-l"}>
              <Switch />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Checkbox</h1>
            <Grid className={"left-margin-l"}>
              <Checkbox />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Radiobutton</h1>
            <Grid className={"left-margin-l"}>
              <Radiobutton />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>

          <Grid item>
            <h1 className={"title"}>Divider</h1>
            <Grid className={"left-margin-l"}>
              <Divider />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
           <h1 className={"title"}>Progress</h1>
            <Grid className={"left-margin-l"}>
              <Progress />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Snackbar</h1>
            <Grid className={"left-margin-l"}>
              <Snackbar />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Accordion</h1>
            <Grid className={"left-margin-l"}>
              <Accordion />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Appbar</h1>
            <Grid className={"left-margin-l"}>
              <Appbar />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Bottomnavigation</h1>
            <Grid className={"left-margin-l"}>
              <Bottomnavigation />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Temporarydrawer</h1>
            <Grid className={"left-margin-l"}>
              <Temporarydrawer />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
        
          <Grid item>
            <h1 className={"title"}>Menu</h1>
            <Grid className={"left-margin-l"}>
              <Menu />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Maxheigth menu</h1>
            <Grid className={"left-margin-l"}>
              <Maxheigthmenu />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Stepper</h1>
            <Grid className={"left-margin-l"}>
              <Stepper />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Text stepper</h1>
            <Grid className={"left-margin-l"}>
              <Textstepper />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Errorstep</h1>
            <Grid className={"left-margin-l"}>
              <Errorstep />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Sizebutton</h1>
            <Grid className={"left-margin-l"}>
              <Sizebutton />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Complexbutton</h1>
            <Grid className={"left-margin-l"}>
              <Complexbutton />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>NestedModal</h1>
            <Grid className={"left-margin-l"}>
              <NestedModal />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>
          <Grid item>
            <h1 className={"title"}>Icon</h1>
            <Grid className={"left-margin-l"}>
              <HomeRoundedIcon />
              <HomeRoundedIcon />
              <HomeRoundedIcon />
              <HomeRoundedIcon />
              <HomeRoundedIcon />
              <HomeRoundedIcon />
            </Grid>
            <p className={"p-margin-l"}></p>
          </Grid>

        
        </Grid>
      </Grid>
    </Grid>  
  );
}

export default App;