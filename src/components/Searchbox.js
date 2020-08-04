import React from 'react';

const Searchbox = ({value, onChange}) => {
    return (
        <input
            className="search_box"
            type="text"
            value={value}
            onChange={onChange}
        />
    );
};

export default Searchbox;