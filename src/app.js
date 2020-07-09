import * as React from "react";
import { Header } from "./components/header/header";
export const App = (props) => {
    return (React.createElement("div", { id: "root" },
        React.createElement(Header, null),
        props.children));
};
//# sourceMappingURL=app.js.map