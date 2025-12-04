
import { WidthFull } from "@mui/icons-material";
import Sidemenu from "./components/Sidemenu";

export default function RootLayout({ children }){
    return(
        <html lang="en">
            <body style={{display:"flex"}}>
                <Sidemenu />
               <main >{children}</main>
             
            </body>
        </html>
    )
}

