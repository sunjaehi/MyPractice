import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
//import Stack from '@mui/material/Stack';
import { regionResponse } from '../data/regionResponse';



function Kakao() {
    const [distance,setDistance] = useState('');
    const handleChange= (event)=> {
        setDistance(event.target.value);
    }
    return (
        <Box sx={{margin:"10px"}}>
            <FormControl sx={{m:1, minWidth:120}}>
                <InputLabel id="demo-simple-select-helper-label">검색할 지역구</InputLabel>
                <Select
                    labelId='demo-simple-select-helper-label'
                    id='demo-dimple-select-helper'
                    value={distance}
                    label="거리"
                    onChange={handleChange}
                >
                    {regionResponse.map((region)=> (
                        <MenuItem
                            id={`${region.id}`}
                        >{`${region.name}`}</MenuItem>
                    ))}
                </Select>
                <FormHelperText>지역을 설정해주세요</FormHelperText>
            </FormControl>
            <Button sx={{margin:"10px"}} variant='outlined' size="small" endIcon={<SendIcon />}>
                Send
            </Button>
        </Box>
    );
}
export default Kakao;