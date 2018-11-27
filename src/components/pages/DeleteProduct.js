import React, { Component } from 'react';
import {   MDBView, MDBMask, MDBCardBody, MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RemoveIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class DeleteProduct extends Component {
  
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickUpdate = () => {
    this.setState({ update: true });
  };

  handleCancel = () => {
    this.setState({ update: false });
  };

  render() {

    const { classes } = this.props;

    var products =[
      {
        name : 'Banana',
        content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sitamet, consectetur, adipisci velit cupidatat proidentvoluptatem quia numquam.',
        image: 'https://images.agoramedia.com/everydayhealth/gcms/How-Many-Calories-Are-in-a-Banana-1440x810.jpg?width=722'
      },
      {
        name : 'Banana',
        content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sitamet, consectetur, adipisci velit cupidatat proidentvoluptatem quia numquam.',
        image: 'https://images.agoramedia.com/everydayhealth/gcms/How-Many-Calories-Are-in-a-Banana-1440x810.jpg?width=722'
      },
      {
        name : 'Banana',
        content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sitamet, consectetur, adipisci velit cupidatat proidentvoluptatem quia numquam.',
        image: 'https://images.agoramedia.com/everydayhealth/gcms/How-Many-Calories-Are-in-a-Banana-1440x810.jpg?width=722'
      },
      {
        name : 'Banana',
        content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sitamet, consectetur, adipisci velit cupidatat proidentvoluptatem quia numquam.',
        image: 'https://images.agoramedia.com/everydayhealth/gcms/How-Many-Calories-Are-in-a-Banana-1440x810.jpg?width=722'
      },
      {
        name : 'Banana',
        content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sitamet, consectetur, adipisci velit cupidatat proidentvoluptatem quia numquam.',
        image: 'https://images.agoramedia.com/everydayhealth/gcms/How-Many-Calories-Are-in-a-Banana-1440x810.jpg?width=722'
      },
      {
        name : 'Banana',
        content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sitamet, consectetur, adipisci velit cupidatat proidentvoluptatem quia numquam.',
        image: 'https://images.agoramedia.com/everydayhealth/gcms/How-Many-Calories-Are-in-a-Banana-1440x810.jpg?width=722'
      },
      {
        name : 'Banana',
        content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sitamet, consectetur, adipisci velit cupidatat proidentvoluptatem quia numquam.',
        image: 'https://images.agoramedia.com/everydayhealth/gcms/How-Many-Calories-Are-in-a-Banana-1440x810.jpg?width=722'
      },
      {
        name : 'Banana',
        content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sitamet, consectetur, adipisci velit cupidatat proidentvoluptatem quia numquam.',
        image: 'https://images.agoramedia.com/everydayhealth/gcms/How-Many-Calories-Are-in-a-Banana-1440x810.jpg?width=722'
      },
      {
        name : 'Banana',
        content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sitamet, consectetur, adipisci velit cupidatat proidentvoluptatem quia numquam.',
        image: 'https://images.agoramedia.com/everydayhealth/gcms/How-Many-Calories-Are-in-a-Banana-1440x810.jpg?width=722'
      },
      {
        name : 'Banana',
        content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sitamet, consectetur, adipisci velit cupidatat proidentvoluptatem quia numquam.',
        image: 'https://images.agoramedia.com/everydayhealth/gcms/How-Many-Calories-Are-in-a-Banana-1440x810.jpg?width=722'
      },
      {
        name : 'Banana',
        content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sitamet, consectetur, adipisci velit cupidatat proidentvoluptatem quia numquam.',
        image: 'https://images.agoramedia.com/everydayhealth/gcms/How-Many-Calories-Are-in-a-Banana-1440x810.jpg?width=722'
      },
      {
        name : 'Banana',
        content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sitamet, consectetur, adipisci velit cupidatat proidentvoluptatem quia numquam.',
        image: 'https://images.agoramedia.com/everydayhealth/gcms/How-Many-Calories-Are-in-a-Banana-1440x810.jpg?width=722'
      },
      {
        name : 'Banana',
        content : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sitamet, consectetur, adipisci velit cupidatat proidentvoluptatem quia numquam.',
        image: 'https://images.agoramedia.com/everydayhealth/gcms/How-Many-Calories-Are-in-a-Banana-1440x810.jpg?width=722'
      }
    ]

    return (
      <div>
      <Card style={{paddingLeft:30,paddingRight:30}}>
        <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
        All of your products
        </h2>
        <MDBRow className="d-flex justify-content-center">

          {products.map((product , index) => {
            return(
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <Card className={classes.card} style={{marginTop:20 ,marginLeft: 10}}>
                <CardHeader
                  action={
                    <IconButton onClick={this.handleClickOpen}>
                      <RemoveIcon />
                    </IconButton>
                  }
                  title={product.name}
                />
                <CardMedia
                  onClick={this.handleClickUpdate}  
                  className={classes.media}
                  image={product.image}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography component="p">
                    {product.content}
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <img style={{with:250 , height:250 ,marginBottom: 5}} src="https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a?mode=scale&q=90&h=270&w=270&background=%230078D7"
                   />
                </Collapse>
              </Card>
              </MDBCol>
            );
          })}
        </MDBRow>
      </section>
    </Card>
    <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Are you sure to delete this product?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              After deleting a product, users will not be able to see your product and any archives related to your product will be deleted.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>

        //Dialog update
        <Dialog
          fullWidth
          open={this.state.update}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update Product Information</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              id="outlined-multiline-static"
              label="Product Content"
              multiline
              rows="8"
              fullWidth
              defaultValue="Default Value"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
                            <div className="md-form mb-0">
                <div className="input-group">
                  <div className="input-group-prepend">
                  <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                      Choose image
                    </label>
                  </div>
                </div>
                </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleCancel} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
    </div>
    );
  }
}

DeleteProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteProduct);
