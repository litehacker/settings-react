import LocalData from '../data/megaMenu.json'
import { Accordion } from '@fluentui/react-northstar'

type AccordionPanels = {
    title:string;
    content:any;
}[]
var objects:AccordionPanels = []

function createDuplicate(data:AccordionPanels,objectsOutput:AccordionPanels){
    if(!data){
        return
    }
    for(const inElem of data){
        let objTmp:AccordionPanels = []
        createDuplicate(inElem.content,objTmp)
       
        objectsOutput.push({
            title:inElem.title,
            //content:inElem.content
            ...(Array.isArray(inElem.content) ? {content: <Accordion exclusive panels={objTmp}/>} : {content:inElem.content})
        });
    }
}

createDuplicate(LocalData,objects)
console.log(objects)
console.log(LocalData)
export default function Tree () {
    return(
        <Accordion exclusive panels={objects}/>
    )
}
