import React,{useEffect,useState} from 'react'
import "./Settings.css"
interface FormData{
  name:string,
  branch:string,
  tagline:string,
  allowNewMembers:boolean,
  allowChangeNames:boolean,
  deployRequest:boolean,
  restrictBranch:boolean,
  allowConsoleAccess:boolean,
  autoCopyMigration:boolean,
  myRadio:string,

}
const Settings = () => {

  const [formData,setFormData]=useState<FormData>({
    name:"",
    branch:"",
    tagline:"",
    allowNewMembers:false,
    allowChangeNames:false,
    deployRequest:false,
    restrictBranch:false,
    allowConsoleAccess:false,
    autoCopyMigration:false,
    myRadio:"",
  })

useEffect(()=>{
},[])

const handleFormData=(e:React.ChangeEvent<HTMLInputElement>)=>{
  // e.preventDefault() This was the issue in checkbox not updating properly
 const {name,type,value,checked}=e.target
 let newVal:string | boolean;

 if (type === "checkbox") {
  newVal = checked; 
} else if (type === "radio") {
  if (checked) {
    newVal = value;
  } 
} else {
  newVal = value;
}

setFormData(prevFormData => ({
  ...prevFormData,
  [name]: type === "checkbox" ? checked : newVal
}));
 console.log("setting")
}
  return (<>
  {/* Page header section */}
  <div id ="header_wrapper">
    <div id="page_title"> 
    <h2>Settings</h2>
    </div>
    <div id="page_search"></div>
  </div>
  {/* The injection area would be conditionally rendered  */}
  <div id="injection_area"></div>
  {/* Form rendering area */}
  <div id="form_area">
    <form>
      <div className="input_wrapper">
      <div className="input_info" >
      <div>Name</div>
      <div>Changes will update all URLs</div> 
      </div>
      <div className="input_main">
        <input type='text' name='name' value={formData.name} onChange={handleFormData}/>
      </div>
      </div>
      <div className='divide'></div>
      <div className="input_wrapper">
      <div className="input_info" >
      <div>Default branch</div>
      <div>Changes will update all URLs</div> 
      </div>
      <div className="input_main">
        <input type='text' name='branch' value={formData.branch} onChange={handleFormData}/>
      </div>
      </div>
      <div className='divide'></div>
      <div className="input_wrapper">
      <div className="input_info" >
      <div>Tagline</div>
      <div>A quick snapshot of your application</div> 
      </div>
      <div className="input_main">
        <input type='text' name='tagline' value={formData.tagline} onChange={handleFormData}/>
      </div>
      </div>
      <div className='divide'></div>
      <div className="input_wrapper">
      <div className="input_info" >
      <div>Advanced Settings</div>
      <div>Reset to default</div> 
      </div>
      <div className="input_main">
        <div>
        <input type='checkbox'  name='allowNewMembers' checked={formData.allowNewMembers} onChange={handleFormData}/>

        </div>
        <div>

        <input type='checkbox'  name='allowChangeNames' checked={formData.allowChangeNames} onChange={handleFormData}/>
        </div>
        <div>

        <input type='checkbox'  name='deployRequest' checked={formData.deployRequest} onChange={handleFormData}/>
        </div>
        <div></div>
        <div>

        <input type='checkbox'  name='restrictBranch' checked={formData.restrictBranch} onChange={handleFormData}/>
        </div>
        <div>
        <input type='checkbox'  name='allowConsoleAccess' checked={formData.allowConsoleAccess} onChange={handleFormData}/>

        </div>
        <div>
        <input type='checkbox'  name="autoCopyMigration"  checked={formData.autoCopyMigration} onChange={handleFormData}/>

        </div>
        <div>
        <input type="radio"  name="myRadio" value="cat" checked={formData.myRadio === "cat"} onChange={handleFormData}/>
        <input type="radio"  name="myRadio" value="bat" checked={formData.myRadio === "bat"} onChange={handleFormData}/>

        </div>
      </div>
      <div>
 

      </div>
      </div>
      <div className='divide'></div>
    </form>

  </div>
    </>
  )
}

export default Settings