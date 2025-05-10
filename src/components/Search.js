import React, { useRef, useContext } from "react";
import { Paper,InputBase,IconButton } from "@mui/material";


import { useNavigate } from "react-router-dom";
import GlobalContext from "./GlobalContext";


const Search = () => {

    const globalCtx = useContext(GlobalContext);

    const navigate = useNavigate();
    const searchString = useRef();

    const handleClickSearch = () => {
        if (searchString.current.value.trim().length === 0) {
            return false;
        }

        globalCtx.setSearchStringFn(searchString.current.value.trim());
        navigate('/recipe');
        
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClickSearch();
            window.scrollTo({ top: 0, behavior: 'smooth' });

        }
    };

    return (
        <Paper className="paper"
        component = 'form'
 
        >
            <InputBase 
        
            autoFocus
            placeholder="Recipe"
          
            inputRef={searchString}
            onKeyDown={handleKeyDown}
           
            
         
            />
            <IconButton 
            type='button'
            onClick={() => {
                handleClickSearch();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
         
            aria-label='search'
            >
                    🍖

            </IconButton>
        </Paper>
    );
};
export default Search;
