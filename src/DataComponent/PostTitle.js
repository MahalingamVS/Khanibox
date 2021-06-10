
import React, { Component } from 'react'
import '.././App.css';

class PostTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            id: props.id.id
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.state.id)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    title: result.title,
                    body: result.body
                })
            });
    }
    render() {
        return (
            <div className="posttitle">
                <table className="tablept">
                    <tr className="trpt">
                        <th className="thpt">
                            {"Title"}
                        </th>
                        <th className="thpt">
                            {"Body Content"}
                        </th>
                    </tr>
                    <tr className="trpt">
                        <td className="tdpt">
                            {this.state.title}
                        </td>
                        <td className="tdpt">
                            {this.state.body}
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
export default PostTitle
