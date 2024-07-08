import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Tags</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="life" control={<Radio />} label="Life" />
        <FormControlLabel value="travel" control={<Radio />} label="Travel" />
        <FormControlLabel value="food" control={<Radio />} label="Food" />
        <FormControlLabel value="friends" control={<Radio />} label="Friends" />
        <FormControlLabel value="relationship" control={<Radio />} label="Relationship" />
      </RadioGroup>
    </FormControl>
  );
}
