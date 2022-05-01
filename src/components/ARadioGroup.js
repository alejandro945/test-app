import * as React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { FormControl } from '@mui/material';

export default function ARadioGroup({ data, handle }) {
    return (
        <div className='p-4 '>
            <FormControl>
                <RadioGroup name="use-radio-group" onChange={handle}>
                    {data.map(e => (
                        <FormControlLabel key={e.uid} value={e.iscorrect + "-" + e.description} label={e.description} control={<Radio color='secondary' />} />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
}
