import { useState } from 'react';
import {Text, List ,Image,} from '@fluentui/react-northstar';
import ExternalLinkIcon from '../img/External_link_font_awesome.svg';
import MenuContent from './MenuContent';

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
      onClick:() => {setId("1")},
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
      onClick:() => {setId("2")},
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
      onClick:() => {setId("3")},
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
      onClick:() => {setId("1 Administration")},
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
      onClick:() => {setId("2 Administration")},
      styles:{minHeight:"2rem !important"}
    },
  ]

  return(
    <div className="container row border-top col-12 mt-2">
      <div className="  row  flex-column col-2 p-2">
        <div className="border-bottom pb-2">
          <Text weight="bold" size="large" content="Settings" />
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
      <div className="contentSettings  row col-10  border-start border-2 m-2">
        <MenuContent id={id} />
      </div>
    </div>
  )
}

export default Settings;
