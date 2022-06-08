import React, { useState } from 'react';

const RegistrationForm = ( {handleSubmit} ) => {
  // Set initial values for details;
  const [details, setDetails] = useState({name: "", email: "", password: ""});

  // const submitHandler = e => {
  //   e.preventDefault();
  //   Register(details)
  // }

  return ( 
    <form onSubmit={handleSubmit}>
      <div className="form-inner">
        <h2>Please Sign Up</h2>
        {/* ERROR */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" id="name" name="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name='email' required onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.value} />
        </div>
        <input type="submit" value="REGISTER" />
      </div>
    </form>
   );
}
 
export default RegistrationForm;



// import React, { useState } from 'react';

// const RegistrationForm = ( {Register} ) => {
//   // Set initial values for details;
//   const [details, setDetails] = useState({name: "", email: "", password: ""});

//   const submitHandler = e => {
//     e.preventDefault();
//     Register(details)
//   }

//   return ( 
//     <form onSubmit={submitHandler}>
//       <div className="form-inner">
//         <h2>Please Sign Up</h2>
//         {/* ERROR */}
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input type="name" id="name" name="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="text" id="password" name='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.value} />
//         </div>
//         <input type="submit" value="REGISTER" />
//       </div>
//     </form>
//    );
// }
 
// export default RegistrationForm;