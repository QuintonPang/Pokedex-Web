import React, {  useEffect, useState} from "react";
import { useParams,Link,useHistory } from "react-router-dom";
import axios from "axios";
import { Paper,Grid, Typography, ImageList, ImageListItem, Button, Card, CardContent,AppBar, Toolbar} from "@material-ui/core";
import  CircularProgress  from "@material-ui/core/CircularProgress";
import { makeStyles} from "@material-ui/core/styles";

const Pokemon = () =>{

	


	const [pokemonResource,setPokemonResource] = useState();
	
	const {id} = useParams();

	useEffect(() => { axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(function (response) {


		const { data } = response; 

		setPokemonResource(data); }) 


			.catch(function (error) { 

			setPokemonResource(false);


		});


	}, [id]);


	const generatePokemonJSX = (pokemon) => {



		const { species,


			//abilities, 


			name, id, height, weight, types, sprites } = pokemon; 

		
		
		const { front_default,back_default,front_shiny, back_shiny } = sprites;

		return (

			<Grid container style={{width:"100vw"}} spacing={2} direction="column">

			<Grid item style={{marginBottom:"150px"}}>
			<AppBar position="relative" className={classes.PokeBar}>

			<Toolbar>


			<Typography variant="h1">

				#{`${id} `}

		
				{name.charAt(0).toUpperCase()+ name.slice(1)} 

			</Typography>

			</Toolbar>
			</AppBar>

			</Grid>
			<ImageList style={{maxWidth:"100vw"}} rowHeight="300">

				<ImageListItem>
					<img alt="front_default" src={front_default} />
				</ImageListItem>

				<ImageListItem>                                                    
					<img alt="back_default" src={back_default} />                                                                         
				</ImageListItem>

		
				<ImageListItem>                                                         
					<img alt ="front_shiny" src={front_shiny} />                                                                                                 
				</ImageListItem>
		
				<ImageListItem>                                                         
					<img alt="back_shiny" src={back_shiny} />                                                                                                 
				</ImageListItem>

			</ImageList>
		 	<Grid container item >	
			<Grid item xs={2}/>

			<Grid item xs={8}>
		
			<Paper variant="elevated"> 

			<Card>

			<CardContent>
			
			<Typography variant="h3">

				Pokemon Info

			</Typography>

			<Typography>

				Name <Link href={species.url}>{species.name.charAt(0).toUpperCase()+species.name.slice(1)} </Link>

			</Typography>

			<Typography>Height: {height}

			</Typography>

			<Typography>

				Weight: {weight}

			</Typography>


			<Typography variant="h6"> 

				Types:</Typography>

				{types.map((typeInfo) => {

				
					const { type } = typeInfo;					  
					const { name } = type; 

					return <Typography key={name}> 


				 		• {name.charAt(0).toUpperCase()+name.slice(1)}

						</Typography>; 
				})}


			</CardContent>

			</Card>
			</Paper>

			</Grid>

			</Grid>

			<Grid item xs={2}/>
			</Grid> 

		); 


	};

	const history = useHistory();

	const useStyles = makeStyles({
		                                                                  
		                      
		PokeBar:{
			
			width:"100vw",
			backgroundColor:"red",                     
						                       
		}                                                                                                                        
	});
	                                                                                  const classes = useStyles();


	return (

		

		<> 

		{/* before load */}


		{pokemonResource === undefined &&(

			<Grid style={{marginTop:"50%"}}container item justifyContent="center">
			<CircularProgress />

			</Grid>

		)}


		{/*  exists and load*/}


		{ pokemonResource && generatePokemonJSX(pokemonResource)} 

		{/* not found */}
		

		{pokemonResource === false &&(

			<>

			<Grid style={{marginTop:"20%"}} item container  justifyContent="center">

			<Grid item>

			<Typography> Pokemon not found</Typography>
			</Grid>

			<Grid container item justifyContent="center">

			<Grid item>

			<ImageList>

			<ImageListItem style={{width:"100px"}}>
				<img alt="not found" style={{left:"60px"}}  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"/>

			</ImageListItem>
			</ImageList>

			</Grid>

		</Grid>

		</Grid>}

		</>)}

		{/* generates button  */}


		{pokemonResource !== undefined && (

			<Grid container item justifyContent="center">

			

			<Button variant="outlined" color="primary" onClick={() =>{history.push("/")}}> 

				Back to Pokedex 




			</Button> 

		
			</Grid>


		)}


		</>


	);


};



export default Pokemon;
