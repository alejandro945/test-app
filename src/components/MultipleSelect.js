import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function MultipleSelect({ data, name, handleChange }) {
  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={data}
      getOptionLabel={(option) => (option.iscorrect!=null) ? option.description + ' - ' + option.iscorrect : option.description + ' - ' + option.percentage}
      filterSelectedOptions
      onChange={(event, value) => (handleChange({ target: { name, value: value } }))}
      renderInput={(params) => (
        <TextField
          {...params}
          label={name}
        />
      )}
    />
  );
}


