import React from "react";
import { Card,
	 CardActionArea,
	 CardActions,
	CardMedia,
	CardContent,
	Typography,
	Grid,
	Button,

} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({


	root: {

		maxWidth: 345,
	


	},

	mobile:{

		width:"100vw",


	},


	media:{ 



		height: 140,


	},

});


function copy(name) {
	  /* Get the text field */
	  var copyText = name;

	  /* Select the text field */
	 // copyText.select();
	 // copyText.setSelectionRange(0, 99999); /* For mobile devices */

	   /* Copy the text inside the text field */
	  navigator.clipboard.writeText(copyText);

	  /* Alert the copied text */
	  alert("Copied the text: " + copyText);
}


const PokemonCard =(props)=>{

	const history = useHistory();

	const classes = useStyles();

	/*
	const { name,url } = props;
	const ls = url.split('/');


	// gets the id from url
	const id = ls[ls.length-2];*/

	const { id,name,sprite } = props;

	return(


				
			
		<Grid item xs={12} sm={4}>
		<Card className={window.innerWidth<=960?(classes.mobile):(classes.root)}>

			<CardActionArea>

		{/*<CardMedia className={classes.media} image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+id+".png"} title={name} />*/}

				<CardMedia className={classes.media} image={sprite} title={name} /> 



				<CardContent>

					<Typography className="CopyItem"  gutterBottom variant="h5" component="h2">{name.charAt(0).toUpperCase()+name.slice(1)}

					</Typography> 


					<Typography variant="body2" color="textSecondary" component="p"> #{id}

					</Typography>


				</CardContent> 

			</CardActionArea> 

			<CardActions>

			<Button onClick={()=>history.push(`/pokemon/${id}`)}size="small" color="primary"> Check Details </Button>

			<Button onClick={()=>copy(name)} size="small" color="primary"> Share </Button> 

			</CardActions>



		</Card>

		</Grid>

	);




};

export default PokemonCard;
