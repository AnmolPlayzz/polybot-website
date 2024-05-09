import './CommandCategory.css'
import Command from './Command'

function CommandCategory({command}) {
    return (
        <div className="command-category-list">
            <h2>{command.title}</h2>
            <p className="category-desc">{command.description}</p>
            <div className="commands-container">
                {command.commands.map((info,index) => (
                    <Command key={index} info={info} />
                ))}
            </div>
        </div>
    )
}

export default CommandCategory