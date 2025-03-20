import { TodoType } from './types/todo';
import { FC } from "react"; 

export const Todo: FC<Omit<TodoType , 'id'>> = (props) => {
    const {title, userId, completed = true}  = props;
    const displayComplete = completed ? `[完]` : `[未]`;
    return (
        <>
            <p>{`${displayComplete}タイトル:${title}(ユーザー:${userId})`}</p>
        </>
    );
}