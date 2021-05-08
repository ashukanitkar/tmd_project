import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from "@material-ui/core/styles";



const styles = theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: "25%"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  });

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        curr_user_index: 0,
        curr_column: this.props.column
    }
  }

  childFunction = (e) => {
    e.preventDefault()
    this.props.functionCallFromParent(this.state.curr_column, e.target.value)
  }

  handleChange = (event) => {
    this.setState({"curr_user_index": event.target.value})
    this.childFunction(event)
    
  };

  render() {
      const { classes, theme } = this.props;
      return (
        <FormControl required className={classes.formControl}>
        <InputLabel>User</InputLabel>
        <Select
          onChange={this.handleChange}
          className={classes.selectEmpty}
        >  
        <MenuItem value={0}>User {this.state.curr_column*2 + 1}</MenuItem>
        <MenuItem value={1}>User {this.state.curr_column*2 + 2}</MenuItem>

        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    )
  }

}

export default withStyles(styles, { withTheme: true })(Dropdown);
