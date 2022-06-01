import { cryptoName } from "../data/Data"

const GetDate = ({className}) => {
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    var date = new Date()
    var result = date.getDate() + '.' + months[date.getMonth()] + '.' + date.getFullYear()
    return (
        <p className={className}>{ result }</p>
    )
  }
  
  export default GetDate