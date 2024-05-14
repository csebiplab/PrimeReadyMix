import "../(pages)/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function DashboardLayout({ children }) {
    return (
        <html>
            <body>
                <div>
                    nothing to see {children}
                </div>
            </body>
        </html>
    );
}


