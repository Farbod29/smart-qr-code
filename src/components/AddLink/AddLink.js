import React, {Component} from 'react';
import Header from "../Header/Header";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';


class AddLink extends Component {
    render() {
        return (
            <div className="App">

                <Header/>

                <div className="add-link-clean">
                    <form method="post">
                        <p className="col-12">
                            Add new reference
                        </p>
                        <div className="form-group right">
                            <input type="text" name="title"
                                   placeholder="Title of reference" className="form-control"/>
                        </div>
                        <div className="form-group right">
                            <input type="text" name="url"
                                   placeholder="URL of reference" className="form-control"/>
                        </div>

                        <div className="form-group add-link-btn">
                            <Button variant="fab" color="primary">
                                +
                            </Button>
                            <br/>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default AddLink;
