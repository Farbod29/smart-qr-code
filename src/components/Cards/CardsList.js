import React, {Component} from 'react';
import Card from './Card';

export default class CardsList extends Component {

    constructor(props){
        super(props);
        this.moveRestUp = this.moveRestUp.bind(this);
        this.removeCard = this.removeCard.bind(this);
        this.resetTravel = this.resetTravel.bind(this);
        this.beginRemoveCard = this.beginRemoveCard.bind(this);
        this.state = {
            cards: [
                {name: 'Card 1', imageSrc: 'https://pbs.twimg.com/profile_images/655066410087940096/QSUlrrlm.png', presentedTime: '10 minutes ago', value: 'Some Value 1', label: 'Some Label 1', id:'1'},
                {name: 'Card 2', imageSrc: 'https://asmallorange.com/assets/img/logo/logo.png', presentedTime: '11 minutes ago', value: 'Some Value 2', label: 'Some Label 2', id:'2'},
                {name: 'Card 3', imageSrc: 'http://smalldata.io/startup/common-files/icons/sdl_logo.png', presentedTime: '12 minutes ago', value: 'Some Value 3', label: 'Some Label 3', id:'3'},
                {name: 'Card 4', imageSrc: 'http://www.worldbank.org/content/dam/Worldbank/Highlights%20&%20Features/small-states-forum-logo.png', presentedTime: '13 minutes ago', value: 'Some Value 4', label: 'Some Label 4', id:'4'},
                {name: 'Card 5', imageSrc: 'http://www.worldbank.org/content/dam/photos/780x439/2016/sep-1/ssf2016AEM.jpg', presentedTime: '14 minutes ago', value: 'Some Value 5', label: 'Some Label 5', id:'5'},
                {name: 'Card 6', imageSrc: 'https://smallbusiness.house.gov/uploadedphotos/highresolution/94df275c-e09b-4157-98a5-9f4ef77aee25.png', presentedTime: '15 minutes ago', value: 'Some Value 6', label: 'Some Label 6', id:'6'},
                {name: 'Card 7', imageSrc: 'https://i.ytimg.com/vi/fypkPgeQxBQ/maxresdefault.jpg', presentedTime: '16 minutes ago', value: 'Some Value 7', label: 'Some Label 7', id:'7'},
                {name: 'Card 8', imageSrc: 'http://smallbusinessbc.ca/wp-content/uploads/2015/01/SBBC-Logo-FC-WB.gif', presentedTime: '17 minutes ago', value: 'Some Value 8', label: 'Some Label 8', id:'8'},
                {name: 'Card 9', imageSrc: 'http://isbdc.org/wp-content/uploads/2014/09/ffs-logo-web-new.jpg', presentedTime: '18 minutes ago', value: 'Some Value 9', label: 'Some Label 9', id:'9'},
                {name: 'Card 10', imageSrc: 'https://www.bankofamerica.com/content/images/ContextualSiteGraphics/Marketing/Highlights/en_US/Small_Biz_HPYNI_column2_jan.jpg', presentedTime: '19 minutes ago', value: 'Some Value 10', label: 'Some Label 10', id:'10'},
                {name: 'Card 11', imageSrc: 'https://pbs.twimg.com/profile_images/459069336443822080/FpBLZE8R.png', presentedTime: '20 minutes ago', value: 'Some Value 11', label: 'Some Label 11', id:'11'},
                {name: 'Card 12', imageSrc: 'http://68.media.tumblr.com/d29ecb1676f74ba704e36f479e9325e2/tumblr_nm4rb0WAdK1s4ygi0o1_1280.jpg', presentedTime: '21 minutes ago', value: 'Some Value 12', label: 'Some Label 12', id:'12'},
            ]
        };
    }

    removeCard(card) {
        let index = this.state.cards.indexOf(card);

        if (index > -1) {
            return [...this.state.cards.slice(0, index), ...this.state.cards.slice(index+1)];
        }

    }

    beginRemoveCard(card) {
        let newCards = [...this.state.cards];
        newCards[newCards.indexOf(card)].removing = true;
        this.setState({cards: newCards});
    }

    moveRestUp(card, delta){
        let initialCardIndex = this.state.cards.indexOf(card);
        let newCards = [...this.state.cards];
        newCards.forEach((currCard, i)=>{
            if (i>initialCardIndex){
                currCard.travelTo = delta
            }
        });

        this.setState({cards: newCards});
    }

    resetTravel(){
        let newCards = this.removeCard(this.state.cards.find(card=>card.removing));

        if (newCards) {
            newCards.forEach(card=>delete card.travelTo);
            this.setState({cards: newCards});
        }
    }

    render() {
        return <div className="cards-list">
            {this.state.cards.map((card, i)=>{
                return <Card
                    key={card.id}
                    card={card}
                    moveRestUp={this.moveRestUp}
                    resetTravel={i === this.state.cards.length-1 ? this.resetTravel : null}
                    // removeCard={this.removeCard}
                    beginRemoveCard={this.beginRemoveCard}/>
            })}
        </div>
    }
}