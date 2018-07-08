import React, {Component} from 'react';
import Header from "../Header/Header";
import ResourceCard from "./ResourceCard";
import Button from "@material-ui/core/es/Button/Button";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import AddLink from "../AddLink/AddLink";
import {getBoardResourcesData} from "../../utils/Connection";

class ReferencesDashboard extends Component {


    handleClickOpen = () => {
        this.setState({open: true});
    };
    handleClose = () => {
        this.setState({open: false});
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isRequesting: false,
            references: []
        };
    }

    componentDidMount() {
        this.getResources();
    }

    getResources() {
        if (this.props.match.params.id != null) {
            console.log("id >> " + this.props.match.params.id);

            this.setState({
                isRequesting: true
            });
            let initialReferences = [];
            getBoardResourcesData(this.props.match.params.id)
                .then((result) => {
                    console.log("status1: " + result);
                    if (result.status === 200) {
                        initialReferences = result.data.reference.map((m) => {
                            return m
                        });
                        this.setState({
                            isRequesting: false,
                            references: initialReferences
                        });
                        console.log("references url: >> " + initialReferences)
                    }
                    else {
                        this.setState({
                            isRequesting: false
                        });
                        console.log("status3: " + result);
                    }
                })
                .catch(error => {
                    console.log("status4: " + error);
                    this.setState({
                        isRequesting: false
                    });
                });
        }
    }


    render() {
        const fab = {
            position: 'fixed',
            bottom: 20,
            right: 20,
        };

        let cards = this.state.references.map((resource, index) =>
            <ResourceCard key={index}  url={resource.link} />
        );

        return (
            <div className="App container">

                <Header/>

                <Button variant="fab" color="primary" style={fab} onClick={this.handleClickOpen}>
                    +
                </Button>

                <div className="row" id="card-container">
                    {/*<ResourceCard url="https://github.com/facebook/react"/>*/}
                    {/*<ResourceCard url="https://www.youtube.com/watch?v=KMX1mFEmM3E"/>*/}
                    {/*<ResourceCard url="https://material-ui.com/demos/cards/#cards"/>*/}
                    {/*<ResourceCard url="https://www.android.com/"/>*/}
                    {/*<ResourceCard url="https://vuejs.org/"/>*/}
                    {/*<ResourceCard url="https://jsoneditoronline.org/"/>*/}
                    {/*<ResourceCard url="https://bitbucket.org/"/>*/}
                    {/*<ResourceCard url="https://moodle.uni-due.de"/>*/}
                    {cards}
                </div>


                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth="75%">

                    <AddLink open={this.state.open} context={this}/>


                </Dialog>


            </div>
        );
    }
}

export default ReferencesDashboard;
