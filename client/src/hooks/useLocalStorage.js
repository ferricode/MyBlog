import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {
        const persistedStateSeriallized = localStorage.getItem(key);

        if (persistedStateSeriallized) {
            const persistedState = JSON.parse(persistedStateSeriallized);

            return persistedState;
        }
        return initialValue;
    });
    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setLocalStorageState,
    ];
};