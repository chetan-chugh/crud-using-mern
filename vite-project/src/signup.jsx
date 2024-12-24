import React from 'react'

function signup() {
  return (
   <>
     <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-up</h2>
        <form>
            <div className='mb-3'>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Enter name' name='name' className='form-control rounded-0' />
            </div>
            <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter name' name='name' className='form-control rounded-0' />
            </div>
            <div className='mb-3'>
                <label htmlFor='password'>Password</label>
                <input type='text' placeholder='Enter name' name='name' className='form-control rounded-0' />
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
        </form>
     </div>
   </>
  )
}

export default signup