import React, {Component} from 'react';
import Header from "../Header/Header";
import ReferenceCard from "./ReferenceCard";

class ReferencesDashboard extends Component {
    render() {
        return (
            <div className="App">


                <Header/>

                <div className="row">
                    <ReferenceCard url="https://www.youtube.com/watch?v=5jVnLbdqR6U"/>
                    <ReferenceCard url="https://www.youtube.com/watch?v=KMX1mFEmM3E"/>
                    <ReferenceCard url="https://www.youtube.com/watch?v=oa9cnWTpqP8"/>
                    <ReferenceCard url="https://www.youtube.com/watch?v=78tNYZUS-ps"/>
                </div>


            </div>
        );
    }
}

export default ReferencesDashboard;
