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
    //드롭다운 값이 변경될 때 호출되는 이벤트 핸들러
    const handleChange = (event)=> {
        //선택된 값을 상태에 업데이트
        setDistance(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Selected distance: ",distance);
    };
        
    return (
        <Box sx={{margin:"10px"}}>
            <FormControl 
                sx={{m:1, minWidth:120}}
                onSubmit={handleSubmit}
            >
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
                            value={`${region.id}`}
                        >{`${region.name}`}</MenuItem>
                    ))}
                </Select>
                <FormHelperText>지역을 설정해주세요</FormHelperText>
            </FormControl>
            <Button 
                sx={{mt:"20px"}}
                variant='outlined'
                size="small" 
                endIcon={<SendIcon />}
                type="submit"
                onClick={handleSubmit}
            >
                Send
            </Button>
            
        </Box>
        
    );
}
export default Kakao;