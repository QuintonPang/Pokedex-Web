import React, { useEffect, useState }from "react";
import axios from "axios";
import { AppBar, 
	Toolbar, 
	useScrollTrigger, 
	Slide,
	Typography,
	IconButton,
	Grid,
	TextField,
	Drawer,
	Divider,
	List,
	ListItem,
	Box,
	Link

	} from "@material-ui/core";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import  MenuIcon from "@material-ui/icons/Menu";
import Search from "@material-ui/icons/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, fade, } from"@material-ui/core/styles";
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import CloseIcon from '@material-ui/icons/Close';
import PokemonCard from "./PokemonCard";


const drawerWidth= 240;

//const PokemonList = require("./PokemonList.json");


function HideOnScroll(props) {




	const { children, window } = props;

	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.

	
	
	const trigger = useScrollTrigger({ 

		target: window ? window() : undefined 


	}); return ( 

		<Slide appear={false} direction="down" in={!trigger}>

		{children} 


		</Slide> 


	); 

} 


const useStyles = makeStyles(theme=>({


	Navbar:{


		backgroundColor:"red",
		
		


	},

	SearchContainer:{


		// fading white from material ui's theem


		backgroundColor:fade(theme.palette.common.white,0.2),
		padding:"5px",
		
	},

	Input:{





		marginBottom:"6px",
		 marginTop:"-5px",

	},

	hide: { 

		display: 'none',


	}, 


	drawer: { 

		width: drawerWidth, 

		flexShrink: 0,

	}, 

	drawerPaper: { 


		width: drawerWidth, 



	},

	drawerHeader: { 


		display: 'flex',
		alignItems: 'center', 
		padding: theme.spacing(0, 1),

		// necessary for content to be below app bar 
		...theme.mixins.toolbar,

		justifyContent:'center',

	 


	},


}));



const Pokedex =(props) =>{


	const history = useHistory();


	const [PokemonData, setPokemonData] = useState({});
	const [finish,setFinish]=useState(false);
	const [filter,setFilter] = useState("");
	const [state, setState] = useState(false);


	const handleSearchChange = (e)=>{

			setFilter(e.target.value.toLowerCase());



	};

	const handleDrawerOpen = () => { 

		setState(true); 


	};

	const handleDrawerClose = () => {


		setState(false); 


	}; 


	useEffect(()=>{
		axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118")



		.then(function(response){
					                                                                            
		const NewPokemonData={};

		
		 const {data} = response;
		/* inside the data there's an array named 'results'*/
		
		const {results} = data;
		 /* for each method has a second parameter which is index*/
				

		results.forEach((result,index)=>{


			NewPokemonData[index+1]={


				id:index+1,
				name:result.name,
				sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index+1) + ".png",
			};

		});


		setPokemonData(NewPokemonData);
		setFinish(true);

		

					                                                                                                });

	},[]);


	const classes=useStyles();


	return(

		<>

		

		<Grid container direction="column">
		
	

		<Grid item style={{marginBottom:"150px"}}>

		<HideOnScroll {...props}>


			<AppBar className={classes.Navbar} >


				<Toolbar>

					<IconButton color="inherit" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, state && classes.hide)} >
						<MenuIcon/>

					</IconButton>


					<Typography>

						QP Pokedex
				
					</Typography>

					<IconButton>

						<CollectionsBookmarkIcon style={{color:"white"}}/>


					</IconButton>


					<div className={classes.SearchContainer}>
					<IconButton>

						<Search/>

					</IconButton>

					<TextField className={classes.Input} variant="standard" label="Search" onChange={handleSearchChange}/>

					</div>


				</Toolbar>
			</AppBar>
		</HideOnScroll>


		</Grid>

		<Drawer className={classes.drawer} variant="persistent" anchor="left" open={state} classes={{ paper: classes.drawerPaper, }} > 


			<Box display="flex" className={classes.drawerHeader}> 



				<Box style={{width:"150%"}}>
				
				<Typography >


		                          QP Pokedex
		                </Typography>

				</Box>

				<Box flexShrink={0}>

				<IconButton onClick={handleDrawerClose}>

					 <CloseIcon/> 

						


				</IconButton>

				</Box>


			</Box> 


			<Divider /> 


			<List> 
				
				<ListItem>


					<Typography>
						
						<Link href="https://github.com/QuintonPang/" color="inherit">

						About Creator

						</Link>

					</Typography>
				</ListItem>

				<ListItem>

					<Typography>


		                        	 <Link onClick={()=>history.push("/appreciation")} color="inherit">

		                                                Appreciation

		                                                </Link>
		                 
					</Typography>
				




				</ListItem>


			</List> 



		</Drawer>

	
		

		<Grid container item>

			<Grid item xs={0} sm={2}/>



		{finish===true?(<Grid container item spacing={3} xs={12} sm={8}>




					{Object.values(PokemonData).map(Pokemon=>{


					/*	console.log(Pokemon["name"].includes(filter));*/
						
						return( 
							<>

							{Pokemon["name"].includes(filter)&&(<PokemonCard {...Pokemon}/>)}


						</>
						);



							 
											


						 
						
									



					 
					})
				


					}
			</Grid>):(

				<Grid container item justifyContent="center" alignItems="stretch" >

					<Grid style={{marginTop:"20%"}} item>	
						<CircularProgress size={100}/>

					</Grid>
				</Grid>

			)}

			<Grid item xs={0} sm={2}/>

		</Grid>


		</Grid>
		


		</>

	);

};

export default Pokedex;
