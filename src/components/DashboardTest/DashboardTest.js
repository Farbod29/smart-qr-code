import React, {Component} from 'react';
import Header from "../Header/Header";
import Card from "@material-ui/core/es/Card/Card";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import ImgTest from '../../images/img_avatar.png';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import * as LinkPreview from "react-native-link-preview";


class DashboardTest extends Component {

    render() {
        const card = {
            maxWidth: 345,
        };
        const media = {
            height: 0,
            paddingTop: '56.25%', // 16:9
        };

        return (
            <div className="App">

                <Header/>

                <Card style={card} className="m-5">
                    <CardMedia
                        style={media}
                        image={ImgTest}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Lizard
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    {/*icons from: https://fontawesome.com/icons*/}
                    <CardActions>
                        <IconButton aria-label="Add to favorites">
                            <i className="fas fa-angle-double-up text-dark"/>
                        </IconButton>
                        <label>7</label>
                        <IconButton aria-label="Add to favorites">
                            <i className="fas fa-angle-double-down text-black-50"/>
                        </IconButton>

                        <IconButton
                            className="ml-auto">
                            <i className="fab fa-youtube"/>
                        </IconButton>

                    </CardActions>
                </Card>

            </div>
        );
    }
}

export default DashboardTest;
