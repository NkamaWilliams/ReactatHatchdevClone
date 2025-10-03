export interface UserProps {
  firstName: string,
  lastName: string,
  username: string,
  phone: string,
  country: string,
  email: string
}

export default function User({firstName, lastName, username, phone, country, email}: UserProps) {
  return(
    <div className="border rounded-2xl border-gray-400 p-4 w-sm">
      <div className="flex justify-center items-center text-2x font-bold gap-4 ">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <p className="text-gray-300 text-center">@{username}</p>

      <ul>
        <li><b>Email</b>: {email}</li>
        <li><b>Phone number</b>: {phone}</li>
        <li><b>Country</b>: {country}</li>
      </ul>
    </div>
  )
}