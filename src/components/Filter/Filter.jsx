import { useState } from 'react';
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    TextField,
} from '@mui/material';
import MuiSlider from '../MuiSlider.jsx/MuiSlider';
import './Filter.css';

function Filter({ setFilter }) {
    // category checkboxes State
    const [consolesChecked, setConsolesChecked] = useState(false);
    const [gamesChecked, setGamesChecked] = useState(false);
    const [accessoriesChecked, setAccessoriesChecked] = useState(false);

    // price inputs State
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(50000);

    // slider State
    const [value, setValue] = useState([0, 50000]);

    // handle min price input
    const handleMinPrice = (event) => {
        const inputValue = event.target.value;
        const minValue = inputValue
            ? parseInt(inputValue.replace(/\D/g, ''))
            : 0;
        setMinPrice(minValue);
        handleSlider(event, [minValue, maxPrice]);
    };

    // handle max price input
    const handleMaxPrice = (event) => {
        const inputValue = event.target.value;
        const maxValue = inputValue
            ? parseInt(inputValue.replace(/\D/g, ''))
            : 0;
        setMaxPrice(maxValue);
        handleSlider(event, [minPrice, maxValue]);
    };

    // handle price slider
    const handleSlider = (event, newValue) => {
        setValue(newValue);
        setMinPrice(newValue[0]);
        setMaxPrice(newValue[1]);
    };

    // handle category checkboxes
    const handleConsolesChange = (event) => {
        setConsolesChecked(event.target.checked);
    };

    const handleGamesChange = (event) => {
        setGamesChecked(event.target.checked);
    };

    const handleAccessoriesChange = (event) => {
        setAccessoriesChecked(event.target.checked);
    };

    // handle apply filter button
    const handleApply = () => {
        setFilter({
            category: {
                consoles: consolesChecked,
                games: gamesChecked,
                accessories: accessoriesChecked,
            },
            price: {
                min: minPrice,
                max: maxPrice,
            },
        });
    };

    return (
        <div>
            <div className="row filter">
                <p style={{ fontSize: '13px' }}>Price</p>
                <div className="col-12 mb-4">
                    {/* min and max price inputs */}
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Min"
                                value={minPrice}
                                onChange={handleMinPrice}
                                fullWidth
                                inputProps={{
                                    style: {
                                        color: 'white',
                                        height: '30px',
                                        fontSize: '12px',
                                        fontFamily: 'var( --font-family)',
                                    },
                                }}
                                InputLabelProps={{ style: { color: 'white' } }}
                                sx={{
                                    color: 'white',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#858585',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        height: '36px',
                                    },
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                label="Max"
                                value={maxPrice}
                                onChange={handleMaxPrice}
                                fullWidth
                                inputProps={{
                                    style: {
                                        color: 'white',
                                        height: '30px',
                                        fontSize: '12px',
                                        fontFamily: 'var( --font-family)',
                                    },
                                }}
                                InputLabelProps={{ style: { color: 'white' } }}
                                sx={{
                                    color: 'white',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#858585',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        height: '36px',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                    {/* the mui slider */}
                    <div className="col-12">
                        <MuiSlider value={value} handleChange={handleSlider} />
                    </div>
                </div>

                <p style={{ fontSize: '13px', marginBottom: '10px' }}>
                    Category
                </p>
                {/* category checkboxes */}
                <div className="row">
                    <FormGroup>
                        <div className="row category">
                            <div className="col-12">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    color: '#858585',
                                                    fontSize: '20px',
                                                },
                                            }}
                                            checked={consolesChecked}
                                            onChange={handleConsolesChange}
                                            inputProps={{
                                                'aria-label': 'controlled',
                                            }}
                                        />
                                    }
                                    label={
                                        <span
                                            style={{
                                                fontSize: '12px',
                                                fontFamily:
                                                    'var( --font-family)',
                                            }}
                                        >
                                            Consoles
                                        </span>
                                    }
                                />
                            </div>
                            <div className="col-12">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    color: '#858585',
                                                },
                                            }}
                                            checked={gamesChecked}
                                            onChange={handleGamesChange}
                                            inputProps={{
                                                'aria-label': 'controlled',
                                            }}
                                        />
                                    }
                                    label={
                                        <span
                                            style={{
                                                fontSize: '12px',
                                                fontFamily:
                                                    'var( --font-family)',
                                            }}
                                        >
                                            Games
                                        </span>
                                    }
                                />
                            </div>
                            <div className="col-12">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    color: '#858585',
                                                    fontSize: '20px',
                                                },
                                            }}
                                            checked={accessoriesChecked}
                                            onChange={handleAccessoriesChange}
                                            inputProps={{
                                                'aria-label': 'controlled',
                                            }}
                                        />
                                    }
                                    label={
                                        <span
                                            style={{
                                                fontSize: '11px',
                                                fontFamily:
                                                    'var( --font-family)',
                                            }}
                                        >
                                            Accessories
                                        </span>
                                    }
                                />
                            </div>
                        </div>
                    </FormGroup>
                </div>
                {/* Apply filter button */}
                <div className="row">
                    <div className="col-12 d-flex justify-content-center mt-3">
                        <button
                            onClick={handleApply}
                            className="btn w-75"
                            style={{ fontSize: '0.8rem' }}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
