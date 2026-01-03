import { useId } from "react";

function Field({ label }) {
  const id = useId();
  return (
    <div className="col">
      {/**/}
      <label className="muted" htmlFor={id}>
        {label} {"The unique id to this field given by react is "} {id}
      </label>
      {/**/}
      <input 
      id={id}
      className="input"
      placeholder="Enter the value you want"/>
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
      <Field label="Id" />
      <Field label="Addhar no" />
      <Field label="E" />
      <Field label="P" />
      <Field label="M" />
      <Field label="t" />
      <Field label="b" />
      <Field label="a" />
    </div>
  );
}
