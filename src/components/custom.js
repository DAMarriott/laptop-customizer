import React, { Component } from 'react';
import './custom.css';



class Custom extends Component {
    render() {
     const features = Object.keys(this.props.features)
     .map(key => {
        const options = this.props.features[key].map((items,index) => {
            const ListClass = items.name === this.props.features[key].name?  'feature__List' : '';
            const CoolClass = 'Cool__option ' + ListClass;
            return <li key={index} className="itemOnSale">
                <div className={CoolClass}
                onClick={e => this.props.updateFeature(key, items)}>
                    {items.name}
                    ({new Intl.NumberFormat('en-us', {style: 'currency', currency: 'USD'})
                    .format(items.cost) })
                </div>
            </li>
        });
        return <div className ="feature" key={key}>
            <div className="feature__name">{key}</div>
            <ul className="feature__list">
                {options}
            </ul>
        </div>
     })   
     return (
         <div className="return">
             <h3>Customize your laptop</h3>
             <section className="form">
                { features }
             </section>
         </div>
    )};
}

export default Custom;