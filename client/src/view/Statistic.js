import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "../components/Pagination";

class Statistic extends Component {
    constructor() {
        super();
        this.state = {
            statsPager: {},
            statsTypes: []
        };
    }

    componentDidMount() {
        this.getStats();
    }
    getStats = (pageNumber = 1) => {
         (
            fetch(`api/items/stat?page=${pageNumber}`)
                .then((res) => res.json())
                .then(({statsPager, statsTypes}) => {
                    this.setState({statsPager, statsTypes});
                })
        )
    };

    render() {
        const { statsPager, statsTypes } = this.state;
        return <div className="card-body">
            <h3 className="centr">Statistic</h3>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Item Type</th>
                    <th>Count</th>
                </tr>
                </thead>
                <tbody>

                {statsTypes.map(statsType =>
                    <tr key={statsType.name}>
                        <td>{statsType.name}</td>
                        <td>{statsType.types_count}</td>
                    </tr>
                )}
                </tbody>
            </Table>
            <Pagination pager={statsPager} onChange={this.getStats} />
        </div>;
    }
}

export default Statistic;
