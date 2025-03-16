function Input(props) {
    return <input
    className="space-y-4 bg-slate-100 outline-slate-400 px-4 py-2 rounded-md"

    // All of the parameters passed to the component will be passed to the input
    {...props}
  />
}

export default Input;