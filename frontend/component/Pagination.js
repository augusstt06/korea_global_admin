import React from 'react'

const Pagination = ({postsperPage, totalPage, paginate}) => {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalPage / postsperPage); i++){
        pageNumber.push(i);
    }
    return (
        <nav className='pagination'>
            <ul className='paginationUl'>
                {pageNumber.map(data => 
                    <li key={data} className='pageItem'>
                        <button className='pageLink'
                            onClick={() => paginate(data)}>
                                {data}
                        </button>
                    </li>)}
            </ul>
        </nav>
    )
}

export default Pagination
