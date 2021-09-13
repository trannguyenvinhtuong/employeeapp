import { Component } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import Tab from "./Tab";

class Details extends Component {
    render() {
        var { match } = this.props;
        var id = match.match.params.dataid;
        return (
            <div>
                <Tab id={id}/>
                <div style={{ paddingTop: '3rem' }}>
                    <FirstSection id={id} />
                    <SecondSection id={id} />
                </div>
            </div>
        );
    }
}

export default Details;