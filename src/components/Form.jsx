import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Input from "./Input";

export default function Form(prop) {
  return (
    <Box sx={{
      margin: "64px auto 0"
    }} component= "form" noValidate autoComplete="off" maxWidth={256}>
    
    
    
      <Input label="Username" />
      <Input label="Password" type="password" />
      <Button sx={{
        marginTop: "16px",
      }} variant="contained" fullWidth onClick={() => prop.setIsLoggedIn(true)}>
        Log In
      </Button>
    </Box>
  );
}
