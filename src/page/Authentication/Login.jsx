import { useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../redux/services/userApi"
import Button from "../../ui/Button"


const Login = () => {
    const [login, {isLoading, isError, error}] = useLoginMutation()

    const navigate = useNavigate()

    const handleLogin = async(e) => {
        e.preventDefault()
        const formData = e.target
        const phone = formData.phone.value
        const password = formData.password.value
        const data = {
            phone,
            password
        }
        const {token} = await login(data).unwrap()

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
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
            Log In
          </Button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </a> 
          or
          <a href="/signup" className="text-sm text-blue-500 hover:underline">
            Signup
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login