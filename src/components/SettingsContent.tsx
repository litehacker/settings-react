
import { Button, Input, Text, Accordion} from '@fluentui/react-northstar';
import { SearchIcon,AddIcon } from '@fluentui/react-icons-northstar';

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

function Settings () {
  return(
    <div className="container row">
      <div className=" container row col-4 ">
        
      </div>
      <div className="contentSettings container row col-8 ">
        <Text weight="bold" size="larger" content="Configure Navigation" style={{paddingTop:"15px"}}/>
        <Text size="medium" content="The Mega Menu can be configured here" />
        <Text weight="bold" size="large" content="Add Navigation Entries" style={{paddingTop:"15px"}} />
        <Text size="medium" content="Here's an example of how a section can be used to group inputs." />
        <div  className=" row pt-4 pb-5">
          <div className="col-4 ">
            <Button icon={<AddIcon size="small" />}  content="Add Entry" iconPosition="before" primary />
          </div>
          <div className="col-8">
            <Input fluid icon={<SearchIcon/>} placeholder="Search for a navigation entry" iconPosition="end"  />
          </div>
        </div>
        <Accordion panels={NavigationItems} exclusive />
        <div  className="d-flex flex-row-reverse p-5">
          <Button  className="mx-2" content="Save" iconPosition="before" primary />
          <Button  content="Discard" iconPosition="before"  />
        </div>
      </div>
      
    </div>
  )
}

export default Settings;