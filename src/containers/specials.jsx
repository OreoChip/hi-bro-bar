import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PubSub from 'pubsub-js';
import Snackbar from '@material-ui/core/Snackbar';
import * as emailjs from 'emailjs-com';

export default class Specials extends React.Component {
  state = {
    open: false,
    email: '',
    name: '',
    snackMessage: '',
    snackOpen: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  componentDidMount() {
    this.openModal = PubSub.subscribe('openSpecials', () => {
      this.handleClickOpen();
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.openModal);
  }

  handleSnackClose = () => {
    this.setState({ snackOpen: false });
  };

  validateForm = () => {
    let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailPattern.test(this.state.email)) {
      this.setState({
        snackMessage: 'Please enter a valid email',
        snackOpen: true
      });
      return false;
    } else if (this.state.name.length === 0) {
      this.setState({
        snackMessage: 'Name field cannot be empty',
        snackOpen: true
      });
      return false;
    }
    return true;
  };

  sendMail = () => {
    if (this.validateForm()) {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_NAME,
          process.env.REACT_APP_EMAILJS_TEMPLATEID,
          { from_name: this.state.name, email: this.state.email },
          process.env.REACT_APP_EMAILJS_USERID
        )
        .then(
          response => {
            this.setState({
              snackMessage: 'You have been successfully subscribed',
              snackOpen: true
            });
          },
          err => {
            this.setState({
              snackMessage: 'Error! Please try again after some time',
              snackOpen: true
            });
          }
        );
      this.handleClose();
    }
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Specials</DialogTitle>
          <DialogContent>
            <DialogContentText>
              No Special Offers at this time. To receive updates on new offers,
              please enter your email address here, or feel free to call us.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Your Full Name"
              type="name"
              fullWidth
              value={this.state.name}
              onChange={e => this.handleChange('name', e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              value={this.state.email}
              onChange={e => this.handleChange('email', e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.sendMail} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={this.state.snackOpen}
          onClose={this.handleSnackClose}
          autoHideDuration={3000}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">{this.state.snackMessage}</span>}
        />
      </div>
    );
  }
}
