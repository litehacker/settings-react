
import React,{FunctionComponent, useState, useEffect} from 'react';
import { Button, Input, Text, Accordion, } from '@fluentui/react-northstar';
import { SearchIcon, AddIcon } from '@fluentui/react-icons-northstar';
import Data from '../data/megaMenu.json';

type AccordionPanels = {
  title:string;
  content:any;
  key:string;
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

var objects:AccordionPanels = [];



function createDuplicate(data:AccordionPanels,objectsOutput:AccordionPanels){
  if(!data){
      return
  }
  for(const inElem of data){
      let objTmp:AccordionPanels = []
      createDuplicate(inElem.content,objTmp)
     
      objectsOutput.push({
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

if(localStorage.getItem('Accordion')){
  objects = JSON.parse(localStorage.getItem('Accordion') || '[]')
}else{
  createDuplicate(Data,objects)
}

function indexChange(input?:any){
  console.log(input);
}

const MenuContent: FunctionComponent<SubMenuProps> =  ({title, titleDescription, subTitle, subTitleDescription, accordionNavigation }) => {
  const [menuItem,setMenuItem] = useState("")
  const [mounted, setMounted] = useState(true);
  // Set up a piece of state, so that we have
  // a way to trigger a re-render.
  const [random, setRandom] = useState(Math.random());
  const Save  = () => {
    localStorage.setItem('Accordion', JSON.stringify(objects));
  }
  const Discard = () => {
    objects = JSON.parse(localStorage.getItem('Accordion') || '[]')
    reRender()
  }
  const AddEntry = () => {
    objects.push({...objects[objects.length - 1]})
    objects[objects.length - 1].title=menuItem
    reRender()
  }
  
  // This function will change the random number,
  // and trigger a re-render (in the console,
  // you'll see a "render!" from LifecycleDemo)
  const reRender = () => setRandom(Math.random());
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
          <Input required fluid icon={<SearchIcon/>} placeholder="Type Navbar item to add" iconPosition="end"  onChange={e=>setMenuItem((e.target as HTMLInputElement).value)} />
      </div>
    </div>
    {mounted &&<Accordion panels={objects} exclusive onTitleClick={(e) => indexChange(e)}/>}
    <div  className="d-flex flex-row-reverse pt-5 pb-2">
    <Button  className="mx-2" content="Save" iconPosition="before" primary onClick={Save}/>
    <Button  content="Discard" iconPosition="before" onClick={Discard} />
    </div>
  </>
  )
}
export default MenuContent;