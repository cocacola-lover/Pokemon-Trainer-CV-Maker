
export default function MyForm (props) {

    return props.edit ? (
        <div>
            <label htmlFor={props.id}>{props.label ?? ""}</label>
            <input type="text" 
                   maxLength="30"
                   id={props.id}
                   onChange={(e) => props.updateParentValue(e.target.value)}/>
        </div>
    ) : (<div>
        {props.result}
    </div>)
}