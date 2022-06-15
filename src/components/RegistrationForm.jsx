import React from 'react';

const RegistrationForm = ( {handleSubmit, details, setDetails} ) => {

  return ( 
    <section className="container-lg form-container">
      <form onSubmit={handleSubmit} id="form">
        <h2>Hello, sign up to get started</h2>
        <div></div>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="" type="name" id="name" name="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} placeholder="John Doe"/>
        </div>
        <div className="mb-3 d-flex flex-column">
          <label className="form-label" htmlFor="email">Email</label>
          <input className="" type="email" id="email" name='email' required onChange={e => setDetails({...details, email: e.target.value})} value={details.email} placeholder="example@gmail.com"/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">Password</label>
          <input className="" type="text" id="password" name='password' required onChange={e => setDetails({...details, password: e.target.value})} value={details.value} placeholder="*********"/>
        </div>
        <input className="form-control btn btn-md bg-info" type="submit" value="REGISTER" aria-label="example"/>
      </form>
    </section>
   );
}
 
export default RegistrationForm;
