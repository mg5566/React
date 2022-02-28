import Image from "next/image";
import { useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const router = useRouter();

  const showDetailHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li className={classes.item}>
      <Card>
        {/* <div className={classes.image}>
          <Image src={props.image} alt={props.title} width={500} height={500} />
        </div> */}
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailHandler}>Show Detail</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
