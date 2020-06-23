import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Aladin} from "./Aladin";
import {LionKing} from "./LionKing";
import {SpiderMan} from "./SpiderMan";

export function Routes(){
    return(
    <div>
        <Route path="/aladin" component={Aladin} />
        <Route path="/lionking" component={LionKing} />
        <Route path="/spiderman" component={SpiderMan} />
    </div>)
}