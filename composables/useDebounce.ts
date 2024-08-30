export function useDebounce(fn: (val: any) => void, delay: number) {
    let timeoutId: any;
    return function (...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            // @ts-ignore
            fn(...args);
        }, delay);
    };
}
