import axios from "axios"
import FormFunc from "../common/formFunc"

class Data extends FormFunc {
    constructor() {
        super();
        this.state = {
            
          }
    }
    async componentDidMount(){
        const {data} = await axios.get("http://localhost:5000/api/customers/")
        this.setState({customerDetails:data})
    }

}
 
export default Data;
