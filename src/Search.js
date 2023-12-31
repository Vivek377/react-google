import React, { useState } from 'react';
import './Search.css';
// import SearchIcon from "@mui/icons-material/search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
//import { Tooltip } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

function Search({ hideButtons = false }) {
    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    // const history = useHistory();
    const search = (e) => {
        e.preventDefault();
        console.log('You hit the Google Search button : ', input);

        //history.push('/search');
        dispatch({
            // eslint-disable-next-line
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        });

        //input to output
        // history.push('/search');

    };

    return (
        <form className='search'>
            <div className='search__input'>
                <AddBusinessIcon className='search__inputIcon' />
                {/* <Tooltip title="Search"> */}
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                {/* </Tooltip> */}

                {/* <Tooltip title="Search by voice"> */}
                <MicIcon />
                {/* </Tooltip> */}
            </div>

            {!hideButtons ? (
                <div className='search__buttons'>
                    <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className='search__buttons'>
                    <Button className='search__buttonsHidden' type='submit' onClick={search} variant="outlined" >Google Search</Button>
                    <Button className='search__buttonsHidden' variant="outlined" >I'm Feeling Lucky</Button>
                </div>
            )}

        </form>
    );
}

export default Search;