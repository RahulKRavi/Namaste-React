import { useState } from 'react'

const Section = ({title,description}) => {
    const [isDisplayed,setIsDisplayed] = useState(false);
    return (
        <div className="bg-gray-500 m-5 p-4">
            <h2 className="font-semibold">{title}</h2>
            {isDisplayed ?
                (<button
                    onClick={() => setIsDisplayed(false)}
                    className="bg-blue-700" >HIDE</button>) :
                (<button
                    onClick={() => setIsDisplayed(true)}
                    className="bg-blue-700">SHOW</button>)}
            {isDisplayed && <span><br></br>{description}</span>}
        </div >
    )
}


const Dining = () => {
    return (
        <div>
            <Section 
                title="Dining" 
                description="Despite this, many restaurants struggle to write an effective description for their website. Doing so requires a mix of skills not every restaurant has — writing, design and a keen understanding of digital user behavior — but there are tools in place to make the job easier. For example, if you build your website with BentoBox, full-service designers can help create your website on a template that is proven to be user-friendly. That takes care of the design and user behavior hurdles"
            />
            <Section 
                title="Restaurants" 
                description="Despite this, many restaurants struggle to write an effective description for their website. Doing so requires a mix of skills not every restaurant has — writing, design and a keen understanding of digital user behavior — but there are tools in place to make the job easier. For example, if you build your website with BentoBox, full-service designers can help create your website on a template that is proven to be user-friendly. That takes care of the design and user behavior hurdles"
            />
            <Section 
                title="Night Life" 
                description="Despite this, many restaurants struggle to write an effective description for their website. Doing so requires a mix of skills not every restaurant has — writing, design and a keen understanding of digital user behavior — but there are tools in place to make the job easier. For example, if you build your website with BentoBox, full-service designers can help create your website on a template that is proven to be user-friendly. That takes care of the design and user behavior hurdles"   
            />
        </div>
    )
}
export default Dining;