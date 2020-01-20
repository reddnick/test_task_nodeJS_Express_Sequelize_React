import React, {Component} from 'react';
import Items from './view/Items';
import Statistic from './view/Statistic';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 1
        };
        this.tabs = [{
            label: 'Items',
            id: 1
        }, {
            label: 'Item Statistic',
            id: 2
        }];
    }

    changeTab(tab) {
        this.setState({selectedTab: tab.id});
    }

    render() {
        return (
            <React.Fragment>
                <div className="tabs">
                    {this.tabs.map(tab => (
                        <div
                            key={tab.id}
                            className={`tabs-header ${tab.id === this.state.selectedTab ? 'active' : ''}`}
                            onClick={() => this.changeTab(tab)}
                        >{tab.label}</div>
                    ))}
                </div>
                <div className="card-body wrapper">
                    {{
                        1: <Items/>,
                        2: <Statistic/>
                    }[this.state.selectedTab]}
                </div>
            </React.Fragment>
        );
    }
}

export default App;
