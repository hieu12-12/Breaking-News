import {IKImage} from "imagekitio-react"


const Image =({src,className,w,h,alt}) =>{
    return (
        <IKImage 
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        path={src}
        src="https://ik.imagekit.io/lamadev/logo.png"
        loading="lazy"
        lqip={{active:true,quality:20}}
        className={className} 
        width={w}
        heithg={h}
        alt={alt}
         />
    )


}
export default Image;
