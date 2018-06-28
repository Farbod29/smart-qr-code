import React, {Component} from 'react';
import Header from "../Header/Header";
import Card from "@material-ui/core/es/Card/Card";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import ImgTest from '../../images/img_avatar.png';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import {getLinkPreviewData} from "../../utils/Connection";


class ReferenceCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            previewLinkData: "",
            isUrlDataFetched: false,
            title: "",
            disc: "",
            imgURL: "",
            url: "",
        };
    }


    getLinkPreviewData(url) {
        getLinkPreviewData(url).then((response) => {
            console.log("return from connection function: " + response.title);
            this.setState({
                previewLinkData: response,
                title: response.title,
                disc: response.description,
                imgURL: response.image,
                url: response.url,
                isUrlDataFetched: true,
            });
        });
    }

    componentDidMount() {
        this.getLinkPreviewData("https://www.youtube.com/watch?v=ul4z6sLnXYY");
    }

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

                {this.state.isUrlDataFetched ? (
                    <Card style={card} className="m-5">
                        <CardMedia
                            style={media}
                            image={this.state.imgURL}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <a href={this.state.url} target="_blank">
                                <Typography gutterBottom variant="headline" component="h2">
                                    {this.state.title}
                                </Typography>
                            </a>
                            <Typography component="p">
                                {this.state.disc}
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
                ) : (
                    <div>
                        <br/><br/><br/><br/><br/><br/><br/><br/>

                        <label>loading . . . </label>
                    </div>
                )}


            </div>
        );
    }
}

export default ReferenceCard;
