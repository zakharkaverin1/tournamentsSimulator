import type {Tournament} from "../../types/tournament.ts";
import type {Player} from "../../types/player.ts";
import type {Venue} from "../../types/venue.ts";
import type {Team} from "../../types/team.ts";

interface ListProps {
    className?: string;
    type: string;
    items: Tournament[] | Team[] | Player[] | Venue[];
}

const List = (props: ListProps) => {
    const {type, items} = props;
    return (
        <>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {type === "player"
                            ? `${item.firstName} ${item.lastName}`
                            : item.name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default List;