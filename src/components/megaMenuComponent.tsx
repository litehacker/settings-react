import React from 'react';
import ReactMegaMenu from "react-mega-menu" // https://stackoverflow.com/a/65629179/4307534
import Data from '../data/megaMenu.json';
import MenuItems from '../data/MenuItems';

const localData =  JSON.parse(JSON.stringify(Data));

type MenuContentItem = {
  label: string;            // label to be shown on for each menuItem
  key: string | number;     // a key id
  items: React.ReactNode;   // a react node to be presented as content
}[]

function MegaMenuComponent () {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
      <div className="container-fluid">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16" className="mx-2">
        <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
      </svg>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
        <ul className="navbar-nav" >
          {
            
            localData.map((navbar:any,index:number)=>{
              let subMenuContent:MenuContentItem = []

              for (const inElem of localData[index].subMenuItem) {
                subMenuContent.push(
                  {
                    label: inElem.label,
                    key: inElem.key,
                    items: React.createElement(MenuItems,{content:inElem.content},null)
                  }
                )
              }
              return(
                <li className="nav-item to-hover pt-2" >
                  <a className="nav-link ps-4 " href="0"> {navbar.title} </a>
                  <div className="to-show start-0 position-absolute ps-4">
                  <ReactMegaMenu 
                    tolerance={50}      // optional, defaults to 100
                    direction={"RIGHT"}  // optional, defaults to "RIGHT", takes in "RIGHT" || "LEFT"
                    styleConfig={{
                      menuProps: {
                        style: {
                          height: "503px",
                          width: "200px",
                          margin: "0",
                          background: "#d9d9d9",
                        }
                      },
                      contentProps: {
                        style: {
                          width: "800px",
                          borderTop: "5px solid #6264a7",
                          paddingLeft:"12px",
                          paddingBottom:"24px",
                        }
                      },
                      menuItemProps: {
                        style: {
                          padding: "12px",
                        }
                      },
                      menuItemSelectedProps: {
                        style: {
                          padding: "12px",
                          backgroundColor: "white",
                        }
                      },
                      containerProps: {
                        style: {
                          boxShadow: "0 .5rem 1rem #d9d9d9",
                          borderRadius: "0.25rem",
                        }
                      }
                    }}   // defaults to an empty object. not recommended to be left blank.
                    onExit={()=>{}}  // a function to be called when a mouse leaves the container
                    data={subMenuContent}        // array of data to be rendered
                  />
                </div>
                </li>
              )
            })
          }
          <li className="nav-item ps-4 pt-2">
            <a className="nav-link" href="settings">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg>
            </a>
          </li>
          
        </ul>
        </div> 
      </div> 
    </nav>
  );
}

export default MegaMenuComponent