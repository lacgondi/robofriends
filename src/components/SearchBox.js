import React from 'react';

const SearchBox = ({searchfield,searchchange}) =>{
    return(
        <div>
            <input 
            className='pa3 ba b-- green bg-lightest-blue'
            type='search' 
            placeholder='search robots'
            onChange={searchchange}/>    
        </div>
    );
}

export default SearchBox;