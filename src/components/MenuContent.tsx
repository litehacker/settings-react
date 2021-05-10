import {FunctionComponent} from 'react';
import { Button, Input, Text, Accordion, } from '@fluentui/react-northstar';
import { SearchIcon, AddIcon } from '@fluentui/react-icons-northstar';
import Data from '../data/megaMenu.json';

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
createDuplicate(Data,objects)

type accordionType = {
  key?: string;
  title: string;
  content: any;
  label?:string;
}
type SubMenuProps ={
  title: string,
  titleDescription?: string,
  subTitle?:string,
  subTitleDescription?:string,
  accordionNavigation?:accordionType[]
}


const MenuContent: FunctionComponent<SubMenuProps> =  ({title, titleDescription, subTitle, subTitleDescription, accordionNavigation }) => {
    return(
    <>
      <h2 className="fs-5 fw-bolder">{title}</h2>
      <Text size="medium" content={titleDescription} />
      <Text weight="bold" size="large" content={subTitle} style={{paddingTop:"15px"}} />
      <Text size="medium" content={subTitleDescription} />
      <div  className="row pt-4 pb-5">
        <div className="col-2">
            <Button icon={<AddIcon size="small" />}  content="Add Entry" iconPosition="before" primary />
        </div>
        <div className="col-4 ">
            <Input fluid icon={<SearchIcon/>} placeholder="Search for a navigation entry" iconPosition="end"  />
        </div>
      </div>
      <Accordion panels={objects} exclusive />
      <div  className="d-flex flex-row-reverse pt-5 pb-2">
      <Button  className="mx-2" content="Save" iconPosition="before" primary />
      <Button  content="Discard" iconPosition="before"  />
      </div>
    </>
    )
}
export default MenuContent;