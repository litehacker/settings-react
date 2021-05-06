import {FunctionComponent} from 'react';

type MenuProps =
{
    content:{
        title: string,
        subItems?:string[]
    }[]
}

const MenuContent: FunctionComponent<MenuProps> =  ({content}) => {
    return(
        <div className="row">
            {
                content.map((data, index) => {
                    return (
                        <div className="col-6">
                            <h3 key={index} className="menuTitle">{data.title}</h3>
                            <div className="list-group menuItems">
                                {data.subItems?.map((value,i)=>{
                                    return(
                                        <button key={i} className="list-group-item list-group-item-action">{value}</button>
                                    )
                                })}
                            </div>
                        </div>
                    )
                  })
            }
        </div>
    )
}
export default MenuContent;