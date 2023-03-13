/* eslint-disable no-redeclare */
import React, { useEffect, useState } from 'react'
import starwars from '../api/starWars'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { TextField, Button, InputLabel, MenuItem, FormControl, Select } from "@mui/material"

const Planets = () => {

    const [responseData, setResponseData] = useState([])
    const [searchQuery, setQuery] = useState('')
    const [sortQuery, setSortQuery] = useState('')

    const searchFunction = (query) => {
        console.log("SEARCH FUNCTION QUERY: ", query)
        const lowerCaseQuery = query.toLowerCase()
        starwars.getPlanets().then(response => {
            const filteredResponse = response.filter(planet => Object.values(planet).toString().toLowerCase().includes(lowerCaseQuery))
            console.log("FILTERED RESPONSE: ", filteredResponse)
            setResponseData(filteredResponse)
            // return filteredResponse
        })
    }

    const onSearch = async (e) => {
        e.preventDefault()
        console.log("SEARCH TRIGGERED. SEARCHQUERY: ", searchQuery)
        searchFunction(searchQuery)
        // setResponseData(newData)


    }

    const sortFunction = (query) => {
        console.log("SORT FUNCTION QUERY: ", query)
        starwars.getPlanets().then(response => {
            switch (query) {
                case 'name':
                    var sortedResponse = response.sort((a, b) => a.name.localeCompare(b.name))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'rotation_period':
                    var sortedResponse = response.sort((a, b) => parseInt(a.rotation_period) - parseInt(b.rotation_period))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'orbital_period':
                    var sortedResponse = response.sort((a, b) => parseInt(a.orbital_period) - parseInt(b.orbital_period))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'diameter':
                    var sortedResponse = response.sort((a, b) => parseInt(a.diameter) - parseInt(b.diameter))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'climate':
                    var sortedResponse = response.sort((a, b) => a.climate.localeCompare(b.climate))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'gravity':
                    var sortedResponse = response.sort((a, b) => parseInt(a.gravity) - parseInt(b.gravity))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'terrain':
                    var sortedResponse = response.sort((a, b) => a.terrain.localeCompare(b.terrain))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'passengers':
                    var sortedResponse = response.sort((a, b) => parseInt(a.passengers) - parseInt(b.passengers))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'surface_water':
                    var sortedResponse = response.sort((a, b) => parseInt(a.surface_water) - parseInt(b.surface_water))
                    console.log("SORTED RESPONSE: ", sortedResponse)
                    setResponseData(sortedResponse)
                    break
                case 'population':
                    var sortedResponse = response.sort((a, b) => parseInt(a.population) - parseInt(b.population))
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
        starwars.getPlanets().then(response => {
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
        <MenuItem value={'rotation_period'}>Rotation Period</MenuItem>
        <MenuItem value={'orbital_period'}>Orbital Period</MenuItem>
        <MenuItem value={'diameter'}>Diameter</MenuItem>
        <MenuItem value={'climate'}>Climate</MenuItem>
        <MenuItem value={'gravity'}>Gravity</MenuItem>
        <MenuItem value={'terrain'}>Terrain</MenuItem>
        <MenuItem value={'surface_water'}>Surface Water</MenuItem>
        <MenuItem value={'population'}>Population</MenuItem>
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
                {responseData.map((planet) => (
                    <Grid item xs={12} md={4} key={planet.name}>
                        <Card sx={{
                            padding: '2%',
                            textAlign: 'left',
                            lineHeight: 1.6
                        }}
                            raised={true}>
                            <CardHeader
                                title={planet.name}
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
                                <div>Rotational Period: {planet.rotation_period} Standard Days</div>
                                <div>Orbital Period: {planet.orbital_period} Standard Years</div>
                                <div>Diameter: {planet.diameter} km</div>
                                <div>Climate: {planet.climate}</div>
                                <div>Terrain: {planet.terrain}</div>
                                <div>Surface Water: {planet.surface_water} 1 Standard Units</div>
                                <div>Population: {planet.population}</div>
                            </Box>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}


export default Planets