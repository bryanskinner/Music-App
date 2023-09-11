import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CustomCardWithChildren({
  title,
  body,
  children
}) {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2">{body}</Typography>
      </CardContent>
      <CardActions>
      {children}
      
      </CardActions>
    </Card>
  );
}
