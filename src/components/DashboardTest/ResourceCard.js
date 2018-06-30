import React, {Component} from 'react';
import Card from "@material-ui/core/es/Card/Card";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import {parseUrlData} from "../../utils/Connection";
import NoImagePreview from '../../images/no-preview.jpg';


class ResourceCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            previewLinkData: "",
            isUrlDataFetched: false,
            title: "",
            disc: "",
            imgURL: "",
            url: props.url,
        };
    }


    parseUrl(url) {
        parseUrlData(url).then((response) => {
            console.log("return from connection function: >>> " + response);
            this.setState({
                previewLinkData: response,
                title: response.title,
                disc: response.excerpt,
                imgURL: response.lead_image_url,
                url: response.url,
                isUrlDataFetched: true,
            });
        });
    }

    componentDidMount() {
        this.parseUrl(this.state.url);
    }

    render() {
        const card = {
            width: 268,
            minHeight: 200,
            // height: 400,
        };
        const media = {
            height: 0,
            paddingTop: '56.25%', // 16:9
        };

        let finalImageURL = this.state.imgURL;

        if (finalImageURL == null) {
            finalImageURL = NoImagePreview;
        }
        return (
            <div className="m-2 col-centered">

                {this.state.isUrlDataFetched ? (
                    <div>
                        <Card style={card}>
                            <CardMedia
                                style={media}
                                image={finalImageURL}
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
                                <label>7+</label>
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
                ) : (
                    <div>
                        <Card style={card}>
                            <label>loading . . . </label>
                        </Card>
                    </div>
                )}


            </div>
        );
    }
}

export default ResourceCard;
