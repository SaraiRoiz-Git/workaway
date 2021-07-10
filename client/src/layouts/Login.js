import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as action from 'redux/actions/actions';
import { Modal } from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [displayModal, setmodalDisplay] = useState(false)

  // const state = useSelector(state => state);
  // useEffect(() => { console.log("state", state) }, [state]);

  const submitLogin = async (event) => {
    // console.log(email, password)


    axios.post('http://localhost:3000/api/user/login', { email, password }, { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }).then((response) => {
      if (response) {
        if (response.status == 200) {
          dispatch(action.onLogin(response.data))
          window.location.href = '/admin'
        } else
          setmodalDisplay(true);
      }
    })
      .catch(function (response) {
        setmodalDisplay(true);
      })
  }

  const handleClose = () => {
    setmodalDisplay(false)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">CD
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            name="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />

          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Modal show={displayModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Email or Password is incorrect</p>
        </Modal.Body>
      </Modal>

    </Container>
  );
}