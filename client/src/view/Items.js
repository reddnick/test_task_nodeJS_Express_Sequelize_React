import React, {Component} from 'react';
import ItemsList from "../components/ItemList";
import AddItem from "../components/AddItem";
import Pagination from "../components/Pagination";
import ModalWindow from "../components/EditItem";

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pager: {},
            items: []
        };
        this.modal = React.createRef();
    }

    componentDidMount() {
        this.loadPage();
    }

    loadPage = (pageNumber = 1) => {
        fetch(`/api/items?page=${pageNumber}`)
            .then((res) => res.json())
            .then(({pager, items}) => {
                this.setState({pager, items});
            })
    };

    onAdd = (item) => {
        fetch('/api/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((res) => [...this.state.items, res.item])
            .then((items) => this.setState({items}))
    };

    onEditHandler = (item) => {
        this.modal.current.openModal(item);
    };

    onEdit = (id, item) => {
        fetch(`/api/items/${id}`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(item)
        })
            .then((res) => res.json())
            .then(({updatedItem}) => this.state.items.map(item => item.id === id ? updatedItem : item))
            .then((items) => {
                this.setState({items});
            })
            .catch(err => {
                console.log('caught it!', err);
            });
    };

    onDelete = (id) => {
        fetch(`/api/items/${id}/remove`, {
            method: 'delete',
            headers: {'Content-Type': 'application/json'}
        })
            .then(() => this.loadPage(this.state.pager.currentPage))
            .catch(err => {
                console.log('caught it!', err);
            });
    };

    render() {
        const {pager, items} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="centr">Items</h1>
                </header>
                <AddItem addItemHandler={this.onAdd}/>
                <ItemsList
                    items={items}
                    editItemHandler={this.onEditHandler}
                    deleteItemHandler={this.onDelete}
                />
                <Pagination pager={pager} onChange={this.loadPage} />
                <ModalWindow ref={this.modal} onSave={this.onEdit}/>
            </div>
        );
    }
}

export default Items;
