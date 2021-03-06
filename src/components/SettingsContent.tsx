import { useState } from 'react';
import {Text, List ,Image, Accordion} from '@fluentui/react-northstar';
import ExternalLinkIcon from '../img/External_link_font_awesome.svg';
import MenuContent from './MenuContent';

export type SubMenuProps ={
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

function Settings () {
  const [id, setId] = useState(0);

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
  {title:'Title 1', 
    accordion:[
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
    ]
  },
];
  
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
      onClick:() => {setId(0)},
      styles:{minHeight:"2rem !important"}
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
      onClick:() => {setId(0)},
      styles:{minHeight:"2rem !important"}
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
      onClick:() => {setId(0)},
      styles:{minHeight:"2rem !important"}
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
      onClick:() => {setId(0)},
      styles:{minHeight:"2rem !important"}
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
      onClick:() => {setId(0)},
      styles:{minHeight:"2rem !important"}
    },
  ]

  return(
    <div className="container row border-top col-12 mt-2">
      <div className="  row  flex-column col-3 p-2">
        <div className="border-bottom border-2 pb-2">
          <Text weight="bold" size="large" content="Settings" />
        </div>
        <div className="pt-4 settings-list">
          <span className="circle-badge text-decoration-none">1</span>
          <Text weight="bold" size="medium" content="Settings" styles={{paddingLeft:"15px"}}/>
          <List items={ListSettings} navigable styles={{paddingLeft:"40px"}} />
        </div>
        <div className="pt-4 settings-list">
          <span className="circle-badge text-decoration-none">2</span>
          <Text weight="bold" size="medium" content="Administration" styles={{paddingLeft:"15px"}}/>
          <List items={ListAdministration} navigable styles={{paddingLeft:"40px"}} />
        </div>
      </div>
      <div className="contentSettings row col-9  border-start border-2 m-2">
        <MenuContent title="Content Title" titleDescription="Title descrioption text here" subTitle="Sub Title" subTitleDescription="you can add entry"  accordionNavigation={NavigationItems[id].accordion}/>
      </div>
    </div>
  )
}

export default Settings;
