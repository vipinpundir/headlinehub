import React, { useEffect, useState, useCallback } from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';

const NewsApi = (category) => {
    const cat = category.category;
    const [Data, SetData] = useState([]);
    const [Page, SetPage] = useState(1);
    const [PageSize, SetPageSize] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getData = useCallback(async () => {
        setIsLoading(true);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=f1f844df814749d79d5fe41e567cacd4&page=${Page}`);
        const data = await response.json();
        SetData(data.articles);
        console.log(data);
        SetPageSize(data.totalResults / 20);
        setIsLoading(false);
    }, [cat, Page]);

    useEffect(() => {
        getData();
    }, [getData]);

    async function PreHandel() {
        if (Page > 1) {
            const NewPage = Page - 1
            // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=c81fbd0151784f82a4817712573c6def&page=${NewPage}`);
            // this is Second API
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=f1f844df814749d79d5fe41e567cacd4&page=${NewPage}`);
            const Data = await response.json()
            SetData(Data.articles)
            SetPage(NewPage)
        }
        else {
            alert('There is No Previous Page')
        }
    }


    async function NexHandel() {
        if (PageSize > Page) {
            const NewPage = Page + 1
            // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=c81fbd0151784f82a4817712573c6def&page=${NewPage}`);
            // this is Second API
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=f1f844df814749d79d5fe41e567cacd4&page=${NewPage}`);
            const Data = await response.json()
            SetData(Data.articles)
            SetPage(NewPage)
        }
        else {
            alert('There is No Next Page.')
        }
    }

    return (
        <div className='container my-4 '>
            {isLoading ? (<Spinner />) : (
                <>
                    <h1>Top {cat} Headlines</h1>
                    <div className='row d-flex justify-content-around my-3'>
                        {Data.map((value, index) => (
                            <NewsItem key={index} author={value.author} title={value.title} url={value.url} image={value.urlToImage} Date={value.publishedAt} desc={value.description} content={value.content} />
                        ))}
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <button type="button" className="btn btn-secondary" onClick={PreHandel} >Previous</button>
                        <button type="button" className="btn btn-secondary" onClick={NexHandel} >Next</button>
                    </div>
                </>
            )}
        </div>
    )
}
export default NewsApi