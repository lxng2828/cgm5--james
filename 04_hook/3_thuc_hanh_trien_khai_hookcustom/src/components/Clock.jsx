import useClock from "../hook/useClock";
import "./Clock.css";

function MyClock() {
    const [time, ampm] = useClock();
    return (
        <div id="Clock-style">
            {time}
            <span> {ampm}</span>
        </div>
    );
}
export default MyClock;