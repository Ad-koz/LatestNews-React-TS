import React from 'react'
import {useState} from 'react'
import { useForm } from "react-hook-form";

interface CustomerInfoObj {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    zipCode: string;
    phoneNumber: string;
    email: string
}
const CustomerForm = () => {

    const [customerInfo, setCustomerInfo] = useState({ firstName: '', lastName: '', street: '', city: '', zipCode: '', phoneNumber: '', email: '' });
    const {register, handleSubmit} = useForm<CustomerInfoObj>();

    const registerUserInfo = (data: CustomerInfoObj) => {
        setCustomerInfo(data)
    }
  return (
    <div>
        <form onSubmit = {handleSubmit(registerUserInfo)}>
            <input type="text" placeholder = 'first name'  {...register("firstName", {required: true})}/>
            <input type="text" placeholder = 'last name' {...register("lastName", {required: true})}/>
            <input type="text" placeholder = 'street' {...register("street", {required: true})}/>
            <input type="text" placeholder = 'city' {...register("city", {required: true})}/>
            <input type="text" placeholder = 'zip code' {...register("zipCode", {required: true})}/>
            <input type="text" placeholder = 'phone number' {...register("phoneNumber", {required: true})}/>
            <input type="text" placeholder = 'email' {...register("email", {required: true})}/>
           <button type="submit">submit</button>
        </form>
        <table>
        <tr>
          <th>First name</th>
          <th>{customerInfo.firstName}</th>
        </tr>
      </table>
    </div>
  )
}

export default CustomerForm