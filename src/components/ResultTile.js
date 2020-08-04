import React from 'react';

const ResultTile = ({ imgUrl, link, title, description }) => {
    return (
        <div className="result_tile">
            <img className="result_tile-img" src={imgUrl}/>
            <div className="result_tile-content">
                <a className="result_tile-link">{link}</a>
                <div className="result_tile-title">{title}</div>
                <div className="result_tile-description">{description}</div>
            </div>
        </div>
    );
};

export default ResultTile;