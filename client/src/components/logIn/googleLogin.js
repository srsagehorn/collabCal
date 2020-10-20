import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import API from '../../utils/API';
import { useHistory } from 'react-router-dom'
import { useUserContext } from '../firebase/userContext'

// import firebaseConfig from '../firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const auth = firebase.auth();

const useStyles = makeStyles((theme) => ({
  image: {
    
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "#0d1821",
    color: "white"
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    color: "white"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: " #6e8894",
    border: '1px solid black',
    borderRadius: 10
  },
  label: {
    color: "white"
  },
  textfield: {
    borderRadius: .25,
    color: "white"
  },
  logo: {
    height: "40vh",
    marginBottom: "100px"
  }
}));


export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main"  className={classes.image}>
      <Grid item xs={false} sm={4} md={15}/>
      <Grid component={Paper} square>
        <div className={classes.paper}>
        <img className={classes.logo} alt = "logo" src="images/collabcal.png" />
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField 
              className={classes.textfield}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            <TextField
              margin="normal"
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
          <h5>OR</h5>
          <section>
          <button
              className={classes.submit}
            >
              <SignIn />
            </button>
            </section>
        </div>
      </Grid>
    </Grid>
  );
}


{/* var user = firebase.auth().currentUser; */}


function SignIn() {
  const [user] = useUserContext()
  const history = useHistory()
  if (user) history.push("/calendar")
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }

//    auth.signInWithPopup(provider)
//   .then(user => {
//      try {
//        console.log(user)
//        let newUser = {displayname: user.user.displayName, email: user.user.email, uid: user.user.uid}
//        console.log(newUser)
//        API.createUser(newUser).then(results => {
//          console.log(results)})
       // const response = axios.post('/api/users', { email: user.user.uid });
        // console.log(':point_right: Returned data:', response);
  //    } 
  //    catch (e) {
 //       console.log(`:scream: Axios request failed: ${e}`);
 //     }
  //    // axios.post('/api/users', { email: user.user.uid })
      // console.log(user.user.uid)
 //     history.push("/calendar")})
  //  }
  return (
    <>
    <img src="https://img.icons8.com/color/24/000000/google-logo.png"/>
      <Button className="sign-in g-signin2" onClick={signInWithGoogle}>Sign in with Google</Button>
    </>
  )
}