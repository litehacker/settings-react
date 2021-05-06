import {FunctionComponent} from 'react';
import { Button, Input, Text, Accordion, } from '@fluentui/react-northstar';
import { SearchIcon, AddIcon } from '@fluentui/react-icons-northstar';
import Data from '../data/megaMenu.json';

const localData =  JSON.parse(JSON.stringify(Data));

let ArrayAccordion:any = []


console.log(ArrayAccordion)
let SubNavigationItems = [
  {
    key: '3',
    title: 'Navigation Item 1',
    content: 'Content'
  },
  {
    key: '4',
    title: 'Navigation Item 2',
    content: 'Content'
  },
];
let NavigationItems = [
  {
    key: 'one',
    title: 'Navigation Item 1',
    content: (<Accordion panels={SubNavigationItems} exclusive/>),
  },
  {
    key: 'two',
    title: 'Navigation Item 2',
    content: (<Accordion panels={SubNavigationItems} exclusive/>),
  },
];

type SubMenuProps ={
  title: string,
  titleDescription?: string,
  subTitle?:string,
  subTitleDescription?:string,
  accordionNavigation?:{
    key: string;
    title: string;
    content: JSX.Element;
  }[]
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
      <Accordion panels={NavigationItems} exclusive />
      <div  className="d-flex flex-row-reverse pt-5 pb-2">
      <Button  className="mx-2" content="Save" iconPosition="before" primary />
      <Button  content="Discard" iconPosition="before"  />
      </div>
    </>
    )
}
export default MenuContent;