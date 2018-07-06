import React, {Component} from 'react';

export default class Card extends Component {

    onCardClick() {

        let delta = this.cardRef.getBoundingClientRect().top-this.cardRef.getBoundingClientRect().bottom-15;
        const {card} = this.props;
        this.props.beginRemoveCard(card);
        this.cardRef.addEventListener('transitionend', (e)=>{
            if (e.propertyName === 'opacity') this.props.moveRestUp(this.props.card, delta);
        });
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.resetTravel) {
            this.cardRef.addEventListener('transitionend', (e)=>{

                if (e.propertyName === 'transform') {
                    this.props.resetTravel();
                }

            });
        }
    }

    render() {
        const {card} = this.props;

        let travelTo = card.travelTo || 0, className = 'card';

        if (travelTo !== 0) {
            className += ' traveling';
        }

        return (
            <div className={className}
                 style={{opacity: card.removing ? 0 : 1, transform:`translate3d(0,${travelTo}px,0)`}}
                 ref={ref => this.cardRef = ref}
                 onClick={this.onCardClick.bind(this)}
                 id={card.id}>
                <div className='card-inner ripple'>
                    <div className="information">
                        <img src={card.imageSrc} className='card-image' alt='some alt'/>
                        <div className="value">{card.value}</div>
                        <div className="label">{card.label}</div>
                    </div>
                </div>
            </div>
        )
    }
}
