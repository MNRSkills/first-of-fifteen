import React from 'react';
import { Typography, Card, CardContent, CardActions, Button} from '@mui/material';

function Region(props) {
    console.log(props.title);
  return (
    <div>
     <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.title.Name}
        </Typography>
       
        
       
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Region;