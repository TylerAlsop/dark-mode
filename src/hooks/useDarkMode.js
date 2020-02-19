import React, {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';


export const useDarkMode = (key, initialValues, cb) {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValues);

    useEffect(() => {
        const bodyElement = document.getElementsByClassName("body");

        if (window.localStorage.getItem(someValue)) {
            bodyElement.classList.toggle("dark-mode");
        }
    }, ['toggle switch component here']);

};