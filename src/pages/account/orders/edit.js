import { ShareDrive } from "@/data/Auth";
import { useEffect, useState } from "react";
// import PageHead from "@/utilities/Head";
// import SEO from '../../../../json/SEO.json'

const EditOrder = ()=>{
    const [ order, setOrder] = useState();
    useEffect(()=>{
        if(ShareDrive()){
            let data = ShareDrive();
            if(data.order){
                setOrder(data);
            }
        }
    },[])
    console.log({order});
    return(
        <p>lorem</p>
    )
}
export default EditOrder;