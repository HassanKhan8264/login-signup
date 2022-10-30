import './App.css';
import  Home from './home';
// import  About from './About';

function App() {
     return ( 
      <div>
        <Home/>
      
      </div>
  );
}

export default App;


    /* <Formik
      initialValues={{
        fName: '',
        lName: '',
        email: '',
      }}
      onSubmit={(values) => {
        console.log("value:", values)
      }}
      >
      <Form>
      <div>
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="fName" placeholder="Jane" />
        </div>
        <label htmlFor="lastName">Last Name</label>
        <Field style={{color: "red"}}id="lastName" name="lName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
        id="email"
        name="email"
        placeholder="jane@acme.com"
        type="email"
        />
        <button type="submit">Submit</button>
        </Form>
      </Formik> */