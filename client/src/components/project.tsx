
import Task from "./task";
interface ProjectProps {
    name: string;
    tasks: any;


}

const Project: React.FC<ProjectProps> = (ProjectProps) => {

    const start: Date = new Date("3/10/2023")
    const end: Date = new Date("3/27/2023")


    return (<div><div className="project-title"><h3>{ProjectProps.name}</h3></div>
        {
            ProjectProps.tasks?.map((task: any, index: number) => (
                <Task key={index} start={start} end={end} periods={task.periods} name={task.name} note="q" parent="q"></Task>
            ))
        }

    </div>);
}

export default Project;