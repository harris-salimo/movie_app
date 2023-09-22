import { useMemo } from "react";
import { useRouteError } from "react-router-dom";

const _Error = () => {
    const error = useRouteError();
    console.error(error);

    const errorMessage = useMemo(() => {
        if (error && typeof error === "object") {
            if ("statusText" in error && typeof error.statusText === "string") {
                return error.statusText;
            }
            if ("message" in error && error.message === "string") {
                return error.message;
            }
        }
    }, [error]);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {errorMessage && <p>
                <i>{errorMessage}</i>
            </p>}
        </div>
    );
};

export default _Error;
