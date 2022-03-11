import React from 'react'
import MonoLoginButton from '../components/MonoButtons';
// import MonoDebit from '../components/layout/MonoDebit';
// import MonoReauthorize from '../components/layout/MonoReauthorize'; 

function Home() {
    return (         
            <div className="Well align-self-center">

              <h1 className="h3 mb-4 text-gray-800">Welcome To Cash Manager</h1>
              
              <div classname="row">
                <button className="btn btn-primary"><MonoLoginButton/></button> 
              </div>
               
            </div>       
    )
}

export default Home
