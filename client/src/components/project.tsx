
import Task from "./task";
interface ProjectProps {
    name: string;
    tasks: any;


}

const Project: React.FC<ProjectProps> = (ProjectProps) => {
    const start: Date = new Date("1/2/2000")
    const end: Date = new Date("1/20/2000")

    const pstart: Date = new Date("1/2/2000")
    const pend: Date = new Date("1/5/2000")

    return (<div><h3>{ProjectProps.name}</h3>
        <Task start={start} end={end} pstart={pstart} pend={pend} name="test" note="xx" parent="tst"></Task>
        <Task start={start} end={end} pstart={pstart} pend={pend} name="test" note="xx" parent="tst"></Task>
        <Task start={start} end={end} pstart={pstart} pend={pend} name="test" note="xx" parent="tst"></Task>
        <Task start={start} end={end} pstart={pstart} pend={pend} name="test" note="xx" parent="tst"></Task>
    </div>);
}

export default Project;