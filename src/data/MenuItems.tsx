import {FunctionComponent} from 'react';

type MenuProps =
{
    contentLS?:{
        title: string,
        key:string,
        content?:{
            props?:{
                panels?:any[]
            }
        }
    }[],
    content?:{
        title: string,
        key:string,
        content?:any[]
    }[],
}

const MenuContent: FunctionComponent<MenuProps> =  ({content,contentLS}) => {
    var tmp:any[] = []
    if(contentLS)
        for (let index = 0; index < contentLS.length; index++) {
            tmp.push({
                content:contentLS[index].content?.props?.panels,
                title:contentLS[index].title,
                key:contentLS[index].key,
            })
        }
    else if (content){
        for (let index = 0; index < content.length; index++) {
            tmp.push({
                content:content[index].content,
                title:content[index].title,
                key:content[index].key,
            })
        }
    }
    return(
        <div className="row">
            {
                tmp?.map((data, index) => {
                return (
                    <div className="col-6">
                        <h3 key={data.key} className="menuTitle">{data.title}</h3>
                        <div className="list-group menuItems">
                            {
                                data?.content.map((value:any,index:number)=>{
                                    return(
                                        <button  className="list-group-item list-group-item-action">{value.content}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
                })
            }
        </div>
    )
}
export default MenuContent;