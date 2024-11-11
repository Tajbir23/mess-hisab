import { Link } from "react-router-dom"
import Button from "../../ui/Button"
import { useGetAllUsersQuery, useGetUserQuery, useUpdateRoleMutation, useUpdateStatusMutation } from "../../redux/services/userApi"

const Members = () => {
  const {data} = useGetAllUsersQuery()
  const {data : me} = useGetUserQuery()
  const [updateStatus] = useUpdateStatusMutation()
  const [updateRole] = useUpdateRoleMutation()

  const handleMember = async(type, id) => {
    const body = {status: type}

    try {
      const response = await updateStatus({id, body})
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChangeRole = async(type, id) => {
    const body = {role: type}
    try {
      const response = await updateRole({id, body})
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div >
         <div className="mb-5">
             <h1 className="font-bold text-xl">Members</h1>
         </div>
          <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Member Name</th>
                    <th className="py-2 px-4 border-b text-left">Join date</th>
                    <th className="py-2 px-4 border-b text-center">Role</th>
                    <th className="py-2 px-4 border-b text-center">Phone number</th>
                    <th className="py-2 px-4 border-b text-center">Meal details</th>
                    {me?.user?.role === "admin" | me?.user?.role === "manager" && <th className="py-2 px-4 border-b text-center">Approval</th>}
                  </tr>
                </thead>

                <tbody>
                  
                    {data?.map((member => {
                      
                      const date = new Date(member?.createdAt)
                      const formattedDate = date.toLocaleDateString()
                      
                      return (
                        <tr key={member?._id}>
                      <td className="py-2 px-4 border-b text-left">{member?.name}</td>
                      <td className="py-2 px-4 border-b text-left">{formattedDate}</td>
                      <td className="py-2 px-4 border-b text-center">
                        {member?.role !== "admin" ?<>
                          {me?.user?.role === "manager" | me?.user?.role === "admin" ? <select onChange={(e) => handleChangeRole(e.target.value, member?._id)} className="py-1 px-2 border border-gray-300 rounded-md">
                            <option selected={member?.role === "manager"} value="manager">Manager</option>
                            <option selected={member?.role === "user"} value="user">user</option>
                        </select> : member?.role}
                        </>: member?.role}
                      </td>
                      <td className="py-2 px-4 border-b text-center">0{member?.phone}</td>
                      <td className="py-2 px-4 border-b text-center"><Link to={`/meal_details/${member?._id}`}>See Meal details</Link></td>
                      {me?.user?.role === "admin" | me?.user?.role === "manager" &&<td className="py-2 px-4 border-b text-center">{member.status === "pending" ? <Button onClick={() => handleMember("confirmed", member?._id)} className="bg-green-500">Confirm</Button> : member.status === "confirmed" ? <Button onClick={() => handleMember("block", member?._id)} className="bg-red-500">Block</Button> : member.status === "block" && <Button onClick={() => handleMember("confirmed", member?._id)} className="bg-green-500">Unblock</Button>}</td>}
                    </tr>
                      )
                    }))}
                  
                </tbody>
              </table>
          </div>
      </div>
  )
}

export default Members