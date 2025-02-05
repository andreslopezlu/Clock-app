
import { useForm } from "react-hook-form"

const Welcome = () => {

    const { register, handleSubmit, formState: {errors}, reset } = useForm()

    const sendFormData= (data) => {
        console.log(data)
    }
    
    const clearFormData = () => {
        reset()
    }   
    
    console.log(errors)

    return (
        <>        
            <form className="register-form" onSubmit={handleSubmit(sendFormData)}>
                <label>
                    Email
                    <input {...register("email", {required: true, maxLength: 50})} />
                </label>
                <label>
                    Password
                    <input type="password" {...register("password", {required: true, maxLength: 50})} />
                </label>
                <label>
                    Phone
                    <input {...register("phone", {required: true, maxLength: 12})} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <button onClick={clearFormData}>Clear</button>
        </>
    )
}

export default Welcome