import { IoArrowBackSharp } from "react-icons/io5";


export default function EventDetails({ handleToggleDetails }){
    return(
        <div className="mr--10"> 
            <h1 className="font--center color--black pd--40 font--underline">Events Details</h1>  
            <IoArrowBackSharp size={20} className="cursor-pt"  style ={{marginLeft:'20%'}} onClick={handleToggleDetails} />
            <div className="bg--maroon width--column-60 block--auto font--center pd--100" style={{height:'500px'}}> 
                <h2>This Year</h2>
                <p className="pd--40 color--error">Become A Part Of Something Great​</p> 
                <p>This ashrama in Bengaluru, Karnataka, is a spiritual community where individuals live together in a secluded space to practice meditation, yoga, and other spiritual practices. becoming a part of such a community can help individuals learn more about themselves and their spirituality, as well as connect with others who share their beliefs and practices. For more information on specific ashram events and how to become a part of one, you can search online or contact the ashram directly.</p>
            </div> 
        </div>
    )
}