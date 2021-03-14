import { Grid, Card, CardContent, CardHeader } from '@material-ui/core';
import CronologyAccordion from './components/CronologyAccordion';
import FaunaForm from './components/forms/FaunaForm';
import FormComp from './components/forms/FormComp';
import HeaderBar from './components/HeaderBar';
import MapComp from './components/maps/MapComp';
import TabForms from './components/forms/TabForms';
import MyMapComp from './components/maps/MyMapComp';


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Grid container direction='column' spacing={2} style={{ padding: '2%' }}>
        <Grid item >
          <CronologyAccordion />
        </Grid>

        <Grid container item direction="row" spacing={2} alignItems="stretch">
          <Grid item sm={12} md={6}>
            <FormComp />
          </Grid>

          <Grid item sm={12} md={6} >
            <Card style={{ backgroundColor: '#DAE0E7' }} raised >
              <CardHeader title='Mappa' style={{ backgroundColor: '#A9B7C7' }} />
              <CardContent >

                Mappa va qui
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={12}>
            <Card style={{ backgroundColor: '#DAE0E7' }} raised >
              <CardHeader title='Dati Specifici della segnalazione' style={{ backgroundColor: '#A9B7C7' }} />
              <CardContent >

                <TabForms />

              </CardContent>
            </Card>
          </Grid>





        </Grid>


      </Grid>
    </div>
  );
}

export default App;
