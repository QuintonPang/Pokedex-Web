import React from "react";
import { Button,Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Appreciation =()=>{

	const history = useHistory();


	return (

		<>

			<center><Typography style={{margin:"50px"}}variant="h3">
				Thanks for your support!
				Hope you have a great day!

			</Typography></center>



			<center>
				<img height="400px" width="400px" alt="quinton" src={process.env.PUBLIC_URL+"/quinton.jpg"} />
			</center>

			<center>
				<Button variant="outlined" style={{margin:"50px"}} onClick={()=>history.push("/")}> Back To Home Page </Button>

			</center>
		</>
	);



};

export default Appreciation;
