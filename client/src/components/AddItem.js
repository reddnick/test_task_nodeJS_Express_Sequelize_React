import React from 'react';
import {useForm} from 'react-hook-form';

export default function AddItem(props) {
    const {register, handleSubmit, errors} = useForm();

    return (
        <React.Fragment>
            <h4>add new Item</h4>
            <form onSubmit={handleSubmit(props.addItemHandler)} className="input-form">
                <div className="inputs-wrapper">
                    <div className="input-wrap">
                        <input
                            className="field"
                            type="text"
                            placeholder="Item name"
                            name="name"
                            ref={register({required: "This field is required", maxLength: 20})}/>
                        {errors.name && errors.name.type === "required" && errors.name.message}
                        {errors.name && errors.name.type === "maxLength" && "The name is too long"}
                    </div>
                    <div className="input-wrap">
                        <input
                            className="field"
                            type="text"
                            placeholder="Item type"
                            name="type"
                            ref={register({required: true, maxLength: 20})}/>
                    </div>

                </div>

                <input value="Add" type="submit"/>

            </form>
        </React.Fragment>
    );
}
