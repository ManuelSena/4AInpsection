import * as React from "react";
import { Header } from "./components/header/header";

export const App: React.StatelessComponent<{}> = (props) => {

    return (
        <div id="root">
            <Header />
            {props.children}
        </div>
    );

}