
import Task from "./task";
interface ProjectProps {
    name: string;
    tasks: any;


}

const Project: React.FC<ProjectProps> = (ProjectProps) => {

    const start: Date = new Date("1/2/2020")
    const end: Date = new Date("2/20/2020")


    return (<div><h3>{ProjectProps.name}</h3>
        {
            ProjectProps.tasks?.map((task: any) => (
                <Task start={start} end={end} periods={task.periods} name={task.name} note="q" parent="q"></Task>
            ))
        }

    </div>);
}

export default Project;