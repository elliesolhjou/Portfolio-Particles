import './styles.scss'

const PageHeaderContent = (props)=>{
    const {headerText, icon} = props
    return(
        <div className="wrapper">
            <h2>

            </h2>
            <span>{icon}</span>
        </div>
    )
}