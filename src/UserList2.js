import React from 'react';

function User({user, onRemove}){
    return (
        <div>
            <b>{user.username}</b> 
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList2({users, onRemove}) {
    return (
        <div>
            {users.map((user,index) => (
                <User user={user} key={index} onRemove={onRemove}/>
            ))}
        </div>
    );
}

export default UserList2;