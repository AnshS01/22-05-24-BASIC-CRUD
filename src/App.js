import React, { useState } from "react";
import temp_data from "./Components/Data";

const App = () => {
    const [input, setInput] = useState({});
    const [result, setResult] = useState(temp_data);
    const [temp_ind, setTemp_ind] = useState(0);
    const input_handler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submit_handler = () => {
        setResult([...result, input]);
    };

    const delete_Handler = (ind) => {
        result.splice(ind, 1);
        setResult([...result]);
    };

    const view_handler = (val, ind) => {
        setInput(val);
        setTemp_ind(ind);
    };

    const update_handler = (val) => {
        result.splice(val, 1, input);
        setResult([...result]);
    };

    return (
        <div className="">
            <div className="ms-3 d-flex gap-3 my-4">
                <input className="form-control w-25" value={input.name} onChange={input_handler} placeholder="Enter Something" name="name"></input>
                <input className="form-control w-25" value={input.age} onChange={input_handler} placeholder="Enter Something" name="age"></input>
                <button className="btn btn-dark d-block" onClick={submit_handler}>
                    Click to Add
                </button>
                <button className="btn btn-warning d-block" onClick={() => update_handler(temp_ind)}>
                    Update
                </button>
            </div>
            {result?.map((val_, ind) => {
                return (
                    <div className="overflow-auto ms-3 h-100" key={ind}>
                        <div className="d-flex flex-column border border-2 border-dark p-3 w-25 my-2 ">
                            <h5 className="d-block">{val_.name}</h5>
                            <h5 className="d-block">{val_.age}</h5>
                            <div className="d-flex justify-content-evenly">
                                <button className="btn btn-danger d-block" onClick={() => delete_Handler(ind)}>
                                    Delete
                                </button>
                                <button className="btn btn-success d-block" onClick={() => view_handler(val_, ind)}>
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default App;
