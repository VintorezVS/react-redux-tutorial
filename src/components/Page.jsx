import React, { PropTypes, Component } from 'react';

export default class Page extends Component {
    onYearBtnClick = (e) => {
        this.props.getPhotosByYear(e.target.innerText);
    };
    
    render() {
        const { year, photos, loading } = this.props;
        return (
            <div className="ib page">
                <p>
                    <button className="btn" onClick={this.onYearBtnClick} disabled={loading}>2016</button>
                    <button className="btn" onClick={this.onYearBtnClick} disabled={loading}>2015</button>
                    <button className="btn" onClick={this.onYearBtnClick} disabled={loading}>2014</button>
                    <button className="btn" onClick={this.onYearBtnClick} disabled={loading}>ALL</button>
                </p>
                <h3>{year === 'ALL' ? 'Все фото' : year + ' год'}</h3>
                <div className="photos">
                    {loading ?
                        <p>Loading...</p>
                        :
                        photos.map(photo => (
                            <div key={photo.pid} className="photo">
                                <img src={photo.src} alt={photo.text} />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

Page.propTypes = {
    year: PropTypes.string.isRequired,
    photos: PropTypes.array,
    loading: PropTypes.bool,
    getPhotosByYear: PropTypes.func.isRequired
};