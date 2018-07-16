import React, {Component} from 'react';
import Header from "../header/Header";
import ResourceCard from "./ResourceCard";
import Button from "@material-ui/core/es/Button/Button";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import AddLink from "../addLink/AddLink";
import {getBoardResourcesData} from "../../utils/Connection";
import StorageKeys from "../../utils/StorageKeys";

class ReferencesDashboard extends Component {


    handleClickOpen = () => {

        if (localStorage.getItem(StorageKeys.USER_ID) != null && localStorage.getItem(StorageKeys.USER_ID).length > 0) {
            this.setState({open: true});
        } else {
            this.props.history.push('/login');
        }

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
        console.log("mount a board");
        this.getResources();
    }

    getResources() {
        if (this.props.location.search != null) {
            var tagCode = this.props.location.search.slice(4);
            console.log("id >> " + tagCode);

            this.setState({
                isRequesting: true
            });
            let initialReferences = [];

            let uid = "";
            if (localStorage.getItem(StorageKeys.USER_ID) != null)
                uid = localStorage.getItem(StorageKeys.USER_ID);
            getBoardResourcesData(tagCode, uid)
                .then((result) => {
                    console.log("status1: " + result);
                    if (result.status === 200) {
                        initialReferences = result.data.reference.map((m) => {
                            return m
                        });
                        this.setState({
                            isRequesting: false,
                            references: initialReferences.sort(this.compare.bind(this))
                        });
                        // this.setState({
                        // });

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

    compare(a,b) {
        if (a.totalVotes > b.totalVotes)
            return -1;
        if (a.totalVotes < b.totalVotes)
            return 1;
        return 0;
    }

    render() {
        const fab = {
            position: 'fixed',
            bottom: 20,
            right: 20,
        };


        let cards = this.state.references.map((resource, index) =>
            <ResourceCard key={index} url={resource.link} userPhoto={StorageKeys.BASE_API_URL + resource.user.photo}
                          userEmail={resource.user.email} totalVotes={resource.totalVotes}
                          userVote={resource.isVotedByMe} referenceId={resource._id}/>
        );

        return (
            <div className="App container">

                <Header/>

                <Button variant="fab" color="primary" style={fab} onClick={this.handleClickOpen}>
                    +
                </Button>

                <div className="row" id="card-container">
                    {cards}
                </div>


                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth="75%">

                    <AddLink board={this.props.location.search.slice(4)} open={this.state.open} context={this}/>

                </Dialog>

            </div>
        );
    }
}

export default ReferencesDashboard;
