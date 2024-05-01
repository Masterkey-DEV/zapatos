import { notFound } from "next/navigation";

interface Props {
    params: {
        id:string
    }
}

export default function page({params}: Props) {
  
    const {id} = params;
    const n_id = parseInt(id)
    if(isNaN(n_id) || n_id > 20){
        notFound()
    }
    
    return (
    <div>
        <h1>product page {id} todo OK</h1>
    </div>
  )
}
