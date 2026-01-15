import { useId } from "react";

function Field({ label }) {
const id = useId();
  return (
    <div className="col">
      {/**/}
      <label className="muted" htmlFor={id}>
        {label} {"The unique id to this feild given by react is"} {id}
      </label>
      {/**/}
      <input 
      id={id}
      className="input"
      placeholder="Enter the Value you want"/>
    </div>
  );
}

export default function UseIdLab() {
  return (
    <div className="card">
      <p className="muted">
        useId gives stable unique ids for accessible forms.
      </p>
      <Field label="Email" />
      <Field label="Password" />
      {/*<Field label="Id" />
      <Field label="Addhar No" />
      <Field label="E" />
      <Field label="P" />
      <Field label="M" />
      <Field label="T" />
      <Field label="B" />*/}
      
    </div>
  );
}