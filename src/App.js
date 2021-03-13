import { Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import CronologyAccordion from './components/CronologyAccordion';
import FaunaForm from './components/FaunaForm';
import FormComp from './components/FormComp';
import HeaderBar from './components/HeaderBar';
import MapComp from './components/MapComp';


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Grid container direction='column' spacing={2} style={{padding: '2%'}}>
        <Grid item >
          <CronologyAccordion />
        </Grid>

        <Grid container item direction="row" spacing={2} alignItems="stretch">
          <Grid item sm={12} md={6}>
            <FormComp />
          </Grid>

          <Grid item sm={12} md={6} >
            <Card>
              <CardContent fullwidth>
                <MapComp />
              </CardContent>
            </Card>

          </Grid>    

          <Grid item xs={12}>
            <FaunaForm />
          </Grid>  



         

        </Grid>


      </Grid>
    </div>
  );
}

export default App;
