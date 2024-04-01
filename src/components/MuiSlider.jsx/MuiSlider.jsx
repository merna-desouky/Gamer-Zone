import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `$${value}`;
}

export default function MuiSlider({ value, handleChange }) {
    return (
        <Box>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                sx={{
                    color: 'white',
                    '& .MuiSlider-thumb': {
                        width: 11,
                        height: 11,
                    },
                }}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={100000}
                step={1}
            />
        </Box>
    );
}
