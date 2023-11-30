import { useEffect } from 'react';

export const formatText = (input) => {
    let wordsArray = input.split('_');
    wordsArray = wordsArray.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return wordsArray.join(' ');
};

export function useTitle(title) {
    useEffect(() => {
        const prevTitle = document.title
        document.title = title
        return () => {
            document.title = prevTitle
        }
    })
}