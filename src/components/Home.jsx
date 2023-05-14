import {useState, useEffect} from 'react';
function HomeButton() {
return(
    <button onClick={() => {window.location.href="/";}}>
        Home
    </button>
);


}