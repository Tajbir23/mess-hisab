import { useNavigate } from "react-router-dom"
import { useRegisterMutation } from "../../redux/services/userApi"
import Button from "../../ui/Button"


const Signup = () => {
    const [register, { isLoading, isError, error }] = useRegisterMutation()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = e.target
        const phone = formData.phone.value
        const password = formData.password.value
        const name = formData.name.value
        const data = {
            phone,
            password,
            name
        }

        const {token} = await register(data).unwrap()

        if(isLoading) {
            return <h1>Loading...</h1>
        }
        
        if(token) {
            localStorage.setItem("token", token)
            navigate("/")
        }
        if(isError) {
            console.log(error.data?.message)
        }
    }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Signup