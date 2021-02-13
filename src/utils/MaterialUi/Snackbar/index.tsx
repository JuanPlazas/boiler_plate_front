// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
// import { makeStyles, Theme } from '@material-ui/core/styles';

// function Alert(props: AlertProps) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export default function CustomizedSnackbars(
//   snackbarData: ISnackbarData,
//   handleCloseProps: (snackbarData: ISnackbarData) => void,
// ) {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(snackbarData.show);

//   const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     handleCloseProps({
//       show: false,
//       message: '',
//       type: 'success',
//     })
//     setOpen(false);
//   };

//   console.log('40  >>>>>>');
//   return (
//     <div className={classes.root}>
//       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity={snackbarData.type}>
//           {snackbarData.message}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// }


import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IProps {
  snackbarData: ISnackbarData,
  handleClose: (snackbarData: ISnackbarData) => void
}

class SnackbarComponent extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(event?: React.SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }

    const { message, type } = this.props.snackbarData
    this.props.handleClose({
      show: false,
      message,
      type,
    })
  }

  render() {
    console.log('25 this.props.snackbarData >>>>>>', this.props.snackbarData);
    const { show, message, type } = this.props.snackbarData
    return (
      <Snackbar open={show} autoHideDuration={6000} onClose={this.handleClose}>
        <MuiAlert onClose={this.handleClose} severity={type}>
          {message}
        </MuiAlert>
      </Snackbar>
    )
  }
}

export default SnackbarComponent;
