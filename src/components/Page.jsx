import React, { PropTypes, Component } from 'react';

export default class Page extends Component {
    onYearBtnClick = (e) => {
        this.props.getPhotosByYear(+e.target.innerText);
    };

    render() {
        const { year, photos, loading } = this.props;
        return (
            <div className="ib page">
                <p>
                    <button className="btn" onClick={this.onYearBtnClick}>2016</button>
                    <button className="btn" onClick={this.onYearBtnClick}>2015</button>
                    <button className="btn" onClick={this.onYearBtnClick}>2014</button>
                </p>
                <h3>{year} год</h3>
                <p>{loading ? 'Loading...' : `У тебя ${photos.length} фото.`}</p>
            </div>
        );
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array,
    loading: PropTypes.bool,
    getPhotosByYear: PropTypes.func.isRequired
};