import React from 'react'

function UserCard({name,age,location}) {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                <img width={"100%"} src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=MsKXmwf7TDRdKRn_lHohhmD5rvVvnGs9ry0xl6CrMT4=" alt="" />
                    <h2>{name}</h2>
                    <h4>{age}</h4>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCard
