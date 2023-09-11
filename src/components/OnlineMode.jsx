import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

export default function OnlineMode(props) {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Online Mode
        </Typography>

        <Typography variant="body2">
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch
          onChange={() => props.setIsOnline(!props.isOnline)}
          label="Online Mode"
          defaultChecked
        />
      </CardActions>
    </Card>
  );
}
