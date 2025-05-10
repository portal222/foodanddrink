import React from "react";
import { PacmanLoader } from 'react-spinners';

const Loader = () => {

    return (
        <>
            <div className="loader">
                <PacmanLoader
                    color="#8cdd84"
                    size='50px'
                    speedMultiplier='1.2'
                />
            </div>
            
        </>
    )
}
export default Loader;