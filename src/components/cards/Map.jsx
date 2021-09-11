import { Card, CardMedia, CardHeader } from "@material-ui/core";

const Map = ({ data }) => {
  const { destination } = data

  const googleMapLink = `https://www.google.com/maps/embed/v1/place?q=${destination}&key=${process.env.REACT_APP_GOOGLEAPI_KEY}`;
  // const classes = useStyles();

  return (
    <Card >
      <CardHeader title={`Explore ${destination}!`} />
      <CardMedia width={1}>
        <iframe
          // className={classes.googleMap}
          loading="lazy"
          allowfullscreen
          src={googleMapLink}
        ></iframe>
      </CardMedia>
    </Card>
  );
}

export default Map
