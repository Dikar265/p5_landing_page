

export default function ButtonCustom ({name, action, css_custom}) {

    return(
        <button onClick={action} className={`px-4 py-2 bg-red-600 text-white rounded ${css_custom}`}>{name}</button>
    )
}