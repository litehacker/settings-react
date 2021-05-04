import React, { useState } from 'react';
import {Text, Accordion, List ,Image,} from '@fluentui/react-northstar';
import ExternalLinkIcon from '../img/External_link_font_awesome.svg';
import MenuContent from './MenuContent';


const SubSubNavigationItems = [
  {
    key: 'one',
    title: 'Sub Sub Navigation Item 1',
    content: '2 3 4',
  },
  {
    key: 'two',
    title: 'Sub Sub Navigation Item 2',
    content: '6 7 8 9',
  },
  {
    key: 'three',
    title: 'Sub Sub Navigation Item 3',
    content: '10',
  },
];

const SubNavigationItems = [
  {
    key: 'one',
    title: 'Sub Navigation Item 1',
    content: (<Accordion panels={SubSubNavigationItems} exclusive/>),
  },
  {
    key: 'two',
    title: 'Sub Navigation Item 2',
    content: (<Accordion panels={SubSubNavigationItems} exclusive/>),
  },
  {
    key: 'three',
    title: 'Sub Navigation Item 3',
    content: (<Accordion panels={SubSubNavigationItems} exclusive/>),
  },
];

const NavigationItems = [
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
  {
    key: 'three',
    title: 'Navigation Item 3',
    content: (<Accordion panels={SubNavigationItems} exclusive/>),
  },
  {
      key: 'three',
      title: 'Navigation Item 4',
      content: (<Accordion panels={SubNavigationItems} exclusive/>),
    },
    {
      key: 'three',
      title: 'Navigation Item 5',
      content: (<Accordion panels={SubNavigationItems} exclusive/>),
    },
    {
      key: 'three',
      title: 'Navigation Item 6',
      content: (<Accordion panels={SubNavigationItems} exclusive/>),
    },
];




function clickHandler (index?:any) {
  console.log('The link was clicked.' + index);
}


function Settings () {
  const [id, setId] = useState("1");

  
  const ListSettings = [
    {
      key: '1',
      media: (
        <Image 
        styles={{
          width: '15px',
          height: '15px',
        }}
        src={ExternalLinkIcon}
        />
      ),
      content: 'Step 1',
      onClick:() => {setId("1")}
    },
    {
      key: '2',
      media: (
        <Image 
        styles={{
          width: '15px',
          height: '15px',
        }}
        src={ExternalLinkIcon}
        />
      ),
      content: 'Step 2',
      onClick:() => {setId("2")}
    },
    {
      key: '3',
      media: (
        <Image 
        styles={{
          width: '15px',
          height: '15px',
        }}
        src={ExternalLinkIcon}
        />
      ),
      content: 'Step 3',
      onClick:() => {setId("3")},
      styles:{maxHeight:"10px"}
    },
  ]
  const ListAdministration = [
    {
      key: '1',
      media: (
        <Image 
        styles={{
          width: '15px',
          height: '15px',
        }}
        src={ExternalLinkIcon}
        />
      ),
      content: 'Licensing',
      onClick:() => {setId("1 Administration")}
    },
    {
      key: '2',
      media: (
        <Image 
        styles={{
          width: '15px',
          height: '15px',
        }}
        src={ExternalLinkIcon}
        />
      ),
      content: 'Administrations',
      onClick:() => {setId("2 Administration")}
    },
  ]


  return(
    <div className="container row border-top col-8 mt-2">
      <div className="  row  flex-column col-4 p-2">
        <div className="border-bottom pb-2">
          <Text weight="bold" size="larger" content="Settings" />
        </div>
        <div className="pt-4 settings-list">
          <span className="circle-badge text-decoration-none">1</span>
          <Text weight="bold" size="medium" content="Settings" styles={{paddingLeft:"15px"}}/>
          <List items={ListSettings} navigable styles={{paddingTop:"10px", paddingLeft:"25px"}} />
        </div>
        <div className="pt-4 settings-list">
          <span className="circle-badge text-decoration-none">2</span>
          <Text weight="bold" size="medium" content="Administration" styles={{paddingLeft:"15px"}}/>
          <List items={ListAdministration} navigable styles={{paddingTop:"10px", paddingLeft:"25px"}} />
        </div>
      </div>

      <MenuContent id={id}/>
      
    </div>
  )
}

export default Settings;
