
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useForm } from "react-hook-form"

import styles from './Welcome.module.css'

const Welcome = () => {

    const [isVisible, setIsVisible] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        setIsVisible(true)
        const hideComponent = () => {
            setTimeout(() => {
                setIsVisible(false)
                navigate('/home')
            }, 3000)
        }
        hideComponent()
    }, [])
    
    return (
        <>  
            {
                isVisible && 
                <div className={styles.welcomeContainer}>
                    <p className={styles.welcomeMessage}>Welcome to Clock App</p>
                    <p className={styles.welcomeMessage}>Loading...</p>
                </div>
            }
        </>
    )

    // const { register, handleSubmit, formState: {errors}, reset } = useForm()

    // const sendFormData= (data) => {
    //     console.log(data)
    // }
    
    // const clearFormData = () => {
    //     reset()
    // }   
    
    // console.log(errors)

    // return (
    //     <>        
    //         <form className="register-form" onSubmit={handleSubmit(sendFormData)}>
    //             <label>
    //                 Email
    //                 <input {...register("email", {required: true, maxLength: 50})} />
    //             </label>
    //             <label>
    //                 Password
    //                 <input type="password" {...register("password", {required: true, maxLength: 50})} />
    //             </label>
    //             <label>
    //                 Phone
    //                 <input {...register("phone", {required: true, maxLength: 12})} />
    //             </label>
    //             <button type="submit">Submit</button>
    //         </form>
    //         <button onClick={clearFormData}>Clear</button>
    //     </>
    // )
}

export default Welcome