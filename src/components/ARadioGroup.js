import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useState } from 'react';
import { FormControl } from '@mui/material';

export default function ARadioGroup({ data }) {
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    };
    return (
        <div className='p-4 '>
            <FormControl>
                <RadioGroup name="use-radio-group" onChange={handleChange}>
                    {data.map(e => (
                        <FormControlLabel key={e.UID} value={e.isCorrect + " " + e.description} label={e.description} control={<Radio color='secondary' />} />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
}
