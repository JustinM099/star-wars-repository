/* eslint-disable no-redeclare */
import React, { useEffect, useState } from 'react'
import starwars from '../api/starWars'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { TextField, Button, InputLabel, MenuItem, FormControl, Select } from "@mui/material"

//SORT: sort responseData array before map? then useEffect
//SEARCH: use .filter on responseData before map? then useState
//DELETE: useState to remove card by its key?

const Starships = () => {
    const [responseData, setResponseData] = useState([])
    const [searchQuery, setQuery] = useState('')
    const [sortQuery, setSortQuery] = useState('')

    const searchFunction = (query) => {
        console.log("SEARCH FUNCTION QUERY: ", query)
        const lowerCaseQuery = query.toLowerCase()
        starwars.getStarships().then(response => {
            const filteredResponse = response.filter(starship => Object.values(starship).toString().toLowerCase().includes(lowerCaseQuery))
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

    const sortFunction = (query) => {
        console.log("SORT FUNCTION QUERY: ", query)
        starwars.getStarships().then(response => {
            switch (query) {
                case 'name':
                    var sortedResponse = response.sort((a, b) => a.name.localeCompare(b.name))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'model':
                    var sortedResponse = response.sort((a, b) => a.model.localeCompare(b.model))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'manufacturer':
                    var sortedResponse = response.sort((a, b) => a.manufacturer.localeCompare(b.manufacturer))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'cost_in_credits':
                    var sortedResponse = response.sort((a, b) => parseInt(a.cost_in_credits) - parseInt(b.cost_in_credits))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'length':
                    var sortedResponse = response.sort((a, b) => parseInt(a.length) - parseInt(b.length))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'max_atmosphering_speed':
                    var sortedResponse = response.sort((a, b) => parseInt(a.max_atmosphering_speed) - parseInt(b.max_atmosphering_speed))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'crew':
                    var sortedResponse = response.sort((a, b) => parseInt(a.crew) - parseInt(b.crew))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'passengers':
                    var sortedResponse = response.sort((a, b) => parseInt(a.passengers) - parseInt(b.passengers))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'cargo_capacity':
                    var sortedResponse = response.sort((a, b) => parseInt(a.cargo_capacity) - parseInt(b.cargo_capacity))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'consumables':
                    var sortedResponse = response.sort((a, b) => parseInt(a.consumables) - parseInt(b.consumables))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'hyperdrive_rating':
                    var sortedResponse = response.sort((a, b) => parseInt(a.hyperdrive_rating) - parseInt(b.hyperdrive_rating))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'MGLT':
                    var sortedResponse = response.sort((a, b) => parseInt(a.MGLT) - parseInt(b.MGLT))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'starship_class':
                    var sortedResponse = response.sort((a, b) => a.starship_class.localeCompare(b.starship_class))
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
        starwars.getStarships().then(response => {
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
                        },
                        width: '99vw'
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
                        <MenuItem value={'model'}>Model</MenuItem>
                        <MenuItem value={'manufacturer'}>Manufacturer</MenuItem>
                        <MenuItem value={'cost_in_credits'}>Cost In Credits</MenuItem>
                        <MenuItem value={'length'}>Length</MenuItem>
                        <MenuItem value={'max_atmosphering_speed'}>Max Atmosphering Speed</MenuItem>
                        <MenuItem value={'crew'}>Crew</MenuItem>
                        <MenuItem value={'passengers'}>Max Passengers</MenuItem>
                        <MenuItem value={'cargo_capacity'}>Cargo Capacity</MenuItem>
                        <MenuItem value={'consumables'}>Consumables</MenuItem>
                        <MenuItem value={'hyperdrive_rating'}>Hyperdrive Rating</MenuItem>
                        <MenuItem value={'MGLT'}>Megalight Per Hour</MenuItem>
                        <MenuItem value={'starship_class'}>Starship Class</MenuItem>
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
                {responseData.map((starship) => (
                    <Grid item xs={12} md={4} key={starship.name}>
                        <Card sx={{
                            padding: '2%',
                            textAlign: 'left',
                            lineHeight: 1.6
                        }}
                            raised={true}>
                            <CardHeader
                                title={starship.name}
                                titleTypographyProps={{ variant: 'h4' }}
                                subheader={starship.model}
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
                                <div>Manufacturer: {starship.manufacturer}</div>
                                <div>Cost: {starship.cost_in_credits} credits</div>
                                <div>Length: {starship.length} meters</div>
                                <div>Atmosphering Speed: {starship.max_atmosphering_speed} meters per second</div>
                                <div>Crew: {starship.crew} members</div>
                                <div>Passengers: {starship.passengers} max</div>
                                <div>Cargo Capacity: {starship.cargo_capacity} tonnes</div>
                                <div>Consumables: {starship.consumables}</div>
                                <div>Hyperdrive Rating: {starship.hyperdrive_rating}</div>
                                <div>Megalight Per Hour: {starship.MGLT}</div>
                                <div>Class: {starship.starship_class}</div>
                            </Box>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}

export default Starships