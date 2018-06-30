import React, {Component} from 'react';
import Header from "../Header/Header";
import ReferenceCard from "./ReferenceCard";
import ResourceCard from "./ResourceCard";
import Button from "@material-ui/core/es/Button/Button";

class ReferencesDashboard extends Component {
    render() {
        const fab = {
            position: 'fixed',
            bottom: 20,
            right: 20,
        };
        return (
            <div className="App container">

                <Header/>

                {/*<div className="row">*/}
                {/*<ReferenceCard url="https://www.youtube.com/watch?v=5jVnLbdqR6U"/>*/}
                {/*<ReferenceCard url="https://www.youtube.com/watch?v=KMX1mFEmM3E"/>*/}
                {/*<ReferenceCard url="https://www.youtube.com/watch?v=oa9cnWTpqP8"/>*/}
                {/*</div>*/}

                    <Button variant="fab" color="primary" style={fab} >
                        +
                    </Button>

                <div className="row" id="card-container">
                    <ResourceCard url="https://github.com/facebook/react"/>
                    <ResourceCard url="https://www.youtube.com/watch?v=KMX1mFEmM3E"/>
                    <ResourceCard url="https://material-ui.com/demos/cards/#cards"/>
                    <ResourceCard url="https://www.android.com/"/>
                    <ResourceCard url="https://vuejs.org/"/>
                    <ResourceCard url="https://jsoneditoronline.org/"/>
                    <ResourceCard url="https://bitbucket.org/"/>
                    <ResourceCard url="https://moodle.uni-due.de"/>
                </div>



                

            </div>
        );
    }
}

export default ReferencesDashboard;
