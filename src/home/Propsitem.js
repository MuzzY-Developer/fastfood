import React, {Component} from 'react';

class Propsitem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
               <div className="card">
                   <img className="rasm"  src={this.props.rasm} alt="Card1"/>
                   <h3 className="title">{this.props.title}</h3>
                   <h4 className="vazn">{this.props.vazn}</h4>
                   <h5 className="narx">{this.props.narx}</h5>
                   <button className="bt1">+</button>
               </div>
            </>
        );
    }
}

export default Propsitem;