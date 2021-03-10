import { Grid } from '@material-ui/core';
import CronologyAccordion from './components/CronologyAccordion';
import FormComp from './components/FormComp';
import HeaderBar from './components/HeaderBar';
import MapComp from './components/MapComp';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Grid container direction='column' spacing={2} >

        <Grid item >
          <CronologyAccordion />
        </Grid>

        <Grid container item >
          <Grid item >
            <FormComp />
          </Grid>

          <Grid item >
            <MapComp />
          </Grid>

        </Grid>


      </Grid>
    </div>
  );
}

export default App;
