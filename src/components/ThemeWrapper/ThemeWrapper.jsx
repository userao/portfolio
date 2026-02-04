import { useContext } from "react";
import { ThemeContext } from "../../context/context";

export default function ThemeWrapper(WrappedComponent) {
    const { theme } = useContext(ThemeContext);

    return function Wrapped(props) {
        return (
            <div className={`${theme} theme-wrapper`}>
                <WrappedComponent {...props} />
            </div>
        );
    };
}
