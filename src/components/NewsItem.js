import React from 'react'
import './NewsItem.css'
import dImg from './defImg.png'

const NewsItem = (props) => {

    var publishDate = new Date(props.Date);
    var currentDate = new Date();
    // Calculate the time difference in milliseconds
    var timeDiff = currentDate.getTime() - publishDate.getTime();
    // Convert the time difference to days
    var hoursDiff = Math.floor(timeDiff / (1000 * 3600));
    var daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    
    return (
        <>


            <div className="card mb-3">
                <div className="row g-0 py-2">
                    <div className="col-md-4 ">
                        <img src={props.image == null ? dImg : props.image} className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"> {props.title == null ? "Title is Missing" : props.title.slice(0, 70) + '...'  }  </h5>
                            <p className="card-text"> {props.content == null ? "Content is missing" : props.content.slice(0, 100) + '...'} </p>
                            <a href={props.url} className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                    <div className="card-footer text-body-secondary">
                        <p className="card-text"> Last update { hoursDiff>24 ? daysDiff + ' day ago' : hoursDiff + ' hourse ago'} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsItem