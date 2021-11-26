﻿var fs = require('fs');

var EnumFile = "./React/ReactComponent.cs";

var enumTemplate = `

// AUTOGENERATED DO NOT EDIT

namespace BlazorMeetsReact.React
{
    public enum ReactComponent
    {
        #enums
    }
}
`;

var ReactDir = "./React/Components/";

var index = `

// AUTOGENERATED DO NOT EDIT

import ReactDOM from 'react-dom';
import React from 'react';

#imports
    

(window as any).renderReact = function (componentName: string, props: any, renderElement: HTMLElement)
{
    const reactComponents: { [key: string]: JSX.Element } = {};
    
    #components
    
    ReactDOM.render(reactComponents[componentName], renderElement);

};`;

var imports = '';
var components = '';
var enums = '';

fs.readdir(ReactDir, function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach(function (file) {
        if (!file.startsWith('_') && file.endsWith('.js')) {
            var component = file.replace('.js', '');
            imports += "import { " + component + " } from './" + component + "'\n";
            components += "reactComponents['" + component + "'] = <" + component + " {...props}/>;\n    ";
            enums += component + ",\n        ";
        }
    });
    index = index.replace('#imports', imports);
    index = index.replace('#components', components);
    enumTemplate = enumTemplate.replace('#enums', enums);

    fs.writeFile(ReactDir + '/_index.tsx', index, err => {
        if (err) {
            console.error(err)
            return
        }
    })
    fs.writeFile(EnumFile, enumTemplate, err => {
        if (err) {
            console.error(err)
            return
        }
    })
});

