import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';



function Kakao() {
    const [distance,setDistance] = useState('');
    const handleChange= (event)=> {
        setDistance(event.target.value);
    }
    return (
        <Box sx={{margin:"10px"}}>
            <FormControl sx={{m:1, minWidth:120}}>
                <InputLabel id="demo-simple-select-helper-label">거리 선택</InputLabel>
                <Select
                    labelId='demo-simple-select-helper-label'
                    id='demo-dimple-select-helper'
                    value={distance}
                    label="거리"
                    onChange={handleChange}
                >
                    <MenuItem value={300}>300m</MenuItem>
                    <MenuItem value={500}>500m</MenuItem>
                    <MenuItem value={1000}>1km</MenuItem>
                </Select>
                <FormHelperText>거리를 설정해주세요</FormHelperText>
            </FormControl>
        </Box>
    );
}
export default Kakao;