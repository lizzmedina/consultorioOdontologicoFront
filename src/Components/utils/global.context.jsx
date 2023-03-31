import { createContext, useContext, useState, memo } from "react";

//export const initialState = {theme: "light", data: []}
export const ContextGlobal = createContext();

const ContextProvider = memo(({children}) => {
    const [odontologo, setOdontologo] = useState();

    // const {imgState} = useState({
    //     dorctorLogo: './images/doctor.jpg',
    //     dhLogo:'./images/DH.png',
    //     faceLogo: './images/ico-facebook.png',
    //     whatsappLogo: './images/ico-whatsapp.png',
    //     instaLogo: './images/ico-instagram.png',
    // })
    return (
        <ContextGlobal.Provider value={{odontologo, setOdontologo}} >
            {children}
        </ContextGlobal.Provider>
    )
})
export default ContextProvider;
export const useContextGlobal = () => useContext(ContextGlobal)