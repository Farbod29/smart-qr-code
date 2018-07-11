import React from "react";
import {IndexLink, Link} from "react-router";

class Sort extends React.Component {
    sort(field){
        this.props.sortBy(field);
    }
    render() {
        return (
            <div className="sort-section">
                <h1>Sort by</h1>
                <button onClick={this.sortRoster.bind(this,'like')} >Like</button>
                <button className="pill" onClick={this.sortRoster.bind(this,'dislike')} >Dislike</button>
                <button className="pill" onClick={this.sortRoster.bind(this,'pin')} >Pin</button>
      </div>
    )
  }
}
class SortableCardTable extends React.Component {
    state = {
        cards: [] // default state
    };
    sortBy(field){
        // Your sorting algorithm here
        // it should push the sorted value by field in array called sortedPlayers
        // Then call setState
        this.setState({
            cards: sortedCards
        });
    }
    render() {
        // calculate stats
        return (
            <div>
                {/* some JSX */}
                <Sort sortBy={sortBy}/>
                <Roster
                    cards={this.state.cards}
                />
            </div>
        );
    }
};
