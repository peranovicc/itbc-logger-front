import axios from "axios"
import { useState } from "react"
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, TextField } from "@mui/material"
import Box from "@mui/material/Box";



export const CreateLog = () => {
    const [message, setMessage] = useState()
    const [logType, setLogType] = useState()

    const createLog = async () => {
        console.log('teest')
        console.log(message, logType)
        if(validateForm()){
            const resp = await axios.post('', {  })

        }
    }

    const validateForm = () => {
        if(message.length < 3)
            return false
        return true
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            rowGap="50px"
        >
            <h1 className="form-header">Create log</h1>
            <FormControl>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="left"
                flexDirection="column"
                rowGap="10px"
            >
                <TextField id="standard-basic" label="Message..." variant="outlined" onChange={e => setMessage(e.target.value)} required />
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="info"
                    name="radio-buttons-group"
                    row
                    onChange={e => setLogType(e.target.value)}
                >
                    <FormControlLabel value="info" control={<Radio />} label="Info" />
                    <FormControlLabel value="warning" control={<Radio />} label="Warning" />
                    <FormControlLabel value="error" control={<Radio />} label="Error" />
                </RadioGroup>
                <Button onClick={createLog} variant="contained">Create</Button>
            </Box>
            </FormControl>
        </Box>  
    )
}