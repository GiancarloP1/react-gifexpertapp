import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import PropTypes from 'prop-types';

export const GifExpertApp = () => {

    //const categories = ['One punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One punch'])

    // const handleAdd = () => {
        
    //     setCategories(  [...categories, 'HunterxHunter'] );

    // }


    return (
        

        <>

        <h2>GifExpert</h2>
        

        <AddCategory setCategories={setCategories} />
        <hr />

        

        <ol>
            
            { 
                categories.map(category => (
                    <GifGrid 
                    key={category}

                   category={category}
                   
                   />
                ))
                   
                
            }
            
        </ol>

        </>
    )


}

