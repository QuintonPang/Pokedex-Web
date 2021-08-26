import React from"react";
import {  Facebook, Instagram, YouTube, Twitter, LinkedIn } from "@material-ui/icons" 
import { 
	Grid,
	Typography,
	TextField,
	Link,
	IconButton,
	Button

} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Footer =() =>{

	const useStyles=makeStyles(theme=>({



		container:{

			backgroundColor: "red",
			color : "white",
			marginTop:"150px",
			padding:"50px",


		},

	}));


	const classes = useStyles();




	return(


		<Grid container direction="column" alignItems="center" justifyContent="center"  className={classes.container}>

		

			<Grid item xs={2}/>
			<Grid container direction="column" alignItems="center" justifyContent="center" item xs={8}>

				<Grid item>

				<Typography variant="h5">

					
					Subscribe to our newsletter for latest info!
				</Typography>

				</Grid>

				<Grid item>
				<Typography>

					You can unsubscribe at anytime

				</Typography>


				</Grid>

				<Grid item>
				
				<TextField style={{backgroundColor:"white"}}variant="outlined">

					<form>
						<input 

							className="footer-input"
							type="email"
							name="email"
							placeHolder="Enter your email here"
						/>
					<button >Susbcribe</button>

					</form>

				</TextField>

				</Grid>
				
				<Grid item>

				<Button onClick={()=>{alert("Not available at the moment. Sorry for the incovenience caused.")}} style={{margin:"10px"}} color="inherit" variant="outlined"> Subscribe </Button>
		

				</Grid>

			




			</Grid>

			<Grid item xs={2}/>


			<Grid container item justifyContent="center" alignItems="center">


		

					<Grid container item direction="column" alignItems="center">


						<h2>About Us</h2>
						<Link href="/" color="inherit"> How it works</Link>
						<Link href="/" color="inherit">Testimonials</Link>
						<Link href="/" color="inherit">Careers</Link>

						<Link href="/" color="inherit">Investors</Link>
						<Link href="/" color="inherit">Terms of Service</Link>						

					</Grid>

					<Grid container item direction="column" alignItems="center"> 
						<h2>Contact Us</h2>		


						<Link href="/" color="inherit">Contact</Link> 
						<Link href="/" color="inherit">Support</Link>
						<Link href="/" color="inherit">Destinations</Link>

						<Link href="/" color="inherit">Sponsorships</Link>			

					</Grid>

						
					
				<Grid container item direction="column" alignItems="center"> 

					<Grid container item direction="column" alignItems="center">
						<h2>Videos</h2>
						<Link href="/" color="inherit">Submit Video</Link>
						<Link href="/" color="inherit">Ambassadors</Link> 
						<Link href="/" color="inherit">Agency</Link> 
						<Link href="/" color="inherit">Influencer</Link>
					</Grid>

					<Grid container item direction="column" alignItems="center">						
							<h2>Social Media</h2> 
							<Link href="https://instagram.com/quintonpyx?utm_medium=copy_link" color="inherit">Instagram</Link>

							 <Link href="https://www.facebook.com/quintonpang.yixuan.5" color="inherit">Facebook</Link>
							 <Link href="/" color="inherit">Youtube</Link> 
						   	<Link href="/" color="inherit">Twitter</Link> 

					</Grid>
					
				</Grid>

			</Grid>


			<Grid container item direction="column" alignItems="center">



	

		

		

				
				<small style={{margin:"30px"}}>QP POKEDEX © 2021 </small>

				<Grid item container justifyContent="center">

				<IconButton color="inherit">

					<Link href='https://www.facebook.com/quintonpang.yixuan.5'  aria-label='Facebook' >


					<Facebook />

					</Link>

				</IconButton>
				<IconButton color="inherit">

					<Link href='https://instagram.com/quintonpyx?utm_medium=copy_link'  aria-label='Instagram' >

					<Instagram />

					</Link> 

				</IconButton>
				<IconButton color="inherit">

					<Link href=""  aria-label='Youtube' >			
					<YouTube />

					</Link>

				</IconButton>
				<IconButton color="primary">

					<Link  href="" aria-label='Twitter' >

					<Twitter/>

					</Link>
				</IconButton>


				<IconButton color="inherit">
					<Link href=""  aria-label='LinkedIn' > 
					<LinkedIn />

					</Link>


				</IconButton>

				</Grid>


				

			</Grid>

		
			
		</Grid>




	);


}


export default Footer;
