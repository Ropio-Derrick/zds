import { Call, Email, EmailSharp, FacebookSharp, HomeMax, Instagram, Mail, Menu, MenuBook, PlaceSharp, Twitter, WhatsApp } from "@mui/icons-material"
import Gigbit from "./gigbit"
import FooterInfo from "./FooterInfo"
import Logom from "../../Images/main.jpg"


function Footer (){
    return(
        <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 xs:p-4 sm:p-4 xs:grid-cols-1 sm:grid-cols-2 bg-black  cursor-pointer relative pt-20 pb-20  width-[100%]   "> 
            <div className="width-full items-center  font-light flex justify-center " >
             <img src={Logom} className="height-50% width-50%" />
           </div>

           {/* Block A Distributor */}
            <div className="  sm:mt-8 xs:my-4 width-full group BordLeft p-8 flex flex-col justify-left  rounded-l-[90px] xs:rounded-[30px] " >
                <h1 className="text-2xl text-bolder text-white  ">Quick link </h1>

                 {   FooterInfo.BloockA.map((InfoA)=>(
                        <div key={InfoA.id} href={InfoA.link} >
                            <p className="   text-md primary1 Transition leading-6 tracking-wide "  >{InfoA.tag}</p>
                        </div>
                    ))
                }
            </div>

            {/* block B distributor */}
            <div className=" p-8  sm:mt-4 xs:my-4 BordLeft   group flex  width-full  flex-col justify-left pr-[30px] rounded-l-[90px] xs:rounded-[30px]  " >
               
                <h1 className="text-2xl text-bolder text-white  ">Safari Booking </h1>
                <div  >
                    <h1 className=" text-white  text-[18px]   leading-100  tracking-wide  "  > <Mail className="Icon"/> Email Us:</h1>
                    <p className="text-gray-400   text-md leading-6 pl-[4px]  " >info@zpsafarikenya.com <br/>Zps.adventure@gmail.com <br/>zinsafadv@yahoo.com </p>
                    <h1 className=" text-white  text-[18px]  leading-100  tracking-wide  "  ><Call className="Icon" /> Call Us:</h1>
                    <p className="text-gray-400   text-md  " > +254 712 395 503</p>
                    <h1 className=" text-white  text-[18px]    leading-100  tracking-wide  "  ><WhatsApp className="Icon"/>  Whatsapp:</h1>
                    <p className="text-gray-400   text-md  " > +254 712 395 503</p>
                </div>
        
            </div>

            {/* block c distributor */}
            <div className=" p-8 sm:mt-8 xs:my-4 group BordLeft flex  width-full   flex-col justify-left mr-0  rounded-l-[90px] xs:rounded-[30px] " >
                 <h1 className="text-2xl text-bolder text-white  ">Platforms </h1>
                 <div className='flex flex-row justify-left mt-[30px]' >
                    <FacebookSharp className="Icons duration-300 transition-all delay-300 mx-2  Transition" />
                    <Instagram className="Icons duration-300 transition-all delay-300 mx-2  Transition"  />
                    <Twitter className="Icons duration-300 transition-all delay-300 mx-2  Transition"  />
                    <Email className="Icons duration-300 transition-all delay-300 mx-2  Transition"  />
                 </div>
                 <button className="Bgprimary">
                    Contact Us
                 </button>
            </div>
            
        </div>
    )
}

export default Footer