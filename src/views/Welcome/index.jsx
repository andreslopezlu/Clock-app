
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
                    <input {...register("email", {required: true})} />
                </label>
                <label>
                    Password
                    <input {...register("password", {required: true})} />
                </label>
                <label>
                    Phone
                    <input {...register("phone", {required: true})} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <button onClick={clearFormData}>Clear</button>
        </>
    )
}

export default Welcome