import Form from "../components/Form";

const Login = (props) => {
  return (
    <div>
      <Form setIsLoggedIn={props.setIsLoggedIn}/>
    </div>
  );
};

export default Login;
