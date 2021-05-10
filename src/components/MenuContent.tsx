
import React,{FunctionComponent, useState, useEffect} from 'react';
import { Button, Input, Text, Accordion, } from '@fluentui/react-northstar';
import { SearchIcon, AddIcon } from '@fluentui/react-icons-northstar';
import Data from '../data/megaMenu.json';
type OnClick = () => void;

type AccordionPanels = {
  title:string;
  content:any;
  key:string;
  accordionTitleId?:string;
  onClick?:OnClick;
}[]

type accordionType = {
  key?: string;
  title: string;
  content?: any;
}
type SubMenuProps ={
  title: string,
  titleDescription?: string,
  subTitle?:string,
  subTitleDescription?:string,
  accordionNavigation?:accordionType[]
}


var objects:AccordionPanels = []

function createDuplicate(data:AccordionPanels,objectsOutput:AccordionPanels){
  if(!data){
      return
  }
  for(const inElem of data){
      let objTmp:AccordionPanels = []
      createDuplicate(inElem.content,objTmp)
     
      objectsOutput.push({
        accordionTitleId:inElem.key, 
        key:inElem.key,
        title:inElem.title,
        ...(Array.isArray(inElem.content) ? {
          content: <Accordion exclusive panels={objTmp} className="className1" onActiveIndexChange={
            (e) => {
              const addId = e
              indexChange(addId)
            }
          }/>
          } : {
            content:inElem.content
          }
        )
      });
  }
}
createDuplicate(Data,objects)

function indexChange(input?:any){
  console.log(input);
}

const MenuContent: FunctionComponent<SubMenuProps> =  ({title, titleDescription, subTitle, subTitleDescription, accordionNavigation }) => {
    const [,setUpdate] = useState("")
    const [menuItem,setMenuItem] = useState("")
    console.log(menuItem);

    const AddEntry = () => {
      objects.push({
        title:menuItem,
        key:menuItem,
        content:menuItem
      })
      setUpdate(menuItem)
      console.log("add entry");
    }
    return(
    <>
      <h2 className="fs-5 fw-bolder">{title}</h2>
      <Text size="medium" content={titleDescription} />
      <Text weight="bold" size="large" content={subTitle} style={{paddingTop:"15px"}} />
      <Text size="medium" content={subTitleDescription} />
      <div  className="row pt-4 pb-5">
        <div className="col-2">
            <Button icon={<AddIcon size="small" />}  content="Add Entry" iconPosition="before" primary onClick={AddEntry}/>
        </div>
        <div className="col-4 ">
            <Input required fluid icon={<SearchIcon/>} placeholder="Search for a navigation entry" iconPosition="end"  onChange={e=>setMenuItem((e.target as HTMLInputElement).value)} />
        </div>
      </div>
      <Accordion panels={objects} exclusive onTitleClick={(e) => indexChange(e)}/>
      <div  className="d-flex flex-row-reverse pt-5 pb-2">
      <Button  className="mx-2" content="Save" iconPosition="before" primary />
      <Button  content="Discard" iconPosition="before"  />
      </div>
    </>
    )
}
export default MenuContent;