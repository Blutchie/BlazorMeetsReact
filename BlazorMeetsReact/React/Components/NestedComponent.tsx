import * as React from 'react';

import { SimpleComponent } from './SimpleComponent'

export const NestedComponent = () =>
    <div>
        <p>Hello Blazor, I can render other components:</p>
        <SimpleComponent /> 
    </div>;
