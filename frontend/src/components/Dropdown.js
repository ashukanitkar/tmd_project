import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
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
        curr_user_index: this.props.index,
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
      console.log(this.state.curr_user_index)
      return (
        <FormControl className={classes.formControl}>
        <Select
          onChange={this.handleChange}
          value={this.state.curr_user_index}
        >  
        <MenuItem value={0}>User {this.state.curr_column*2 + 1}</MenuItem>
        <MenuItem value={1}>User {this.state.curr_column*2 + 2}</MenuItem>

        </Select>
      </FormControl>
    )
  }

}

export default withStyles(styles, { withTheme: true })(Dropdown);
