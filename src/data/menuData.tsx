import React from 'react';
import MenuItems from './MenuItems';

import Data from '../data/megaMenu.json';

const localData =  JSON.parse(JSON.stringify(Data));

type MenuContentItem = {
    label: string;            // label to be shown on for each menuItem
    key: string | number;     // a key id
    items: React.ReactNode;   // a react node to be presented as content
}[]

let NewArrayOfContent:MenuContentItem = []

for (const inElem of localData[0].subMenuItem) {
    NewArrayOfContent.push(
        {
            label: inElem.label,
            key: inElem.key,
            items: React.createElement(MenuItems,{content:inElem.content},null)
        }
    )
}

  export default NewArrayOfContent;
