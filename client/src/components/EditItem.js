import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeList: [],
            isOpen: false,
            item: null
        }
    }

    componentDidMount() {
        fetch('/api/types')
            .then((res) => res.json())
            .then(res => this.setState({
                typeList: res.types.map(type => ({label: type.name, value: type.id}))
            }));
    }

    openModal = (item) => {
        this.setState({
            item,
            isOpen: true
        });

        this.selected = {
            label: item.type.name,
            value: item.type
        };
    };

    closeModal = () => {
        this.setState({isOpen: false, item: null});
    };

    onNameChange = (event) => {
        const item = this.state.item;
        item.name = event.target.value;
        this.setState({item});
    };

    onTypeChange = (type) => {
        const item = this.state.item;
        item.type.name = type.label;
        item.type.id = type.value;
        this.setState({item});
    };

    save = () => {
        if (!this.state.item.name) {
            return;
        }
        const {item} = this.state;
        this.props.onSave(item.id, item);
        this.closeModal();
    };

    render() {
        const {item} = this.state;

        return (
            <Modal show={this.state.isOpen} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        item && <form className="edit-modal-form">
                            <div className="modal-row">
                                <span>Name</span>
                                <input value={item.name} onChange={this.onNameChange}/>
                            </div>
                            <div className="modal-row">
                                <span>Type</span>
                                <Dropdown
                                    options={this.state.typeList}
                                    value={this.selected}
                                    onChange={this.onTypeChange}
                                    placeholder="Select type"
                                />
                            </div>
                        </form>
                    }
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn btn-success" onClick={this.save}>Save</button>
                </Modal.Footer>
            </Modal>
        );
    }
}
