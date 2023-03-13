/* eslint-disable no-redeclare */
import React, { useEffect, useState } from 'react'
import starwars from '../api/starWars'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { TextField, Button, InputLabel, MenuItem, FormControl, Select } from "@mui/material"

const People = () => {

    const [responseData, setResponseData] = useState([])
    const [searchQuery, setQuery] = useState('')
    const [sortQuery, setSortQuery] = useState('')

    const searchFunction = (query) => {
        console.log("SEARCH FUNCTION QUERY: ", query)
        const lowerCaseQuery = query.toLowerCase()
        starwars.getPeople().then(response => {
            const filteredResponse = response.filter(person => Object.values(person).toString().toLowerCase().includes(lowerCaseQuery))
            console.log("FILTERED RESPONSE: ", filteredResponse)
            setResponseData(filteredResponse)
            // return filteredResponse
        })
    }

    const onSearch = (e) => {
        e.preventDefault()
        console.log("SEARCH TRIGGERED. SEARCHQUERY: ", searchQuery)
        searchFunction(searchQuery)
        // setResponseData(newData)


    }

    const deleteFunction = (data) => {
        
    }

    const onDelete = (e) => {

    }

    const sortFunction = (query) => {
        console.log("SORT FUNCTION QUERY: ", query)
        starwars.getPeople().then(response => {
            switch (query) {
                case 'name':
                    var sortedResponse = response.sort((a, b) => a.name.localeCompare(b.name))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'height':
                    var sortedResponse = response.sort((a, b) => parseInt(a.height) - parseInt(b.height))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'mass':
                    var sortedResponse = response.sort((a, b) => parseInt(a.mass) - parseInt(b.mass))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'hair_color':
                    var sortedResponse = response.sort((a, b) => a.hair_color.localeCompare(b.hair_color))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'skin_color':
                    var sortedResponse = response.sort((a, b) => a.skin_color.localeCompare(b.skin_color))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'eye_color':
                    var sortedResponse = response.sort((a, b) => a.eye_color.localeCompare(b.eye_color))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'birth_year':
                    var sortedResponse = response.sort((a, b) => parseInt(a.birth_year) - parseInt(b.birth_year))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'gender':
                    var sortedResponse = response.sort((a, b) => a.gender.localeCompare(b.gender))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                default:
                    break
            }

        })
    }

    const onSort = (e) => {
        e.preventDefault()
        console.log("SORT TRIGGERED. SORTQUERY: ", sortQuery)
        sortFunction(sortQuery)
    }

    useEffect(() => {
        starwars.getPeople().then(response => {
            setResponseData(response)
            console.log(responseData)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
                <form onSubmit={onSearch}
                    sx={{
                        backgroundColor: 'white'
                    }}
                >
                    <TextField
                        // InputProps={{
                        //     endAdornment: (
                        //         <InputAdornment position={'end'}>
                        //             <Button
                        //                 color="inherit"
                        //                 className="btn"
                        //                 onClick={onSearch}

                        //             >
                        //                 <SearchIcon />
                        //             </Button>
                        //         </InputAdornment>
                        //     )
                        // }}
                        sx={{
                            input: {
                                color: 'white'
                            }
                        }}
                        InputLabelProps={{
                            style: { color: 'white' },
                        }}
                        id="search"
                        label="search (click here)"
                        variant="filled"
                        value={searchQuery}
                        onChange={(e) => setQuery(e.target.value)}

                    />
            </form>
            <form onSubmit={onSort}>

<FormControl fullWidth>
    {/* 
    <Grid container>
        <Grid item xs={12} md={9}> */}
    <InputLabel id="sort" sx={{ color: 'white' }}>Sort (click here)</InputLabel>
    <Select
        sx={{
            input: {
                color: 'white'
            },
            color: 'white'
        }}
        // InputLabelProps={{
        //     style: { color: 'white' },
        // }}
        labelId="sort"
        id="sort"
        value={sortQuery}
        label="Sort"
        onChange={
            (e) => {
                setSortQuery(e.target.value)
            }
        }
    >
        <MenuItem value={'name'}>Name</MenuItem>
        <MenuItem value={'height'}>Height</MenuItem>
        <MenuItem value={'mass'}>Mass</MenuItem>
        <MenuItem value={'hair_color'}>Hair Color</MenuItem>
        <MenuItem value={'skin_color'}>Skin Color</MenuItem>
        <MenuItem value={'eye_color'}>Eye Color</MenuItem>
        <MenuItem value={'birth_year'}>Birth Year</MenuItem>
        <MenuItem value={'gender'}>Gender</MenuItem>
    </Select>
    {/* </Grid> */}
    {/* <Grid item xs={12} md={3}> */}
    <Button type="submit"
        variant="outlined"
        sx={{
            backgroundColor: 'transparent',
            color: 'white',
            borderColor: 'white',
            marginLeft: '10%',
            marginRight: '10%'
        }}
    >
        Submit Sort Request
    </Button>
    {/* </Grid> */}
    {/* </Grid> */}
</FormControl>
</form>
            <Grid container spacing={2}
                sx={{
                    padding: '1%'
                }}>
                {responseData.map((person, index) => (
                    <Grid item xs={12} md={4} key={responseData[index]}>
                        <Card sx={{
                            padding: '2%',
                            textAlign: 'left',
                            lineHeight: 1.6
                        }}
                            raised={true}>
                            <CardHeader
                                title={person.name}
                                titleTypographyProps={{ variant: 'h4' }}
                                sx={{
                                    textAlign: 'center'
                                }}
                            />
                            <Divider variant="middle" />
                            <br />
                            <Box
                                sx={{
                                    padding: "1%",
                                    border: "solid lightgrey",
                                    borderRadius: "3px"
                                }}
                            >
                                <button onClick={onDelete}>x</button>
                                <div>Height: {person.height} cm</div>
                                <div>Mass: {person.mass} kg</div>
                                <div>Hair Color: {person.hair_color}</div>
                                <div>Skin Color: {person.skin_color}</div>
                                <div>Eye Color: {person.eye_color}</div>
                                <div>Birth Year: {person.birth_year}</div>
                                <div>Gender: {person.gender}</div>
                            </Box>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}

export default People
    // <ul>
    //             {responseData.map((person) => (
    //                 <li>{person.name}</li>
    //             ))}
    //             </ul>